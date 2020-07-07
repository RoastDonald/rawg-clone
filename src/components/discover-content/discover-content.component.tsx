import React, { Fragment, useState, useCallback } from 'react';
import FilterButton from '../filter-button/filter-button.component';
import { Icons } from '../../assets/icons';
import ContentPanel from '../content-panel/content-panel.component';
import './discover.styles.scss';

export const DiscoverContent = () => {
  const [width, setWidth] = useState<number | undefined>(undefined);

  const ref = useCallback((node) => {
    if (node) {
      setWidth(node?.parentElement?.offsetWidth);
    }
  }, []);

  return (
    <main className="discover" ref={ref}>
      <div className="discover__header">
        <h1 className="heading">New and trending</h1>
        <p className="subtitle">Based on player counts and release date</p>
      </div>
      <div className="discover__settings">
        <SettingsPanel />
      </div>
      <ContentPanel parentWidth={width} />
    </main>
  );
};
const SettingsPanel: React.FC<{}> = () => {
  return (
    <Fragment>
      <div className="discover__ordering">
        <div className="buttons-group">
          <FilterButton type="Relevance" />
          <FilterButton type="Platforms" />
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
              onClick={() => console.log(1)}
            />
            <div
              className="options__display-option"
              style={{
                backgroundImage: `url(${Icons.DISPLAY_OPTION_2})`,
              }}
              onClick={() => console.log(1)}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default DiscoverContent;
