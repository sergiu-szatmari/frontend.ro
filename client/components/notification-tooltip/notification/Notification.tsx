import React from 'react';
import Link from 'next/link';
import { format } from 'date-fns';
import { timeAgo } from '../../../services/Utils';
import { ParsedNotificationI } from '~/../shared/types/notification.types';

import styles from './Notification.module.scss';

interface Props {
  notification: ParsedNotificationI,
  onMarkAsRead: (_id: string) => void
}

const Notification = ({
  notification,
  onMarkAsRead,
}: Props) => (
  <li
    className={`
      ${styles.notification} 
      ${!notification.read ? styles['is--unread'] : ''} text-xs
    `}
    onClick={() => onMarkAsRead(notification._id)}
  >
    <Link href={notification.href ?? '#'}>
      <a className="d-flex no-underline">
        <img
          width="32"
          height="32"
          alt={notification.from ? `${notification.from.username} avatar` : 'FrontEnd.ro'}
          src={notification.from ? notification.from.avatar : `${process.env.CLOUDFRONT_PUBLIC}/public/logo-square--S.jpg`}
        />
        <div className="body">
          <p className="m-0">
            <span className={styles.user}>
              {notification.from?.name ?? notification.from?.username ?? ''}
            </span>
            {notification.long_message}
          </p>
          <time
            className="text-silver"
            dateTime={format(notification.timestamp, 'yyyy-MM-dd')}
          >
            {timeAgo(new Date(notification.timestamp))}
          </time>
        </div>
      </a>
    </Link>
  </li>
);

export default Notification;
