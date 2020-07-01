import React from 'react';
import { UsersResponse } from '../../../API_Interfaces/search-interfaces';
import { CollectionSVG, GamesSvg } from './svgs';
import styles from './user-overview.module.scss';
interface UserOverviewProps {
  users: UsersResponse | null;
}

const getColor = () => {
  let H = Math.floor(Math.random() * 240);
  return `linear-gradient(hsl(${H},100%,70%),hsl(${H},100%,30%))`;
};
const resizeImage = (url: string) => {
  return url.replace('media/', 'media/resize/200/-/');
};

export const UserOverview = (props: UserOverviewProps) => {
  if (!props.users?.count) return null;
  console.log(props);
  return (
    <section>
      <div className={styles.suggestionTitle}>
        <span className={styles.sectionName}>Users</span>
        <span className={styles.count}>{props.users?.count}</span>
      </div>
      {props.users.results
        .filter((e, index) => index < 2)
        .map((user) => {
          return (
            <div className={styles.user} key={user.id}>
              <div className={styles.user_avatar}>
                <div
                  className={styles.user_avatar}
                  style={{
                    backgroundImage: `${
                      user.image_background
                        ? `url(${resizeImage(user.image_background)})`
                        : getColor()
                    }`,
                  }}
                >
                  {!user.image_background && (
                    <span className={styles.user_avatar_inner}>
                      {user.username[0].toUpperCase()}
                    </span>
                  )}
                </div>
              </div>

              <div className={styles.user_info}>
                <div>{user.username}</div>
                <div className={styles.user_meta}>
                  <div className={styles.user_meta_container}>
                    <CollectionSVG width={13} height={13} />
                    <span className={styles.user_meta_data}>
                      {user.collections_count}
                    </span>
                  </div>
                  <div className={styles.user_meta_container}>
                    <GamesSvg width={13} height={13} />
                    <span className={styles.user_meta_data}>
                      {user.games_count}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
