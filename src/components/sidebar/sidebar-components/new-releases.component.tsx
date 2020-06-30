import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as StarSVG } from '../../../assets/new_releases/star.svg';
import { ReactComponent as FlameSVG } from '../../../assets/new_releases/flame.svg';
import { ReactComponent as NextSVG } from '../../../assets/new_releases/next.svg';
import { ReactComponent as CalendarSVG } from '../../../assets/new_releases/calendar.svg';

export const NewReleases: React.FC = () => (
  <div>
    <span className="sidebar__title">New Releases</span>
    <ul className="list">
      <li className="list__item">
        <NavLink
          className="list__link"
          activeClassName="list__link list__link--active"
          to="/"
        >
          <span className="list__icon">
            <StarSVG />
          </span>
          <span>Last 30 days</span>
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="list__link"
          to="/1"
          activeClassName="list__link list__link--active"
        >
          <span className="list__icon">
            <FlameSVG />
          </span>
          <span>This week</span>
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="list__link"
          to="/2"
          activeClassName="list__link list__link--active"
        >
          <span className="list__icon">
            <NextSVG />
          </span>
          <span>Next week</span>
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="list__link"
          to="/3"
          activeClassName="list__link list__link--active"
        >
          <span className="list__icon">
            <CalendarSVG />
          </span>
          <span>Release calendar</span>
        </NavLink>
      </li>
    </ul>
  </div>
);
