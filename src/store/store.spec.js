import configureStore from './index';
import { CHANGE_DIFFICULTY } from '../constants/creationTypes';
import { NEW_GAME, GAME_INFO } from '../constants/gameTypes';

describe('Store', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should display results when necessary creation data is provided', () => {
    const store = configureStore();

    const actions = [
      { type: CHANGE_DIFFICULTY, payload: { difficulty: '0' } },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = {
      difficulty: '0',
    };

    expect(actual.creation).toEqual(expected);
  });

  it('should display results when necessary game data is provided', () => {
    const store = configureStore();
    const game = {
      id: 'id',
      board: ['*'],
      status: 0,
      difficulty: '0',
      rows: 10,
      columns: 10,
      mines: 10,
      seed: '',
      loading: false,
      found: true,
    };

    const actions = [
      { type: NEW_GAME, payload: game },
      { type: GAME_INFO, payload: game },
    ];
    actions.forEach(action => store.dispatch(action));

    const actual = store.getState();
    const expected = game;

    expect(actual.game).toEqual(expected);
  });
});
