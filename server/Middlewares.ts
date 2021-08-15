import jwt, { Algorithm } from 'jsonwebtoken';
import UserModel from './user/user.model';
import { ServerError } from './ServerUtils';
import ExerciseModel from './exercise/exercise.model';
import LessonExerciseModel from './lesson-exercise/lesson-exercise.model';
import { UserRole }from '../shared/SharedConstants';
import { Request, Response,NextFunction } from "express"
/****************** User Middleware */
/** 
 * Everyone can access the API. 
 * If you have a token, it will be added into the req.body 
 */
function PublicMiddleware(req:Request,res:Response, next:NextFunction) {
  const authToken = req.cookies.token;

  if (!authToken) {
    next();
  } else {
    jwt.verify(
      authToken,
      process.env.TOKEN_SECRET,
      {
        algorithms: [process.env.TOKEN_ALGORITHM as Algorithm]
      },
      (err, payload) => {
        if (err) {
          next();
        } else {
          UserModel.findUserBy({ _id: payload._id })
            .then(resp => {
              req.body.user = resp;
              next();
            })
            .catch(() => next());
        }
      }
    );
  }
}

/** Only authorized users can access this API */
function PrivateMiddleware(req:Request,res:Response, next:NextFunction) {
  const authToken = req.cookies.token;

  if (!authToken) {
    new ServerError(401, 'Unauthorized!').send(res);
    return;
  }

  jwt.verify(
    authToken,
    process.env.TOKEN_SECRET,
    {
      algorithms: [process.env.TOKEN_ALGORITHM as Algorithm]
    },
    (err, payload) => {
      if (err) {
        new ServerError(401, 'Unauthorized!').send(res);
        return
      } else {
        UserModel.findUserBy({ _id: payload._id })
          .then(resp => {
            req.body.user = resp;
            next();
          })
          .catch(err => res.status(err.status).json(err));
      }
    }
  );
}

function UserRoleMiddleware(role : UserRole) {
  if (!(role in UserRole)) {
    const availableUserRoles = Object.values(UserRole).join(',');
    console.error(`[UserRoleMiddleware] 'role' must be one of: ${availableUserRoles}.`);

    return (_, res) => {
      new ServerError(401, 'Nu ai rolul necesar pentru a accesa această resursă').send(res);
      return
    }
  }

  return (req:Request,res:Response, next:NextFunction) => {
    PrivateMiddleware(req, res, () => {
      if (req.body.user.role === role) {
        next();
        return;
      }

      new ServerError(401, 'Nu ai rolul necesar pentru a accesa această resursă').send(res);
    })
  }
}

/****************** Exercise Middleware */
async function PublicOrOwnExercise(req:Request,res:Response, next:NextFunction) {
  const { exerciseId } = req.params;

  try {
    const exercise = await ExerciseModel.get(exerciseId);
    if (!exercise) {
      new ServerError(404, 'Exercițiul nu există.').send(res);
      return
    }

    if (exercise.private) {
      await OwnExercise(req, res, next);
    }

    next();
  } catch (err) {
    console.error("[OwnExercise]", {
      code: err.code,
      message: err.message
    });

    new ServerError(err.code, err.message).send(res);
    return
  }
}

async function OwnExercise(req:Request,res:Response, next:NextFunction) {
  const { exerciseId } = req.params;

  try {
    const exercise = await ExerciseModel.get(exerciseId);
    if (!exercise) {
      new ServerError(404, 'Exercițiul nu există.').send(res);
      return
    }

    if (req.body.user?.username !== exercise.user.username) {
      new ServerError(403, 'Doar autorul acestui exercițiu îl poate accesa.').send(res);
      return
    }

    next();
  } catch (err) {
    console.error("[OwnExercise]", {
      code: err.code,
      message: err.message
    });

    new ServerError(err.code, err.message).send(res);
    return
  }
}

async function SolvableExercise(req:Request,res:Response, next:NextFunction) {
  const { exerciseId } = req.params;

  try {
    const lessonExercise = await LessonExerciseModel.get(exerciseId);
    if(!lessonExercise) {
      throw new ServerError(404, 'Exercițiul nu există!');
    }

    next();
  } catch(err) {
    console.error("[SolvableExercise]", {
      code: err.code,
      message: err.message
    });

    new ServerError(err.code, err.message).send(res);
    return
  }
}

export {
  PublicMiddleware,
  PrivateMiddleware,
  PublicOrOwnExercise,
  UserRoleMiddleware,
  OwnExercise,
  SolvableExercise,
}