
import React from 'react';
import { shallow } from 'enzyme';
import GameSummary from './GameSummary';
import AlertText from '../shared/AlertText';
import GameInfo from './GameInfo';

describe('<GameSummary />', () => {
  const mines = 10;
  const difficulty = 0

  it('should have a div with the game-summary class', () => {
    const wrapper = shallow(
      <GameSummary
        status={0}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find('div').hasClass('game-summary');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have not have a <AlertText /> when status is PLAYING', () => {
    const wrapper = shallow(
      <GameSummary
        status={1}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find(AlertText).length;
    const expected = 0;

    expect(actual).toEqual(expected);
  });

  it('should have have a <AlertText /> when status is WON', () => {
    const wrapper = shallow(
      <GameSummary
        status={2}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find(AlertText).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have have a <AlertText /> when status is LOST', () => {
    const wrapper = shallow(
      <GameSummary
        status={3}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find(AlertText).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have have two <GameInfo />', () => {
    const wrapper = shallow(
      <GameSummary
        status={0}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find(GameInfo).length;
    const expected = 2;

    expect(actual).toEqual(expected);
  });

  it('should have two <GameInfo />', () => {
    const wrapper = shallow(
      <GameSummary
        status={0}
        mines={mines}
        difficulty={difficulty}
      />
    );
    const actual = wrapper.find(GameInfo).length;
    const expected = 2;

    expect(actual).toEqual(expected);
  });
});
