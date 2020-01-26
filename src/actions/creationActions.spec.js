import { CHANGE_DIFFICULTY } from '../constants/creationTypes';
import { changeDifficulty } from './creationActions';

describe('Creation Actions', () => {

  it('should return defined object on another example call', () => {
    const expected =  {
      type: CHANGE_DIFFICULTY,
      payload: {
        difficulty: '0',
      }
    };
    const actual = changeDifficulty(expected.payload);

    expect(actual).toEqual(expected);
  });
});
