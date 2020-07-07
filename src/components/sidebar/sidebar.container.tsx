import React from 'react';
import { Icons } from '../../assets/icons';
import Sidebar from './sidebar.component';

interface ISection {
  link: string | null;
  items: Array<IItem>;
  maxItems: number;
}
interface IItem {
  title: string | null | iconTypes;
  iconID: string | null;
}

type iconTypes = keyof typeof Icons;
export type SidebarData = { [key: string]: ISection };

const sidebarSections: SidebarData = {
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

const SidebarContainer: React.FC<{}> = () => {
  return <Sidebar data={sidebarSections} />;
};

export default SidebarContainer;
