import {
  CHANGE_DIFFICULTY
} from '../constants/creationTypes';

export function changeDifficulty(payload) {
  return {
    type: CHANGE_DIFFICULTY,
    payload
  };
}
