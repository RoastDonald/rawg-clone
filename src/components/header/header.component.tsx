import React, { createRef } from 'react';
import debounce from 'lodash.debounce';
import { SearchResult } from '../search-results/search-results.component';
import styles from './header.module.scss';
import { Link } from 'react-router-dom';
const { headerWrapper, search, logo, item, rateButton } = styles;

interface HeaderState {
  searchField: string;
  isReady: boolean;
}

export class Header extends React.Component<{}, HeaderState> {
  searchInputRef = createRef<HTMLInputElement>();
  constructor(props: {}) {
    super(props);

    this.state = {
      searchField: '',
      isReady: false
    };
    this.onChangeDelay = debounce(this.onChangeDelay, 600);
  }

  handleBlur = () => {
    this.setState({ isReady: false });
  };

  onChangeDelay = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({ isReady: true });
  };

  handleInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
    this.setState({
      searchField: e.currentTarget.value,
      isReady: false
    });
    this.onChangeDelay(e);
  };

  render() {
    const { searchField, isReady } = this.state;
    return (
      <div className={headerWrapper}>
        <div className={item}>
          <div className={logo}>
            <Link to='/' className={logo}>
              rawg
            </Link>
          </div>
        </div>

        <div className={item}>
          <button className={rateButton}>Rate game</button>
        </div>

        <div className={item}>
          <input
            ref={this.searchInputRef}
            onBlur={this.handleBlur}
            onChange={this.handleInputSearch}
            value={searchField}
            type='search'
            className={search}
            placeholder={'search 313,231 games'}
          />
        </div>

        <div className={item}>
          <a href='#'>log in</a>
          <a href='#'>sign up</a>
        </div>
        {searchField && isReady ? (
          <SearchResult
            searchInputRef={this.searchInputRef}
            searchText={searchField}
          />
        ) : null}
      </div>
    );
  }
}
