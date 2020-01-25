import { CHANGE_DIFFICULTY } from '../constants/creationTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function creationReducer(state = initialState.creation, action) {
  switch (action.type) {
    case CHANGE_DIFFICULTY:
      return objectAssign({}, state, { difficulty: action.payload.difficulty });
    default:
      return state;
  }
}
