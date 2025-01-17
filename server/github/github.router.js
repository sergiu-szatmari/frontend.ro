
const express = require('express');
const fetch = require('node-fetch');
const { PrivateMiddleware } = require('../Middlewares');
const { ServerError } = require('../ServerUtils');
const UserModel = require('../user/user.model');
const { default: appConfig } = require('../config');

const githubRouter = express.Router();

githubRouter.get("/user", [PrivateMiddleware, async function getLoggedInUser(req, res) {
  const { user } = req.body;

  if (!user.github_access_token) {
    new ServerError(404, `User with username=${user.username} isn't connected to GitHub`).send(res);
    return;
  }

  const githubUser = await getGithubUser(user.github_access_token);
  if (!githubUser) {
    // Token has expired or is broken
    new ServerError(404, `User with username=${user.username} isn't connected to GitHub`).send(res);
    return;
  }

  res.json({
    ...githubUser,

    // We're sending this security token to the user
    // so we can validate the challenge client-side.
    // (we have a 5000 request limit for authenticated call)
    // Does this pose a security risk?
    // It's not persisted in cookies/session/localStorage
    // just in memory while the user is on the task page
    access_token: user.github_access_token
  });
}]);

githubRouter.get("/callback", [PrivateMiddleware, function gitHubAuth(req, res) {
  const { user } = req.body;
  const { code, error, error_description, error_uri } = req.query;

  if (error) {
    // TODO: handle error
    res.redirect(`/provocari/git-github?error_description=${error_description}`);
    return;
  }

  fetch("https://github.com/login/oauth/access_token", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json"
    },
    body: JSON.stringify({
      client_id: appConfig.GITHUB.id,
      client_secret: appConfig.GITHUB.secret,
      code
    })
  })
    .then(resp => resp.json())
    .then(async ({ access_token }) => {
      // TODO: what happens if any of those fails?
      const githubUserJson = await getGithubUser(access_token);
      const updatedUser = await UserModel.setGithubAccessToken(user._id, access_token);
    })
    .finally(() => res.redirect(`/provocari/git-github`))
}]);

// @returns User Object or null
async function getGithubUser(access_token) {
  try {
    const githubUserResp = await fetch(`https://api.github.com/user`, {
      method: "GET",
      headers: {
        Authorization: `token ${access_token}`
      }
    });

    const githubUserJson = await githubUserResp.json();
    return githubUserJson;
  } catch (err) {
    console.error("githubRouter.getGithubUser", err);
    return null;
  }
}

module.exports = githubRouter;