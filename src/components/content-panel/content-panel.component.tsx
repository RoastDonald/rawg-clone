import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { GamesResponse, Game } from '../../API_Interfaces/search-interfaces';
import { GameCard } from '../game-card/game-card.component';
import { withSpinner } from '../withSpinner/withSpinner.component';
import './content-panel.styles.scss';
const gamesLink =
  'https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=40&page=1';

interface ListProps {
  games: Array<Game> | null;
}

const ContentPanel: React.FC<{}> = () => {
  const [data, setData] = useState<GamesResponse>({
    next: null,
    previous: null,
    results: [],
    count: 0,
  });
  const [isFetching, setFetching] = useState(false);

  useEffect(() => {
    setFetching(true);
    axios
      .get(gamesLink)
      .then((games: AxiosResponse) => {
        const data = games.data as GamesResponse;
        setData(data);
        setFetching(false);
      })
      .finally(() => {
        setFetching(false);
      });
  }, []);

  return <ListWithLoader games={data.results} loading={isFetching} />;
};

const List: React.FC<ListProps> = ({ games }) => (
  <React.Fragment>
    {games
      ? games.map((game: Game, i: number) => {
          return <GameCard item={game} key={game.id} />;
        })
      : null}

    {/* <button className="load-more">
      <span>Load more</span>
    </button> */}
  </React.Fragment>
);

const ListWithLoader = withSpinner(List);

export default ContentPanel;
