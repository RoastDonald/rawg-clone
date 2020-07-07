import React, { Dispatch, SetStateAction } from 'react';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import sprite from '../../assets/sprite.svg';

import './portal.styles.scss';

type YoutubePortalProps = {
  videoURL: string | undefined;
  setFullVid: Dispatch<SetStateAction<boolean>>;
};

const YoutubePortal = ({ setFullVid, videoURL }: YoutubePortalProps) => {
  const portalRoot = document.getElementById('portal-holes') as HTMLElement;
  const opts = {
    width: '900',
    height: '500',
    playerVars: {
      autoplay: 1,
    },
  };
  return ReactDOM.createPortal(
    <div className="youtube-portal-container">
      <YouTube
        opts={opts as import('react-youtube').Options}
        videoId={videoURL}
      />
      <div
        className="youtube-portal-container__close-button"
        onClick={() => setFullVid(false)}
      >
        <svg className="list__icon">
          <use href={sprite + '#icon-close'} />
        </svg>
      </div>
    </div>,
    portalRoot
  );
};
export default YoutubePortal;
