import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../../components/header/header.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { useParams } from 'react-router-dom';
import './game.styles.scss';

const GamePage: React.FC<{}> = () => {
  const [gameInfo,setGameInfo] = useState({});
  useEffect(async()=>{

  },slug);
  let { slug } = useParams();

  return (
    <Fragment>
      <Header />
      <div className="page__wrapper withSidebar">
        <Sidebar />
        <div className="content">content</div>
      </div>
      <div className="page__art">
        <div
          className="art-wrapper"
          style={{
            height: '600px',
            backgroundColor: 'transparent',
            backgroundImage:
              ' linear-gradient(rgba(15, 15, 15, 0), rgb(21, 21, 21)),' +
              ' linear-gradient(rgba(21, 21, 21, 0.8), rgba(21, 21, 21, 0.5)),' +
              ` url(https://media.rawg.io/media/resize/1280/-/games/${slug.})`,
          }}
        >
          da
        </div>
      </div>
    </Fragment>
  );
};

export default GamePage;
