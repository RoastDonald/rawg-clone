import React from 'react';
import './page-art.styles.scss';

interface PageArtProps {
  backgroundImageURL: string;
}

const PageArt: React.FC<PageArtProps> = ({ backgroundImageURL }) => {
  const imgIndx = backgroundImageURL.search('/games/') + '/games/'.length;
  const imgPath = backgroundImageURL.slice(imgIndx);

  return (
    <div className="page__art">
      <div className="art-wrapper">
        <div
          className="art"
          style={{
            height: '600px',
            backgroundColor: 'transparent',
            backgroundImage:
              ' linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),' +
              ' linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),' +
              ` url(https://media.rawg.io/media/resize/1280/-/games/${imgPath})`,
          }}
        />
      </div>
    </div>
  );
};

export default PageArt;
