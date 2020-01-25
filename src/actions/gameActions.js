import { NEW_GAME, FETCH_NEW_GAME } from '../constants/gameTypes';

export function createNewGame(payload) {
  return {
    type: FETCH_NEW_GAME,
    payload,
  };
}

export function newGame(payload) {
  return {
    type: NEW_GAME,
    payload,
  };
}

