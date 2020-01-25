import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import creationReducer from './creationReducer';
import gameReducer from './gameReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  creation: creationReducer,
  game: gameReducer,
});

export default rootReducer;
