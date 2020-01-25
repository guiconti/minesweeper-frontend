import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import gameReducer from './gameReducer';

const rootReducer = history => combineReducers({
  router: connectRouter(history),
  game: gameReducer,
});

export default rootReducer;
