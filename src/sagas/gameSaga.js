import { put, call, take, fork, all } from 'redux-saga/effects';
import retrieveNewGame from '../apis/retrieveNewGame';
import { newGame } from '../actions/gameActions';
import { FETCH_NEW_GAME } from '../types/game';

export function* fetchNewGame(payload) {
  const game = yield call(retrieveNewGame, {});
  yield put(newGame(game));
}

function* watchFetchNewGame() {
  while(true) {
    const { payload } = yield take(FETCH_NEW_GAME);
    yield fork(watchFetchNewGame, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchNewGame),
  ]);
}
