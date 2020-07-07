export enum GamesManagerActionTypes {
  SET_BOTH,
  SET_ORDER,
  SET_PLATFORM,
}

export type GamesManagerTypes = { type: GamesManagerActionTypes; payload: any };
