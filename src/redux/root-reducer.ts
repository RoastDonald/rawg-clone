import { combineReducers } from 'redux';
import { gameReducer } from './game/game.reducer';
import { gamesManager } from './games-manager/games-manager.reducer';
const rootReducer = combineReducers({
  game: gameReducer,
  mainPage: gamesManager,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
