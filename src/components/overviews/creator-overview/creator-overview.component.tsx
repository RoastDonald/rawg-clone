import React from 'react';
import styles from './creator-overview.module.scss';
import { CreatorResponse } from '../../../API_Interfaces/search-interfaces';

interface CreatorOverviewProps {
  creators: CreatorResponse | null;
}

const getColor = () => {
  let H = Math.floor(Math.random() * 240);
  return `linear-gradient(hsl(${H},100%,70%),hsl(${H},100%,30%))`;
};

const resizeImage = (url: string) => {
  return url.replace('media/', 'media/resize/200/-/');
};

export const CreatorOverview = (props: CreatorOverviewProps) => {
  if (!props.creators?.count) return null;
  return (
    <section>
      <div className={styles.suggestionTitle}>
        <span className={styles.sectionName}>Creators</span>
        <span className={styles.count}>{props.creators?.count}</span>
      </div>
      {props.creators.results
        .filter((e, index) => index < 2)
        .map((creator) => {
          return (
            <div className={styles.creator} key={creator.id}>
              <div
                className={styles.creator_avatar}
                style={{
                  backgroundImage: `${
                    creator.image
                      ? `url(${resizeImage(creator.image)})`
                      : getColor()
                  }`,
                }}
              />

              <div className={styles.creator_info}>
                <div>{creator.name}</div>
                <div className={styles.creator_meta}>
                  {creator.positions[0].name}
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
