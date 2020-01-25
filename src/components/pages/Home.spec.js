import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import GameInstructions from '../elements/game/GameInstructions';
import StartGame from '../containers/game/StartGame';

describe('<Home />', () => {
  it('should have a <PageWrapper />', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find(PageWrapper).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <Header />', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find(Header).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <GameInstructions />', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find(GameInstructions).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <StartGame />', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find(StartGame).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
