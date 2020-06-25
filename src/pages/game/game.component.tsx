import React, { Fragment, useEffect, useState } from 'react';
import { Header } from '../../components/header/header.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import { useParams } from 'react-router-dom';

import PageArt from '../../components/page-art/page-art.component';

import axios from 'axios';
import './game.styles.scss';
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs.component';

interface i {
  background_image: string;
}

const GamePage: React.FC<{}> = () => {
  let { slug } = useParams();
  const [gameInfo, setGameInfo] = useState({
    background_image: '',
  });

  useEffect(() => {
    const fetchGameInfo = async () => {
      const res = await axios.get(`https://rawg.io/api/games/${slug}`);
      setGameInfo(res.data);
    };
    fetchGameInfo();
  }, slug);

  return (
    <Fragment>
      <Header />
      <div className="page__wrapper withSidebar">
        <Sidebar />
        <main className="page__content">
          <div className="content__wrapper">
            <BreadCrumbs />
          </div>
        </main>
      </div>
      <PageArt backgroundImageURL={gameInfo.background_image} />
    </Fragment>
  );
};

export default GamePage;
