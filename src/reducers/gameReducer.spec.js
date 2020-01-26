import { NEW_GAME } from '../constants/gameTypes';
import reducer from './gameReducer';
import initialState from './initialState';

describe('Game reducers', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    const actual = reducer(undefined, action);
    const expected = initialState.game;

    expect(actual).toEqual(expected);
  });

  it('should handle NEW_GAME', () => {
    const action = {
      type: NEW_GAME,
      payload: {
        game: {
          id: 'id',
          status: '0',
          board: ['1', '2', '3'],
          rows: 0,
          columns: 0,
          mines: 0,
          difficulty: '0',
          seed: '',
        }
      }
    };

    const actual = reducer(initialState.game, action);
    const expected = Object.assign(initialState.game, {
      game: action.payload.game
    });

    expect(actual).toEqual(expected);
  });
});
