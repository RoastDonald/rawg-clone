import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import debounce from 'lodash.debounce';

import SearchResult from '../search-results/search-results.component';
import './header.styles.scss';

const Header: React.FC<{}> = () => {
  const [searchField, setSearchField] = useState('');
  const [isReady, setReady] = useState(false);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onChangeDelay = debounce((e: React.FormEvent<HTMLInputElement>) => {
    setReady(true);
  }, 600);

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    setTimeout(() => setReady(false), 200);
  };

  const handleInputSearchTyping = (e: React.FormEvent<HTMLInputElement>) => {
    setSearchField(e.currentTarget.value);
    onChangeDelay(e);
    setReady(false);
  };

  const renderedSearchResult = () => {
    if (searchField && isReady) {
      return (
        <SearchResult
          key="search-results"
          searchInputRef={searchInputRef}
          searchText={searchField}
        />
      );
    } else return null;
  };

  return (
    <header className="header page__header">
      <div className="header__wrapper">
        <div className="header__logo-box">
          <Link to="/" className="header__logo">
            rawg
          </Link>
        </div>

        <div className="header__rate">
          <button className="header__button">Rate top games</button>
        </div>

        <div className="header__search-box">
          <input
            ref={searchInputRef}
            onBlur={handleBlur}
            onChange={handleInputSearchTyping}
            value={searchField}
            type="search"
            className="header__search-input"
            placeholder={'search 313,231 games'}
          />
        </div>

        <div className="header__cta">
          <a href="#" className="header__link">
            log in
          </a>
          <a href="#" className="header__link">
            sign up
          </a>

          <div className="header__dotted-container">
            <label className="header__dotted" />
          </div>
        </div>
        {renderedSearchResult()}
      </div>
    </header>
  );
};

export default Header;
