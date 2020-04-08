import React from 'react';
import { NavLink } from 'react-router-dom';
import { CollapsedItems } from '../../collapsed-items/collapsed-items';
import { ReactComponent as ControllerSVG } from '../../../assets/browse/controller.svg';
import { ReactComponent as DownloadSVG } from '../../../assets/browse/download.svg';
import { ReactComponent as FolderSVG } from '../../../assets/browse/folder.svg';
import { ReactComponent as ReviewsSVG } from '../../../assets/browse/reviews.svg';
import { ReactComponent as GhostSVG } from '../../../assets/browse/ghost.svg';
import { ReactComponent as PersonSVG } from '../../../assets/browse/person.svg';
import { ReactComponent as TagSVG } from '../../../assets/browse/tag.svg';
import { ReactComponent as CodeSVG } from '../../../assets/browse/code.svg';
import { ReactComponent as BookSVG } from '../../../assets/browse/book.svg';

export const Browse: React.FC = () => (
  <div>
    <span className='sidebar__title'>Browse</span>
    <ul className='sidebar__list'>
      <CollapsedItems count={3}>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <ControllerSVG />
            </span>
            <span>Platforms</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <DownloadSVG />
            </span>
            <span>Stores</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <FolderSVG />
            </span>
            <span>Collections</span>
          </NavLink>
        </li>

        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <ReviewsSVG />
            </span>
            <span>Reviews</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <GhostSVG />
            </span>
            <span>Genres</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <PersonSVG />
            </span>
            <span>Creators</span>
          </NavLink>
        </li>

        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <TagSVG />
            </span>
            <span>Tags</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <CodeSVG />
            </span>
            <span>Developers</span>
          </NavLink>
        </li>
        <li>
          <NavLink className='sidebar__link' to='#'>
            <span className='list__icon'>
              <BookSVG />
            </span>
            <span>Publishers</span>
          </NavLink>
        </li>
      </CollapsedItems>
    </ul>
  </div>
);
