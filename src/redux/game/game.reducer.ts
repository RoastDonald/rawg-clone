import { GameActionTypes, GameTypes } from './game.types';
import { GameInfo } from '../../API_Interfaces/game-info-interfaces';

interface Iinit {
  currentGame: null | GameInfo;
}

const INITIAL_STATE: Iinit = {
  currentGame: null,
};

export const gameReducer = (
  state = INITIAL_STATE,
  action: GameTypes
): typeof INITIAL_STATE => {
  switch (action.type) {
    case GameActionTypes.SET_GAME:
      return {
        ...state,
        currentGame: action.payload,
      };
    default:
      return state;
  }
};
