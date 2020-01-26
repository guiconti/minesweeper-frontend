import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga'
import configureMockStore from 'redux-mock-store';
import GameContainer from './GameContainer';
import Loading from '../../elements/shared/Loading';
import GameSummary from '../../elements/game/GameSummary';
import Board from '../../elements/game/Board';
import ActionButton from '../../elements/shared/ActionButton';
import initialState from '../../../reducers/initialState';
import * as actions from '../../../actions/gameActions';
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe('<GameContainer />', () => {
  const id = 'id';

  it('should call retrieveGameDetails on mount', () => {
    const store = mockStore(initialState);
    jest.spyOn(actions, 'retrieveGameDetails');

    mount(
      <Provider store={store}>
        <GameContainer id={id} />
      </Provider>
    );

    const expected = 1

    expect(actions.retrieveGameDetails).toHaveBeenCalledTimes(expected);
  });

  it('should contain <Loading /> when loading is true', () => {
    const newState = initialState;
    newState.game.loading = true;
    const store = mockStore(newState);

    const wrapper = mount(
      <Provider store={store}>
        <GameContainer id={id} />
      </Provider>
    );

    const actual = wrapper.find(Loading).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });

  it('should contain <GameSummary />', () => {
    const newState = initialState;
    newState.game.loading = false
    const store = mockStore(newState);

    const wrapper = mount(
      <Provider store={store}>
        <GameContainer id={id} />
      </Provider>
    );

    const actual = wrapper.find(GameSummary).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });

  it('should contain <Board />', () => {
    const newState = initialState;
    newState.game.loading = false
    const store = mockStore(newState);

    const wrapper = mount(
      <Provider store={store}>
        <GameContainer id={id} />
      </Provider>
    );

    const actual = wrapper.find(Board).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });

  it('should contain <ActionButton />', () => {
    const newState = initialState;
    newState.game.loading = false
    const store = mockStore(newState);

    const wrapper = mount(
      <Provider store={store}>
        <GameContainer id={id} />
      </Provider>
    );

    const actual = wrapper.find(ActionButton).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });
});
