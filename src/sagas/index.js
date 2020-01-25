import { all } from 'redux-saga/effects';
import navigateSaga from './navigateSaga';
import gameSaga from './gameSaga';

export default function* rootSaga() {
  yield all([
    navigateSaga(),
    gameSaga(),
  ]);
}
