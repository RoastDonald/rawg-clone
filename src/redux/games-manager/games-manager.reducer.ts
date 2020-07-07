import {
  GamesManagerTypes,
  GamesManagerActionTypes,
} from './games-manager.types';

interface IGamesManager {
  mainlink: string;
}
//rawg.io/api/games/lists/main?discover=true&ordering=-released&page_size=40&page=1

const site = 'https://rawg.io/api/games/lists/main?discover=true';

const ordering = '&ordering=-';
const platform = '&parent_platforms=';

const size = '&page_size=40&page=1';

const INITIAL_STATE: IGamesManager = {
  mainlink: `${site}relevance${size}`,
};

export const gamesManager = (
  prevState = INITIAL_STATE,
  action: GamesManagerTypes
) => {
  switch (action.type) {
    case GamesManagerActionTypes.SET_PLATFORM:
      return {
        ...prevState,
        mainlink: `${site}${platform}${action.payload}${size}`,
      };
    case GamesManagerActionTypes.SET_ORDER:
      return {
        ...prevState,
        mainlink: `${site}${ordering}${action.payload}${size}`,
      };
    case GamesManagerActionTypes.SET_BOTH:
      return {
        ...prevState,
        mainlink: `${site}${ordering}${action.payload[0]}${platform}${action.payload[1]}${size}`,
      };
    default:
      return prevState;
  }
};
