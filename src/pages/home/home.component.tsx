import React from 'react';
import { HomePageWrapper } from './home.styles';
import { PageContent } from '../../components/page-content/page-content.component';
export const HomePage: React.FC<{}> = () => {
  return (
    <HomePageWrapper>
      <PageContent />
    </HomePageWrapper>
  );
};
