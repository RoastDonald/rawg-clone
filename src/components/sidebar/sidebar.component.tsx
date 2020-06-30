import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CollapsedItems from '../collapsed-items/collapsed-items';
import sprite from '../../assets/sidebar-sprite.svg';
import { Icons } from './icons';
import './sidebar.styles.scss';

type iconTypes = keyof typeof Icons;

interface ISection {
  link: string | null;
  items: Array<IItem>;
  maxItems: number;
}

interface IItem {
  title: string | null | iconTypes;
  iconID: string | null;
}

const sidebarSections: { [key: string]: ISection } = {
  Home: {
    link: '/',
    maxItems: 4,
    items: [],
  },
  Reviews: {
    link: '/',
    maxItems: 3,
    items: [],
  },
  'New Releases': {
    link: null,
    maxItems: 4,
    items: [
      { title: 'Last 30 days', iconID: '#icon-star' },
      { title: 'This week', iconID: '#icon-flame' },
      { title: 'Next week', iconID: '#icon-next' },
      { title: 'Release calendar', iconID: '#icon-calendar' },
    ],
  },
  Top: {
    link: null,
    maxItems: 4,
    items: [
      { title: 'Best of the year', iconID: '#icon-cup' },
      { title: 'Popular in 2018', iconID: '#icon-rate' },
      { title: 'All time top 250', iconID: '#icon-crown' },
    ],
  },
  AllGames: {
    link: '/',
    maxItems: 4,
    items: [],
  },
  Browse: {
    link: '/',
    maxItems: 4,
    items: [
      { title: 'Platforms', iconID: '#icon-book' },
      { title: 'Stores', iconID: '#icon-code' },
      { title: 'Collections', iconID: '#icon-controller' },
      { title: 'Reviews', iconID: '#icon-download' },
      { title: 'Creators', iconID: '#icon-folder' },
      { title: 'Platforms', iconID: '#icon-ghost' },
      { title: 'Tags', iconID: '#icon-person' },
      { title: 'Developers', iconID: '#icon-reviews' },
      { title: 'Publishers', iconID: '#icon-tag' },
    ],
  },
  Platforms: {
    link: '/',
    maxItems: 4,
    items: [
      { title: 'PC', iconID: '#icon-windows' },
      { title: 'PlayStation 4', iconID: '#icon-ps4' },
      { title: 'Xbox One', iconID: '#icon-xbox' },
      { title: 'Nintedo Switch', iconID: '#icon-nintendo' },
      { title: 'iOS', iconID: '#icon-ios' },
      { title: 'Android', iconID: '#icon-android' },
    ],
  },
  Gengers: {
    link: '/',
    maxItems: 4,
    items: [
      { title: 'Action', iconID: null },
      { title: 'Strategy', iconID: null },
      { title: 'RPG', iconID: null },
      { title: 'Shooter', iconID: null },
      { title: 'Adventure', iconID: null },
      { title: 'Puzzle', iconID: null },
      { title: 'Racing', iconID: null },
      { title: 'Sports', iconID: null },
    ],
  },
};

const Sidebar: React.FC<{}> = () => (
  <div>
    <aside className="sidebar">
      <nav className="nav">
        {Object.keys(sidebarSections).map(
          (sectionTitle: string, key: number) => {
            const section = sidebarSections[sectionTitle];
            return (
              <div key={key}>
                <span className="sidebar__title">
                  {section.link ? (
                    <Link to={section.link} className="sidebar__link">
                      {sectionTitle}
                    </Link>
                  ) : (
                    sectionTitle
                  )}
                </span>
                <ul className="list">
                  <CollapsedItems count={section.maxItems}>
                    {section.items.map(({ title, iconID }, key) => (
                      <ListItem title={title} iconID={iconID} key={key} />
                    ))}
                  </CollapsedItems>
                </ul>
              </div>
            );
          }
        )}
      </nav>
    </aside>
  </div>
);

const ListItem: React.FC<IItem> = ({ iconID, title }) => {
  let listIconElement = (
    <svg className="list__icon">
      <use href={sprite + iconID}></use>
    </svg>
  );

  if (!iconID && title !== null) {
    listIconElement = (
      <span
        className="list__icon list__icon--custom"
        style={{
          backgroundImage: `url(${Icons[title.toUpperCase() as iconTypes]})`,
        }}
      />
    );
  }

  return (
    <li className="list__item">
      <NavLink
        className="list__link"
        activeClassName="list__link--active"
        to="/da"
      >
        <span className="list__icon-wrapper">{listIconElement}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};

export default Sidebar;
