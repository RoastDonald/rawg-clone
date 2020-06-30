import React from 'react';
import { NavLink } from 'react-router-dom';
import { CollapsedItems } from '../../collapsed-items/collapsed-items';
import { ReactComponent as PcSVG } from '../../../assets/platforms/windows.svg';
import { ReactComponent as Ps4SVG } from '../../../assets/platforms/ps4.svg';
import { ReactComponent as XboxSVG } from '../../../assets/platforms/xbox.svg';
import { ReactComponent as NintendoSVG } from '../../../assets/platforms/nintendo.svg';
import { ReactComponent as IosSVG } from '../../../assets/platforms/ios.svg';
import { ReactComponent as AndroidSVG } from '../../../assets/platforms/android.svg';

export const Platforms: React.FC = () => (
  <div>
    <span className="sidebar__title">Platforms</span>
    <ul className="list">
      <CollapsedItems count={3}>
        <li className="list__item">
          <NavLink className="list__link" to="#">
            <span className="list__icon">
              <PcSVG />
            </span>
            <span>PC</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            activeClassName="list__link list__link--active"
            to="#"
          >
            <span className="list__icon">
              <Ps4SVG />
            </span>
            <span>PlayStation 4</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            activeClassName="list__link list__link--active"
            to="#"
          >
            <span className="list__icon">
              <XboxSVG />
            </span>
            <span>Xbox One</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            activeClassName="list__link list__link--active"
            to="#"
          >
            <span className="list__icon">
              <NintendoSVG />
            </span>
            <span>Nintedo Switch</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            activeClassName="list__link list__link--active"
            to="#"
          >
            <span className="list__icon">
              <IosSVG />
            </span>
            <span>iOS</span>
          </NavLink>
        </li>
        <li className="list__item">
          <NavLink
            className="list__link"
            activeClassName="list__link list__link--active"
            to="#"
          >
            <span className="list__icon">
              <AndroidSVG />
            </span>
            <span>Android</span>
          </NavLink>
        </li>
      </CollapsedItems>
    </ul>
  </div>
);
