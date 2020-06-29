import React from 'react';

import { Browse } from './sidebar-components/browse.component';
import { Geners } from './sidebar-components/genres.component';
import { Home } from './sidebar-components/home.component';
import { NewReleases } from './sidebar-components/new-releases.component';
import { Platforms } from './sidebar-components/platforms.component';
import { Reviews } from './sidebar-components/reviews.component';
import { Top } from './sidebar-components/top.component';
import { AllGames } from './sidebar-components/all-games';
import './sidebar.styles.scss';

const Sidebar: React.FC<{}> = () => {
  return (
    <div>
      <aside className="sidebar">
        <nav>
          <Home />
          <Reviews />
          <NewReleases />
          <Top />
          <AllGames />
          <Browse />
          <Platforms />
          <Geners />
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
