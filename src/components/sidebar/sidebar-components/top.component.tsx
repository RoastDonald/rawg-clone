import React from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as CupSVG } from '../../../assets/top/cup.svg';
import { ReactComponent as RateSVG } from '../../../assets/top/rate.svg';
import { ReactComponent as CrownSVG } from '../../../assets/top/crown.svg';

export const Top: React.FC = () => (
  <div>
    <span className="sidebar__title">Top</span>
    <ul className="list">
      <li className="list__item">
        <NavLink
          className="list__link"
          activeClassName="list__link list__link--active"
          to="#"
        >
          <span className="list__icon">
            <CupSVG />
          </span>
          <span>Best of the year</span>
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="list__link"
          activeClassName="list__link list__link--active"
          to="#"
        >
          <span className="list__icon">
            <RateSVG />
          </span>
          <span>Popular in 2018</span>
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className="list__link"
          activeClassName="list__link list__link--active"
          to="#"
        >
          <span className="list__icon">
            <CrownSVG />
          </span>
          <span>All time top 250</span>
        </NavLink>
      </li>
    </ul>
  </div>
);
