import React, { useState, createRef, useEffect } from 'react';
import { Game } from '../../API_Interfaces/search-interfaces';
import { Link } from 'react-router-dom';
import { getPlatformsJSX } from '../overviews/game-overview/game-overview.component';
import sprite from '../../assets/sprite.svg';
import './game-card.styles.scss';

interface ListItemProps {
  item: Game;
}

export const GameCard: React.FC<ListItemProps> = ({ item }) => {
  const videoRef = createRef<HTMLVideoElement>();
  const wrapperRef = createRef<HTMLDivElement>();
  const playButtonRef = createRef<HTMLDivElement>();

  const [src, setSrc] = useState('');
  const [isLoading, setLoad] = useState(false);
  const [isHovered, setHover] = useState(false);

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

  const renderedAboutList = () => {
    if (!isHovered) return null;
    return (
      <div>
        <div className="show-more-button">Show more like this</div>;
        <div className="show-more-button">Show more like this</div>;
        <div className="show-more-button">Show more like this</div>;
        <div className="show-more-button">Show more like this</div>;
        <div className="show-more-button">Show more like this</div>;
        <a className="show-more-button">Show more like this</a>;
      </div>
    );
  };

  return (
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
            {item.clip ? (
              <div
                ref={playButtonRef}
                className="preview__play-button-container"
              >
                <div className="play-button">
                  <svg className="play-button__icon">
                    <use href={sprite + '#icon-play'} />
                  </svg>
                  <span className="play-button__title">Play full video</span>
                </div>
              </div>
            ) : null}
            {isLoading ? (
              <div className="preview__loader loader-wrapper">
                <div className="lds-ripple">
                  <div />
                  <div />
                </div>
              </div>
            ) : null}
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
          </div>
        </div>

        <div className="game-card__info">
          <div className="game-card__meta">{getPlatformsJSX(item)}</div>
          <div className="game-card__title">
            <Link to={`/games/${item.slug}`}>
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
          <ul className="game-card__about">{renderedAboutList()}</ul>
          {/* <a className="show-more-button">Show more like this</a> */}
        </div>
      </div>
    </div>
  );
};
