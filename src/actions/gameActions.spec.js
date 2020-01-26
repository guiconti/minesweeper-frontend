import {
  NEW_GAME,
  FETCH_NEW_GAME,
  GAME_LOADING,
  FETCH_GAME_DETAILS,
  GAME_NOT_FOUND,
  GAME_INFO,
  OPEN_CELL,
  FLAG_CELL,
  TRY_AGAIN
} from '../constants/gameTypes';
import {
  newGame,
  createNewGame,
  retrieveGameDetails,
  gameLoading,
  gameNotFound,
  gameInfo,
  openCell,
  flagCell,
  tryAgain
} from './gameActions';

describe('Game Actions', () => {
  it('should return defined object on newGame call', () => {
    const expected = {
      type: NEW_GAME,
      payload: {
        difficulty: '0'
      }
    };
    const actual = newGame(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on createNewGame call', () => {
    const expected = {
      type: FETCH_NEW_GAME,
      payload: {
        difficulty: '0'
      }
    };
    const actual = createNewGame(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on retrieveGameDetails call', () => {
    const expected = {
      type: FETCH_GAME_DETAILS,
      payload: {
        id: 'id'
      }
    };
    const actual = retrieveGameDetails(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on gameLoading call', () => {
    const expected = {
      type: GAME_LOADING
    };
    const actual = gameLoading(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on gameNotFound call', () => {
    const expected = {
      type: GAME_NOT_FOUND
    };
    const actual = gameNotFound(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on gameInfo call', () => {
    const expected = {
      type: GAME_INFO,
      payload: {
        id: 'id'
      }
    };
    const actual = gameInfo(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on openCell call', () => {
    const expected = {
      type: OPEN_CELL,
      payload: {
        x: 0,
        y: 0
      }
    };
    const actual = openCell(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on flagCell call', () => {
    const expected = {
      type: FLAG_CELL,
      payload: {
        x: 0,
        y: 0
      }
    };
    const actual = flagCell(expected.payload);

    expect(actual).toEqual(expected);
  });

  it('should return defined object on tryAgain call', () => {
    const expected = {
      type: TRY_AGAIN
    };
    const actual = tryAgain(expected.payload);

    expect(actual).toEqual(expected);
  });
});
