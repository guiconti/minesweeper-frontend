import { put, call, select, take, fork, all } from 'redux-saga/effects';
import retrieveNewGame from '../apis/retrieveNewGame';
import retrieveGameDetails from '../apis/retrieveGameDetails';
import sendOpenCell from '../apis/sendOpenCell';
import { newGame, gameInfo } from '../actions/gameActions';
import { navigate } from '../actions/navigateActions';
import {
  FETCH_NEW_GAME,
  FETCH_GAME_DETAILS,
  OPEN_CELL,
  FLAG_CELL
} from '../constants/gameTypes';
import { getGameId } from '../reducers/selectors';

export function* fetchNewGame(payload) {
  const game = yield call(retrieveNewGame, payload);
  yield put(newGame(game));
  const gameId = yield select(getGameId);
  yield put(navigate({ path: `/games/${gameId}` }));
}

export function* fetchGameDetails(payload) {
  const game = yield call(retrieveGameDetails, payload);
  yield put(gameInfo(game));
}

export function* openCell(payload) {
  const game = yield call(sendOpenCell, payload);
  yield put(gameInfo(game));
}

export function* flagCell(payload) {
  const game = yield call(retrieveGameDetails, payload);
  yield put(gameInfo(game));
}

function* watchFetchNewGame() {
  while (true) {
    const { payload } = yield take(FETCH_NEW_GAME);
    yield fork(fetchNewGame, payload);
  }
}

function* watchFetchGameDetails() {
  while (true) {
    const { payload } = yield take(FETCH_GAME_DETAILS);
    yield fork(fetchGameDetails, payload);
  }
}

function* watchOpenCell() {
  while (true) {
    const { payload } = yield take(OPEN_CELL);
    yield fork(openCell, payload);
  }
}

function* watchFlagCell() {
  while (true) {
    const { payload } = yield take(FLAG_CELL);
    yield fork(flagCell, payload);
  }
}

export default function* watch() {
  yield all([
    fork(watchFetchNewGame),
    fork(watchFetchGameDetails),
    fork(watchOpenCell),
    fork(watchFlagCell)
  ]);
}
