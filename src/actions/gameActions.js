import { NEW_GAME, FETCH_NEW_GAME } from '../types/game';

export function createNewGame(value) {
  return {
    type: FETCH_NEW_GAME,
    payload: {
      value,
    },
  };
}

export function newGame(value) {
  return {
    type: NEW_GAME,
    payload: {
      value,
    },
  };
}

