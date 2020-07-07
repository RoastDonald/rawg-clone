import React, { useState, createRef, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Arrow } from '../../assets/next.svg';
import style from '../overviews/game-overview/game-overview.module.scss';
import moment from 'moment';
import sprite from '../../assets/sprite.svg';
import YouTubePortal from '../../portals/youtube/portal.component';
import './game-card.styles.scss';
import { getPlatform, platform } from '../../utils/platform-parsing';

type ListItemProps = {
  item: import('../../API_Interfaces/main-page-interfaces').Result;
};

export const GameCard = ({ item }: ListItemProps) => {
  const videoRef = createRef<HTMLVideoElement>();
  const wrapperRef = createRef<HTMLDivElement>();
  const playButtonRef = createRef<HTMLDivElement>();
  const [src, setSrc] = useState('');
  const [isLoading, setLoad] = useState(false);
  const [isHovered, setHover] = useState(false);
  const [fullVidStatus, setFullVidStatus] = useState(false);
  useEffect(() => {
    let play = videoRef.current?.play();
    if (play !== undefined) {
      play
        .then((_) => {
          console.log('audio played auto');
        })
        .catch((error) => {
          console.log('playback prevented');
        });
    }
  }, [src]);
  const handleVideo = () => {
    setFullVidStatus(true);
  };

  return (
    <Fragment>
      <div
        className="game-card"
        key={item.id}
        onMouseEnter={() => {
          setHover(true);
          setSrc(item.clip?.clips[320] || '');
          videoRef.current?.play();
        }}
        onMouseLeave={() => {
          setHover(false);
          let video = videoRef.current;
          let wrapper = wrapperRef.current;
          let playButton = playButtonRef.current;
          setLoad(false);
          setSrc('');
          video?.pause();

          if (playButton && wrapper && video?.currentTime) {
            wrapper.style.opacity = '1';
            video.currentTime = 0;
            playButton.style.zIndex = '-1';
          }
        }}
      >
        <div className="game-card-wrapper">
          <div className="game-card__media-content">
            <div className="preview media-content-wrapper">
              {item.clip && (
                <div
                  ref={playButtonRef}
                  className="preview__play-button-container"
                  onClick={handleVideo}
                >
                  <div className="play-button">
                    <svg className="play-button__icon">
                      <use href={sprite + '#icon-play'} />
                    </svg>
                    <span className="play-button__title">Play full video</span>
                  </div>
                </div>
              )}
              {isLoading && (
                <div className="preview__loader loader-wrapper">
                  <div className="lds-ripple">
                    <div />
                    <div />
                  </div>
                </div>
              )}
              <video
                onLoadStart={() => {
                  if (videoRef.current?.attributes.getNamedItem('src')?.value) {
                    setLoad(true);
                  }
                }}
                onCanPlay={() => {
                  if (wrapperRef.current && playButtonRef.current) {
                    wrapperRef.current.style.opacity = '0';
                    playButtonRef.current.style.zIndex = '2';
                  }
                  setLoad(false);
                }}
                ref={videoRef}
                src={src}
                playsInline={true}
                muted={true}
                loop={true}
                className="preview__video"
              />
              {item.background_image && (
                <div
                  ref={wrapperRef}
                  className="preview__image"
                  style={{
                    backgroundImage: `url(${item.background_image.replace(
                      'media/',
                      'media/crop/600/400/'
                    )})`,
                  }}
                />
              )}
            </div>
          </div>

          <div className="game-card__info">
            <div className="game-card__meta">
              {item.parent_platforms.map((wrapper, index) => {
                const { platform } = wrapper;
                return (
                  <div
                    key={platform.id}
                    style={{
                      backgroundImage: `url(${getPlatform(
                        platform.name as platform
                      )})`,
                    }}
                    className={style.platform}
                  />
                );
              })}
            </div>
            <div className="game-card__title">
              <Link
                to={{
                  pathname: `/games/${item.slug}`,
                  state: { name: item.name },
                }}
              >
                <h1>{item.name}</h1>
              </Link>
            </div>

            <div className="game-card__buttons">
              <button className="game-card-button">
                <svg className="game-card-button__icon">
                  <use href={sprite + '#icon-plus'} />
                </svg>
                <span className="game-card-button__title">
                  {item.suggestions_count}
                </span>
              </button>
              <button className="game-card-button">
                <svg className="game-card-button__icon">
                  <use href={sprite + '#icon-present'} />
                </svg>
              </button>
              <button className="game-card-button">
                <svg className="game-card-button__icon">
                  <use href={sprite + '#icon-dotes'} />
                </svg>
              </button>
            </div>
            <div className="game-card__about">
              {isHovered && (
                <div className="game-card__list-container">
                  <ul className="game-card__list">
                    <li className="game-card__list-item">
                      <div className="game-card__item-title">Release date:</div>
                      <div className="game-card__item-description">
                        {moment(item.released).format('MMM D, YYYY')}
                      </div>
                    </li>
                    <li className="game-card__list-item">
                      <div className="game-card__item-title">Genres:</div>
                      <div className="game-card__item-description">
                        {item.genres.map((genre, indx) => (
                          <Link
                            to="/"
                            className="game-card__item-link"
                            key={genre.slug}
                          >
                            <span>
                              {genre.name}
                              {item.genres.length === indx + 1 ? ' ' : ','}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </li>
                    <li className="game-card__list-item">
                      <div className="game-card__item-title">Reviews:</div>
                      <div className="game-card__item-description">
                        {item.reviews_count}
                      </div>
                    </li>
                  </ul>
                  <div className="game-card-list-button-container">
                    <Link to="" className="game-card__list-button">
                      <div className="game-card__list-button-item">
                        Show more like this
                      </div>
                      <div className="game-card__list-button-item">
                        <Arrow className="game-card__list-button-icon" />
                      </div>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {fullVidStatus && (
        <YouTubePortal
          setFullVid={setFullVidStatus}
          videoURL={item.clip?.video}
        />
      )}
    </Fragment>
  );
};
