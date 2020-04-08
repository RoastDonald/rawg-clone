import React from 'react';
import styles from './dropdown-content.module.scss';
import { SearchResultsResponse } from '../search-results/search-interfaces';
import { GameOverview } from '../game-overview/game-overview.component';
import { CollectionOverview } from '../collection-overview/collection-overview.component';
import { CreatorOverview } from '../creator-overview/creator-overview.component';
import { UserOverview } from '../user-overview/user-overview.component';
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
