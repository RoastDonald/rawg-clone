import React, { Fragment, useEffect, useState, DependencyList } from 'react';

import { useParams } from 'react-router-dom';
import axios from 'axios';

import { Header } from '../../components/header/header.component';
import { Sidebar } from '../../components/sidebar/sidebar.component';
import PageArt from '../../components/page-art/page-art.component';
import BreadCrumbs from '../../components/breadcrumbs/breadcrumbs.component';

import './game.styles.scss';

interface GameResponse {
  background_image: string;
}

interface IGameParams {
  slug: string;
}

const GamePage: React.FC<{}> = () => {
  let { slug } = useParams<IGameParams>();
  const [gameInfo, setGameInfo] = useState({
    background_image: '',
  });

  useEffect(() => {
    const fetchGameInfo = async () => {
      const res = await axios.get(`https://rawg.io/api/games/${slug}`);
      setGameInfo(res.data as GameResponse);
    };
    fetchGameInfo();
  }, [slug]);

  return (
    <Fragment>
      <Header />
      <div className="page__wrapper with-sidebar">
        <Sidebar />
        <main className="page__content">
          <div className="content__wrapper">
            <BreadCrumbs />
            <div className="game-content-columns">
              <div>1</div>
              <div>2</div>
            </div>
          </div>
        </main>
      </div>
      <PageArt backgroundImageURL={gameInfo.background_image} />
    </Fragment>
  );
};

export default GamePage;
