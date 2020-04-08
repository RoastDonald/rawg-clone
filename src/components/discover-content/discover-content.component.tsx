import React from 'react';
import './discover.styles.scss';
import { GameListControll } from '../game-list-controll/game-list-controll.component';
import { GameList } from '../game-list/game-list.component';

export const DiscoverContent: React.FC = () => {
  return (
    <main className='page__content'>
      <div className='discover-header'>
        <h1 className='heading'>New and trending</h1>
        <p className='subtitle'>Based on player counts and release date</p>
      </div>

      <div className='discover-game-list'>
        <GameListControll />
      </div>

      <div className='games-grid'>
        <GameList />
      </div>
    </main>
  );
};
