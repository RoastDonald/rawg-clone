import React from 'react';
import { NavLink } from 'react-router-dom';
import { CollapsedItems } from '../../collapsed-items/collapsed-items';

// import { ReactComponent as ControllerSVG } from '../../../assets/browse/controller.svg';
// import { ReactComponent as DownloadSVG } from '../../../assets/browse/download.svg';
// import { ReactComponent as FolderSVG } from '../../../assets/browse/folder.svg';
// import { ReactComponent as ReviewsSVG } from '../../../assets/browse/reviews.svg';
// import { ReactComponent as GhostSVG } from '../../../assets/browse/ghost.svg';
// import { ReactComponent as PersonSVG } from '../../../assets/browse/person.svg';
// import { ReactComponent as TagSVG } from '../../../assets/browse/tag.svg';
// import { ReactComponent as CodeSVG } from '../../../assets/browse/code.svg';
// import { ReactComponent as BookSVG } from '../../../assets/browse/book.svg';

const folderURL = '../../../assets/browse/';

const data = [
  { title: 'Platforms', importLink: `${folderURL}controller.svg` },
  { title: 'Stores', importLink: `${folderURL}download.svg` },
  { title: 'Collections', importLink: `${folderURL}folder.svg` },
  { title: 'Reviews', importLink: `${folderURL}reviews.svg` },
  { title: 'Creators', importLink: `${folderURL}ghost.svg` },
  { title: 'Platforms', importLink: `${folderURL}person.svg` },
  { title: 'Tags', importLink: `${folderURL}tag.svg` },
  { title: 'Developers', importLink: `${folderURL}code.svg` },
  { title: 'Publishers', importLink: `${folderURL}book.svg` },
];

const dynamicImport = (url: string) => {
  return new Promise((resolve, reject) => {
    import(url).then(({ component }) => resolve(component));
  });
};

export const Browse: React.FC = () => (
  <div>
    <span className="sidebar__title">Browse</span>
    <ul className="list">
      <CollapsedItems count={3}>
        {data.map((item, key) => (
          <li className="list__item" key={key}>
            <NavLink
              className="list__link"
              activeClassName="sidebar__link sidebar__link--active"
              to="#"
            >
              <span className="list__icon">
                {dynamicImport(item.importLink)}
              </span>
              <span>{item.title}</span>
            </NavLink>
          </li>
        ))}
      </CollapsedItems>
    </ul>
  </div>
);
