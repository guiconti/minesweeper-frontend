import { push } from 'connected-react-router'
import { put, take, fork, all } from 'redux-saga/effects';
import { NAVIGATE } from '../constants/navigateTypes';

function* watchNavigate() {
  while(true) {
    const { payload } = yield take(NAVIGATE);
    yield put(push(payload.path));
  }
}

export default function* watch() {
  yield all([
    fork(watchNavigate),
  ]);
}
