import { NEW_GAME, GAME_LOADING, GAME_INFO } from '../constants/gameTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function barReducer(state = initialState.game, action) {

  switch (action.type) {
    case NEW_GAME:
      return objectAssign({}, state, action.payload );

    case GAME_LOADING:
      return objectAssign({}, state, { loading: true });

    case GAME_INFO:
      return objectAssign({}, state, action.payload, { loading: false } );

    default:
      return state;
  }
}
