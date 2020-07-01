import React, { Fragment, useState, useEffect } from 'react';
import FilterButton from '../filter-button/filter-button.component';
import { Icons } from '../../assets/icons';
import ContentPanel from '../content-panel/content-panel.component';
import './discover.styles.scss';

export const DiscoverContent: React.FC<{}> = () => (
  <main className="discover">
    <div className="discover__header">
      <h1 className="heading">New and trending</h1>
      <p className="subtitle">Based on player counts and release date</p>
    </div>
    <div className="discover__settings">
      <SettingsPanel />
    </div>
    <div className="discover__grid ">
      <ContentPanel />
    </div>
  </main>
);

const SettingsPanel: React.FC<{}> = () => (
  <Fragment>
    <div className="discover__ordering">
      <div className="buttons-group">
        <FilterButton>
          <span className="button__title">Ordered by: </span>
          <span className="button__option">default</span>
          <img className="button__image" src={Icons.ARROW} alt="arrow" />
        </FilterButton>

        <FilterButton>
          <span className="button__title">Platforms</span>
          <img className="button__image" src={Icons.ARROW} alt="arrow" />
        </FilterButton>
      </div>
    </div>

    <div className="discover__display-options">
      <div className="options">
        <span className="options__title">Display options:</span>
        <div className="options__wrapper">
          <div
            className="options__display-option"
            style={{
              backgroundImage: `url(${Icons.DISPLAY_OPTION_1})`,
            }}
          />
          <div
            className="options__display-option"
            style={{
              backgroundImage: `url(${Icons.DISPLAY_OPTION_2})`,
            }}
          />
        </div>
      </div>
    </div>
  </Fragment>
);

export default DiscoverContent;
