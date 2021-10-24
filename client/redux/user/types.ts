import { ChapterType } from '../exercise-submissions/types';
import { ParsedNotificationI } from '~/../shared/types/notification.types';

export interface UserState {
  info: {
    name: string;
    username: string;
    email: string;
    avatar: string;
    // FIXME: exact types from SharedConstants
    role: string,
    description?: string;
  };
  notifications: Notifications;
}

export interface Notifications {
  list: ParsedNotificationI[];
  unreadCount: number;
  page: number;
  end: boolean;
}

export interface Exercise {
  _id: string;
  body: string;
  example?: string;
  private: boolean;
  solution: string;
  suggestion?: string;
  tags: string[];
  type: ChapterType;
  user: UserState['info'];
  lesson?: string;
}

export interface LessonExercise {
  _id: string;
  body: string;
  example?: string;
  private: boolean;
  solution: string;
  lesson: string;
  tags: string[];
  type: ChapterType;
  isApproved: boolean;
  feedbackCount: number;
  user: UserState['info'];
}
