import React, { Fragment } from 'react';
import Header from '../../components/header/header.component';
import { PageContent } from '../../components/page-content/page-content.component';
import './home.styles.scss';

const HomePage: React.FC<{}> = () => {
  return (
    <Fragment>
      <Header />
      <div className="page__wrapper withSidebar">
        <PageContent />
      </div>
    </Fragment>
  );
};

export default HomePage;
