import { CHANGE_DIFFICULTY } from '../constants/creationTypes';
import reducer from './creationReducer';
import initialState from './initialState';

describe('Creation reducers', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };

    const actual = reducer(undefined, action);
    const expected = initialState.creation;

    expect(actual).toEqual(expected);
  });

  it('should handle CHANGE_DIFFICULTY', () => {
    const action = { type: CHANGE_DIFFICULTY, payload: { difficulty: '0' } };

    const actual = reducer(initialState.creation, action);
    const expected = Object.assign(initialState.creation, {
      difficulty: action.payload.difficulty
    });

    expect(actual).toEqual(expected);
  });
});
