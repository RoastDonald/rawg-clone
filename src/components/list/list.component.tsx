import React from 'react';
import { Game } from '../search-results/search-interfaces';
import { ListItem } from '../list-item/list-item.component';
import './list.styles.scss';

interface ListProps {
  games: Array<Game> | null;
}

export const List: React.FC<ListProps> = ({ games }) => {
  return (
    <React.Fragment>
      {games
        ? games.map((game: Game, i: number) => {
            return <ListItem item={game} key={game.id} />;
          })
        : null}

      <button className='load-more'>
        <span>Load more</span>
      </button>
    </React.Fragment>
  );
};
