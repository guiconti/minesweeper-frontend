import { put, call, select, take, fork, all } from 'redux-saga/effects';
import retrieveNewGame from '../apis/retrieveNewGame';
import { newGame } from '../actions/gameActions';
import { navigate } from '../actions/navigateActions';
import { FETCH_NEW_GAME } from '../constants/gameTypes';
import { getGameId } from '../reducers/selectors';

export function* fetchNewGame(payload) {
  const game = yield call(retrieveNewGame, payload);
  yield put(newGame(game));
  const gameId = yield select(getGameId);
  yield put(navigate({ path: `/games/${gameId}` }))
}

function* watchFetchNewGame() {
  while(true) {
    const { payload } = yield take(FETCH_NEW_GAME);
    yield fork(fetchNewGame, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchNewGame),
  ]);
}
