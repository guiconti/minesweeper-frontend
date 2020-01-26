import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import createSagaMiddleware from 'redux-saga'
import configureMockStore from 'redux-mock-store';
import StartGame from './StartGame';
import SelectDifficulty from '../../elements/game/SelectDifficulty';
import ActionButton from '../../elements/shared/ActionButton';
import initialState from '../../../reducers/initialState';
const sagaMiddleware = createSagaMiddleware();
const mockStore = configureMockStore([sagaMiddleware]);

describe('<StartGame />', () => {
  it('should contain <SelectDifficulty />', () => {
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );

    const actual = wrapper.find(SelectDifficulty).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });

  it('should contain <ActionButton />', () => {
    const store = mockStore(initialState);

    const wrapper = mount(
      <Provider store={store}>
        <StartGame />
      </Provider>
    );

    const actual = wrapper.find(ActionButton).length;
    const expected = 1

    expect(actual).toEqual(expected);
  });
});
