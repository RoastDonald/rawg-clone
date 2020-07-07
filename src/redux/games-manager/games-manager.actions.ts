import { GamesManagerActionTypes } from './games-manager.types';

export const setOrderFilter = (URL: string) => ({
  type: GamesManagerActionTypes.SET_ORDER,
  payload: URL,
});

export const setPlatformFilter = (URL: string) => ({
  type: GamesManagerActionTypes.SET_PLATFORM,
  payload: URL,
});

export const setBothFilters = (URL: string) => ({
  type: GamesManagerActionTypes.SET_BOTH,
  payload: URL,
});
