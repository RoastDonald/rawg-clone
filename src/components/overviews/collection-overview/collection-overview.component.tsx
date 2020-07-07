import React from 'react';
import {
  CollectionResponse,
  Background,
  Collection,
} from '../../../API_Interfaces/search-interfaces';
import styles from './collection-overview.module.scss';
type CollectionOverviewProps = {
  collections: CollectionResponse | null;
};

const getCards = (count: number, urls: Background[]) => {
  let cards = new Array(count).fill(null).map((val, index) => {
    if (urls[index]) {
      const resized = urls[index].url.replace('media/', 'media/resize/200/-/');
      return (
        <div
          key={index}
          style={{ backgroundImage: `url(${resized})` }}
          className={styles.collection_card}
        />
      );
    } else {
      return <div key={index} className={styles.collection_card} />;
    }
  });

  return cards;
};

export const CollectionOverview = (props: CollectionOverviewProps) => {
  if (!props.collections?.count) return null;
  return (
    <section>
      <div className={styles.suggestionTitle}>
        <span className={styles.sectionName}>Collections</span>
        <span className={styles.count}>{props.collections?.count}</span>
      </div>
      {props.collections?.results
        .filter((collection: Collection, index) => index < 2)
        .map((collection: Collection) => {
          return (
            <div className={styles.collection} key={collection.id}>
              <div className={styles.collection_cards}>
                {getCards(4, collection.backgrounds)}
              </div>

              <div className={styles.collection_info}>
                <div>{collection.name}</div>
                <div className={styles.collection_meta}>
                  <span>{collection.games_count}</span>
                  <span>{collection.games_count > 1 ? ' games' : ' game'}</span>
                </div>
                <div className={styles.collection_meta}>cakes</div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
