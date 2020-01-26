import { NAVIGATE } from '../constants/navigateTypes';
import { navigate } from './navigateActions';

describe('Navigate Actions', () => {
  it('should return defined object on newGame call', () => {
    const expected = {
      type: NAVIGATE,
      payload: {
        path: '/games'
      }
    };
    const actual = navigate(expected.payload);

    expect(actual).toEqual(expected);
  });
});
