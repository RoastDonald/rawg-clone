import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import CollapsedItems from '../collapsed-items/collapsed-items';
import sprite from '../../assets/sprite.svg';
import { Icons } from '../../assets/icons';
import { SidebarData } from './sidebar.container';
import './sidebar.styles.scss';
type iconTypes = keyof typeof Icons;

interface IItem {
  title: string | null | iconTypes;
  iconID: string | null;
}

type SidebarProps = {
  data: SidebarData;
};

const Sidebar = ({ data: sidebarSections }: SidebarProps) => (
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
      <use href={sprite + iconID} />
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
        to="/"
      >
        <span className="list__icon-wrapper">{listIconElement}</span>
        <span>{title}</span>
      </NavLink>
    </li>
  );
};
export default Sidebar;
