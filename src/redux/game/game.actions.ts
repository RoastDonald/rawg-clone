import { GameActionTypes } from './game.types';
import { GameInfo } from '../../API_Interfaces/game-info-interfaces';

export const setGame = (game: GameInfo) => ({
  type: GameActionTypes.SET_GAME,
  payload: game,
});
