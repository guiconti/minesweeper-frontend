import { expectSaga } from 'redux-saga-test-plan';
import {
  fetchNewGame,
  fetchGameDetails,
  changeToGameNotFound,
  openCell,
  flagCell,
  tryAgain
} from './gameSaga';
import { newGame, gameLoading, gameInfo } from '../actions/gameActions';
import { navigate } from '../actions/navigateActions';
import * as apis from '../apis/gameApis';
import initialState from '../reducers/initialState';
import { select } from 'redux-saga/effects';
import { getGameId } from '../reducers/selectors';

describe('Game saga', () => {
  it('should call retrieveNewGame API and newGame action on fetchNewGame', () => {
    const retrieveNewGame = jest
      .spyOn(apis, 'retrieveNewGame')
      .mockImplementation(() => initialState.game);
    const payload = {
      difficulty: 0
    };
    return expectSaga(fetchNewGame, payload)
      .provide([[select(getGameId), 'id']])
      .call(retrieveNewGame, payload)
      .put(newGame(initialState.game))
      .run();
  });

  it('should call retrieveGameDetails API and gameInfo action on fetchGameDetails', () => {
    const retrieveGameDetails = jest
      .spyOn(apis, 'retrieveGameDetails')
      .mockImplementation(() => initialState.game);
    const payload = {
      id: 'id'
    };
    return expectSaga(fetchGameDetails, payload)
      .put(gameLoading())
      .call(retrieveGameDetails, payload)
      .put(gameInfo(initialState.game))
      .run();
  });

  it('should call navigate action on changeGameNotFound', () => {
    return expectSaga(changeToGameNotFound)
      .put(navigate({ path: `/game-not-found` }))
      .run();
  });

  it('should call sendOpenCell API and gameInfo action on openCell', () => {
    const sendOpenCell = jest
      .spyOn(apis, 'sendOpenCell')
      .mockImplementation(() => initialState.game);
    const payload = {
      x: 0,
      y: 0
    };
    return expectSaga(openCell, payload)
      .call(sendOpenCell, payload)
      .put(gameInfo(initialState.game))
      .run();
  });

  it('should call sendFlagCell API and gameInfo action on flagCell', () => {
    const sendFlagCell = jest
      .spyOn(apis, 'sendFlagCell')
      .mockImplementation(() => initialState.game);
    const payload = {
      x: 0,
      y: 0
    };
    return expectSaga(flagCell, payload)
      .call(sendFlagCell, payload)
      .put(gameInfo(initialState.game))
      .run();
  });

  it('should call navigate action on tryAgain', () => {
    return expectSaga(tryAgain).put(navigate({ path: `/` })).run();
  });
});
