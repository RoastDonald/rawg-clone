import React, { RefObject } from 'react';
import { SearchResultsResponse } from '../../API_Interfaces/search-interfaces';
import { withSpinner } from '../withSpinner/withSpinner.component';
import { DropdownContent } from '../dropdown-content/dropdown-content.component';
import { DropdownContainer } from './search-results';
import { SearchAPI } from './SearchAPI';

const DropdownContentWithLoad = withSpinner(DropdownContent);

type SearchResultsProps = {
  searchText: string;
  searchInputRef: RefObject<HTMLInputElement> | null;
};

type SearchResultState = {
  isFetching: boolean;
} & SearchResultsResponse;

class SearchResult extends React.Component<
  SearchResultsProps,
  SearchResultState
> {
  state = {
    users: null,
    games: null,
    collections: null,
    creators: null,
    isFetching: false,
  };

  async componentDidMount() {
    let { searchText } = this.props;
    try {
      this.setState({ isFetching: true });
      let [users, games, collections, creators] = await Promise.all([
        SearchAPI.getUsers(searchText),
        SearchAPI.getGames(searchText),
        SearchAPI.getCollections(searchText),
        SearchAPI.getCreators(searchText),
      ]);
      this.setState({ users, games, collections, creators, isFetching: false });
    } catch {
      this.setState({ isFetching: false });
    }
  }

  render() {
    const { users, games, collections, creators, isFetching } = this.state;
    const { searchInputRef } = this.props;
    return (
      <DropdownContainer
        style={{
          width: `${searchInputRef?.current?.offsetWidth}px`,
          marginLeft: `${searchInputRef?.current?.offsetLeft}px`,
        }}
      >
        <DropdownContentWithLoad
          games={games}
          collections={collections}
          creators={creators}
          users={users}
          loading={isFetching}
        />
      </DropdownContainer>
    );
  }
}

export default SearchResult;
