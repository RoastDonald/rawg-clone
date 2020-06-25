import React from 'react';
import { Sidebar } from '../sidebar/sidebar.component';
import { DiscoverContent } from '../discover-content/discover-content.component';
import './page-content.styles.scss';

export const PageContent = () => {
  return (
    <div className="page-content ">
      <Sidebar />
      <DiscoverContent />
    </div>
  );
};
