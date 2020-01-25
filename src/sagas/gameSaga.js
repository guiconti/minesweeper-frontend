import { put, call, select, take, fork, all } from 'redux-saga/effects';
import retrieveNewGame from '../apis/retrieveNewGame';
import retrieveGameDetails from '../apis/retrieveGameDetails';
import sendOpenCell from '../apis/sendOpenCell';
import sendFlagCell from '../apis/sendFlagCell';
import { newGame, gameLoading, gameInfo, gameNotFound } from '../actions/gameActions';
import { navigate } from '../actions/navigateActions';
import {
  FETCH_NEW_GAME,
  FETCH_GAME_DETAILS,
  GAME_NOT_FOUND,
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
  try {
    yield put(gameLoading());
    const game = yield call(retrieveGameDetails, payload);
    yield put(gameInfo(game));
  } catch(err) {
    yield put(gameNotFound());
  }
}

export function* changeToGameNotFound() {
  yield put(navigate({ path: `/game-not-found` }));
}

export function* openCell(payload) {
  const game = yield call(sendOpenCell, payload);
  yield put(gameInfo(game));
}

export function* flagCell(payload) {
  const game = yield call(sendFlagCell, payload);
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

function* watchGameNotFound() {
  while (true) {
    yield take(GAME_NOT_FOUND);
    yield fork(changeToGameNotFound);
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
    fork(watchGameNotFound),
    fork(watchOpenCell),
    fork(watchFlagCell)
  ]);
}
