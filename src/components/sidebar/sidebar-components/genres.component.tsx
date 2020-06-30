import React from 'react';
import { NavLink } from 'react-router-dom';
import { CollapsedItems } from '../../collapsed-items/collapsed-items';
import { Icons } from './icons';

export const Geners: React.FC = () => (
  <div>
    <span className="sidebar__title">Browse</span>
    <ul className="list">
      <CollapsedItems count={3}>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.ACTION})` }}
            />
            <span>Action</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.STRATEGY})` }}
            />
            <span>Strategy</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.RPG})` }}
            />
            <span>RPG</span>
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.SHOOTER})` }}
            />
            <span>Shooter</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.ADVENTURE})` }}
            />
            <span>Adventure</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.PUZZLE})` }}
            />
            <span>Puzzle</span>
          </NavLink>
        </li>

        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.RACING})` }}
            />
            <span>Racing</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            to="#"
            activeClassName="list__link list__link--active"
          >
            <span
              className="list__icon"
              style={{ backgroundImage: `url(${Icons.SPORTS})` }}
            />
            <span>Sports</span>
          </NavLink>
        </li>
      </CollapsedItems>
    </ul>
  </div>
);
