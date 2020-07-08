import React, { Fragment, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import moment from 'moment';

import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { setGame } from '../../redux/game/game.actions';

import {
  GameInfo,
  PlatformPlatform,
} from '../../API_Interfaces/game-info-interfaces';

import Sidebar from '../../components/sidebar/sidebar.container';
import Header from '../../components/header/header.component';
import PageArt from '../../components/page-art/page-art.component';
import Breadcrumbs from '../../components/breadcrumbs/breadcrumbs.component';
import { RootState } from '../../redux/root-reducer';
import { Platforms } from '../../components/overviews/game-overview/game-platforms';
import { Platform } from '../../API_Interfaces/search-interfaces';

import './game.styles.scss';

interface IGamePageParams {
  slug: string;
}

type GamePageProps = ReturnType<typeof mapDispatchToProps> &
  ReturnType<typeof mapStateToProps>;

type platform = keyof typeof Platforms;

export const getPlatformsJSX = (game: GameInfo | null) => {
  if (!game) return null;
  let { platforms = [] } = game;
  let additional: number | undefined;
  const uniqPlatforms = new Map<string, PlatformPlatform>();

  platforms.forEach(({ platform }) => {
    let name = platform.name.split(' ')[0];
    if (!uniqPlatforms.get(name)) {
      platform.name = name;
      uniqPlatforms.set(name, platform);
    }
  });

  if (uniqPlatforms.size > 4) {
    additional = uniqPlatforms.size - 3;
  }

  return (
    <React.Fragment>
      {Array.from(uniqPlatforms.values()).map(({ name, id }, index: number) => {
        return (
          <div
            key={id}
            style={{
              backgroundImage: `url(${
                Platforms[name as keyof typeof Platforms]
              })`,
            }}
            className="game__platform"
          />
        );
      })}
      {additional && <div>+{additional}</div>}
    </React.Fragment>
  );
};

const GamePage: React.FC<GamePageProps> = ({ setGame, game }) => {
  let { slug } = useParams<IGamePageParams>();
  useEffect(() => {
    const fetchGameInfo = async () => {
      const res = await axios.get(`https://rawg.io/api/games/${slug}`);
      setGame(res.data);
    };
    fetchGameInfo();
  }, [slug]);

  if (!game) return null;
  const { released, name, reviews_count } = game;
  const releaseDateFormated = moment(game?.released).format('MMM D, YYYY');
  return (
    <Fragment>
      <Header />
      <div className="page__wrapper with-sidebar">
        <Sidebar />
        <main className="page__content">
          <div className="content__wrapper">
            <Breadcrumbs />
            <div className="game-content-columns">
              <div className="game-content-columns__column">
                <div className="game__head">
                  <div className="game__meta">
                    <div className="game__release-date">
                      {releaseDateFormated}
                    </div>
                    <div className="game__platforms">
                      {getPlatformsJSX(game)}
                    </div>
                  </div>
                  <h1 className="game__name heading">{game?.name}</h1>
                </div>

                <div className="game-cta">
                  <button className="game-cta__button">
                    <span>Action</span>
                  </button>
                  <button className="game-cta__button">
                    <span>Action</span>
                  </button>
                  <button className="game-cta__button">
                    <span>Action</span>
                  </button>
                </div>

                <div
                  className="game__description"
                  dangerouslySetInnerHTML={{ __html: game.description }}
                />

                <div className="game__meta-detailed">
                  <div className="meta-block">
                    <div className="meta-block__title">Platforms</div>
                    <div className="meta-block__content">
                      {game.platforms.map((plat, indx) => (
                        <Link key={indx} to="/" className="link">
                          {plat.platform.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="meta-block">
                    <div className="meta-block__title">Genre</div>
                    <div className="meta-block__content">
                      {game.genres.map((genre, indx) => (
                        <Link key={indx} to="/" className="link">
                          {genre.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="meta-block">
                    <div className="meta-block__title">Release date</div>
                    <div className="meta-block__content">
                      {releaseDateFormated}
                    </div>
                  </div>
                  <div className="meta-block">
                    <div className="meta-block__title">Developer</div>
                    <div className="meta-block__content">
                      {game.developers.map((dev, indx) => (
                        <Link to="/" key={indx} className="link">
                          {dev.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="meta-block">
                    <div className="meta-block__title">Publisher</div>
                    <div className="meta-block__content">
                      {game.publishers.map((pub, indx) => (
                        <Link key={indx} to="/" className="link">
                          {pub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  <div className="meta-block">
                    <div className="meta-block__title">Achievements</div>
                    <div className="meta-block__content">
                      {game.parent_achievements_count}
                    </div>
                  </div>
                </div>
              </div>
              <div className="game-content-columns__column">
                <div className="game__media">
                  {game.clip && (
                    <video
                      playsInline={true}
                      muted={true}
                      loop={true}
                      autoPlay={true}
                      className="game-video preview__video"
                      src={game.clip.clips[640]}
                    />
                  )}
                </div>
              </div>
            </div>
            {/* <div className="game__commnets"></div> */}
          </div>
        </main>
      </div>
      <PageArt
        backgroundImageURL={
          game?.background_image || game.background_image_additional || ' '
        }
      />
    </Fragment>
  );
};

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setGame: (game: GameInfo) => dispatch(setGame(game)),
});

const mapStateToProps = (state: RootState) => ({
  game: state.game.currentGame,
});

export default connect(mapStateToProps, mapDispatchToProps)(GamePage);
