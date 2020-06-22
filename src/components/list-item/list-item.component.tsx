import React, { useState, createRef, useEffect } from 'react';
import { Game } from '../search-results/search-interfaces';
import { getPlatformsJSX } from '../game-overview/game-overview.component';
import { ReactComponent as PlusSVG } from '../../assets/content/plus.svg';
import { ReactComponent as PlaySVG } from '../../assets/play.svg';
import { Video } from './list.styles';
import './loader.scss';
interface ListItemProps {
  item: Game;
}

export const ListItem: React.FC<ListItemProps> = ({ item }) => {
  const videoRef = createRef<HTMLVideoElement>();
  const wrapperRef = createRef<HTMLDivElement>();

  const [src, setSrc] = useState('');
  const [isLoading, setLoad] = useState(false);

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
  console.log(item);
  return (
    <div
      className="game-item"
      key={item.id}
      onMouseEnter={() => {
        setSrc(item.clip?.clips[320] || '');
        videoRef.current?.play();
      }}
      onMouseLeave={() => {
        let video = videoRef.current;
        let wrapper = wrapperRef.current;
        setLoad(false);
        setSrc('');
        video?.pause();

        if (wrapper && video?.currentTime) {
          wrapper.style.opacity = '1';
          video.currentTime = 0;
        }
      }}
    >
      <div className="media-content">
        <div className="media-content-wrapper">
          <div>
            <div className="play-container">
              <div className="play-button">
                <PlaySVG width={16} />
              </div>
              <span className="play-title">Play full video</span>
            </div>
            {isLoading ? (
              <div className="loader-wrapper">
                <div className="lds-ripple">
                  <div></div>
                  <div></div>
                </div>
              </div>
            ) : null}
            <Video
              onLoadStart={() => {
                if (videoRef.current?.attributes.getNamedItem('src')?.value) {
                  setLoad(true);
                }
              }}
              onCanPlay={() => {
                if (wrapperRef.current) {
                  wrapperRef.current.style.opacity = '0';
                }
                setLoad(false);
              }}
              ref={videoRef}
              src={src}
              playsInline
              muted
              loop
            ></Video>
            <div
              ref={wrapperRef}
              className="media-image"
              style={{
                backgroundImage: `url(${item.background_image.replace(
                  'media/',
                  'media/crop/600/400/'
                )})`,
              }}
            />
          </div>
        </div>
      </div>

      <div className="description-content">
        <div className="content-platforms">{getPlatformsJSX(item)}</div>
        <div className="content-title">
          <h1>{item.name}</h1>
        </div>

        <div className="buttons-container">
          <button className="shallow-button">
            <span className="plus-icon">
              <PlusSVG width={10} />
            </span>
            <span>{item.suggestions_count}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
