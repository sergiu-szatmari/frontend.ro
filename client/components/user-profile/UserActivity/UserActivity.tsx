import React, { useEffect, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import ExercisePreview from '~/components/ExercisePreview';
import PageContainer from '~/components/PageContainer';
import { RootState } from '~/redux/root.reducer';
import { UserState } from '~/redux/user/types';
import ExerciseService from '~/services/Exercise.service';
import NoActivity from '../NoActivity/NoActivity';

import styles from './UserActivity.module.scss';

interface Props {
  profileUser: UserState['info']
}

function UserActivity({ profileUser, currentUser }: ConnectedProps<typeof connector> & Props) {
  const isOwnProfile = currentUser.info && currentUser.info.username === profileUser.username;
  const [exercises, setExercises] = useState(undefined);
  useEffect(() => {
    const exercisesPromise = isOwnProfile
      ? ExerciseService.getExercises(profileUser.username)
      : ExerciseService.getPublicExercises(profileUser.username);

    exercisesPromise.then((resp) => {
      setExercises(resp);
    }).catch((err) => {
      console.error(err);
    });
  }, []);

  if (!exercises) {
    // Loading
    return null;
  }

  if (exercises.length === 0) {
    return <NoActivity user={profileUser} />;
  }

  return (
    <PageContainer>
      <h2> Exerciții </h2>
      <div className={styles['exercises-wrapper']}>
        {exercises.map((ex, index) => (
          <ExercisePreview
            key={ex._id}
            href={`${profileUser.username}/#`}
            author={profileUser}
            body={ex.body}
            isPrivate={ex.private}
            tags={[ex.type.toUpperCase()]}
            viewMode={isOwnProfile ? 'TEACHER' : 'STUDENT'}
            feedbackCount={0}
            isApproved={false}
            readOnly={false}
          />
        ))}

      </div>
    </PageContainer>
  );
}

function mapStateToProps(state: RootState) {
  return {
    currentUser: state.user,
  };
}

const connector = connect(mapStateToProps);

export default connector(UserActivity);
