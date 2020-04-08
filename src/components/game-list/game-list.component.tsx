import React from 'react';
import axios, { AxiosResponse } from 'axios';
import { Game } from '../search-results/search-interfaces';
import { GamesResponse } from '../search-results/search-interfaces';
import { withSpinner } from '../withSpinner/withSpinner.component';
import { List } from '../list/list.component';

const ListWithLoader = withSpinner(List);
interface GameListState {
  next: string | null;
  previous: string | null;
  games: Array<Game> | null;
  isFetching: boolean;
}

const gamesLink =
  'https://rawg.io/api/games/lists/main?discover=true&ordering=-relevance&page_size=40&page=1';

export class GameList extends React.Component<{}, GameListState> {
  state = {
    next: null,
    previous: null,
    games: null,
    isFetching: false,
  };

  componentDidMount() {
    this.setState({ isFetching: true });
    axios.get(gamesLink).then((games: AxiosResponse) => {
      let res = games.data as GamesResponse;
      this.setState({ games: res.results, isFetching: false });
    });
  }

  render() {
    const { games, isFetching } = this.state;
    return <ListWithLoader games={games} loading={isFetching} />;
  }
}
