import React, { useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import { SearchResult } from '../search-results/search-results.component';
import { Link } from 'react-router-dom';
import './header.styles.scss';

const Header: React.FC<{}> = () => {
  const [searchField, setSearchField] = useState('');
  const [isReady, setReady] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onChangeDelay = debounce((e: React.FormEvent<HTMLInputElement>) => {
    setReady(true);
  }, 600);

  const handleBlur = () => {
    setReady(false);
  };

  const handleInputSearch = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
    setReady(false);
    onChangeDelay(e);
  };

  const renderedSearchResult = () => {
    if (searchField && isReady) {
      return (
        <SearchResult
          searchInputRef={searchInputRef}
          searchText={searchField}
        />
      );
    } else return null;
  };

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__item">
          <Link to="/" className="header__logo">
            rawg
          </Link>
        </div>

        <div className="header__item">
          <button className="btn btn--primary">Rate game</button>
        </div>

        <div className="header__item header__item-search">
          <input
            ref={searchInputRef}
            onBlur={handleBlur}
            onChange={handleInputSearch}
            value={searchField}
            type="search"
            className="search-inp"
            placeholder={'search 313,231 games'}
          />
        </div>

        <div className="header__item ">
          <a href="#" className="header__item-link">
            log in
          </a>
          <a href="#" className="header__item-link">
            sign up
          </a>
        </div>
        {renderedSearchResult()}
      </div>
    </header>
  );
};

export default Header;
