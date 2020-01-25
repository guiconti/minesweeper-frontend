import {
  NEW_GAME,
  FETCH_NEW_GAME,
  FETCH_GAME_DETAILS,
  GAME_INFO,
  OPEN_CELL
} from '../constants/gameTypes';

export function createNewGame(payload) {
  return {
    type: FETCH_NEW_GAME,
    payload
  };
}

export function newGame(payload) {
  return {
    type: NEW_GAME,
    payload
  };
}

export function retrieveGameDetails(payload) {
  return {
    type: FETCH_GAME_DETAILS,
    payload
  };
}

export function gameInfo(payload) {
  return {
    type: GAME_INFO,
    payload
  };
}

export function openCell(payload) {
  console.log('Action');
  console.log(payload);
  return {
    type: OPEN_CELL,
    payload
  };
}