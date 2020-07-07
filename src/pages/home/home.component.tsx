import React from 'react';
import Header from '../../components/header/header.component';
import Sidebar from '../../components/sidebar/sidebar.container';
import DiscoverContent from '../../components/discover-content/discover-content.component';
import './home.styles.scss';

const HomePage: React.FC<{}> = () => {
  return (
    <div className="page">
      <Header />
      <div className="page__wrapper with-sidebar">
        <div className="page-content">
          <Sidebar />
          <DiscoverContent />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
