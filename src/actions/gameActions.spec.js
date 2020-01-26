import { runSaga } from 'redux-saga';
import { NEW_GAME } from '../constants/gameTypes';
import { createNewGame } from './gameActions';
import { fetchNewGame } from '../sagas/gameSaga';
import * as apis from '../apis/gameApis';

describe('Game Actions', () => {

  it('should return defined object on another example call', async () => {
    // const retrieveNewGame = jest.spyOn(apis, 'retrieveNewGame')
    //   .mockImplementation(() => Promise.resolve());
    // const dispatched = [];
    // const result = await runSaga({
    //   dispatch: (action) => dispatched.push(action),
    // }, fetchNewGame);

    // expect(retrieveNewGame).toHaveBeenCalledTimes(1);
    // // expect(dispatched).toEqual([saveAuthorsToList(dummyAuthors)]);
    // retrieveNewGame.mockClear();
  });
});
