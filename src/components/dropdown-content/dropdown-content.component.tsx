import React from 'react';
import styles from './dropdown-content.module.scss';
import { SearchResultsResponse } from '../../API_Interfaces/search-interfaces';
import { GameOverview } from '../overviews/game-overview/game-overview.component';
import { CollectionOverview } from '../overviews/collection-overview/collection-overview.component';
import { CreatorOverview } from '../overviews/creator-overview/creator-overview.component';
import { UserOverview } from '../overviews/user-overview/user-overview.component';
export const DropdownContent: React.FC<SearchResultsResponse> = ({
  games,
  collections,
  creators,
  users,
}) => {
  return (
    <div className={styles.wrapper}>
      <GameOverview games={games} />
      <CollectionOverview collections={collections} />
      <CreatorOverview creators={creators} />
      <UserOverview users={users} />
    </div>
  );
};
