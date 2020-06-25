import React from 'react';
import { Link } from 'react-router-dom';
import {
  GamesResponse,
  Game,
  Platform,
} from '../search-results/search-interfaces';
import { Platforms } from './game-platforms';
import styles from './game-overview.module.scss';

interface GameOverviewProps {
  games: GamesResponse | null;
}

type platform = keyof typeof Platforms;

const getPlatform = (platform: platform) => {
  platform = platform.split(' ')[0] as platform;
  return Platforms[platform];
};

export const getPlatformsJSX = ({ platforms }: Game) => {
  let additional: number | undefined;
  if (platforms.length > 4) {
    additional = platforms.length - 3;
    platforms = platforms.slice(0, 3);
  }
  return (
    <React.Fragment>
      {platforms.map(({ platform }: Platform, index: number) => {
        return (
          <div
            key={platform.id}
            style={{
              backgroundImage: `url(${getPlatform(platform.name as platform)})`,
            }}
            className={styles.platform}
          />
        );
      })}
      {additional && <div>+{additional}</div>}
    </React.Fragment>
  );
};

export const GameOverview: React.FC<GameOverviewProps> = (props) => {
  if (!props.games?.count) return null;

  return (
    <section>
      <div className={styles.suggestionTitle}>
        <span className={styles.sectionName}>Games</span>
        <span className={styles.count}>{props.games?.count}</span>
      </div>
      {props.games?.results
        .filter((elem: Game, index: number) => index < 7)
        .map((elem: Game) => {
          if (elem.background_image) {
            elem.background_image = elem.background_image.replace(
              'media/',
              'media/resize/200/-/'
            );
          }

          return (
            <div key={elem.id} className={styles.card}>
              <span
                style={{ backgroundImage: `url(${elem.background_image})` }}
                className={styles.card_background}
              />

              <div className={styles.cardInfo}>
                <div className={styles.meta}>
                  <div className={styles.platforms}>
                    {elem.platforms ? getPlatformsJSX(elem) : null}
                  </div>
                </div>
                <div className={styles.gameName}>
                  <Link to={`/games/${elem.slug}`}>{elem.name}</Link>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  );
};
