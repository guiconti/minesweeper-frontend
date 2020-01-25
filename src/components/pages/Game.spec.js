import React from 'react';
import { shallow } from 'enzyme';
import Game from './Game';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import GameContainer from '../containers/game/GameContainer';

describe('<Game />', () => {
  const match = {
    params: {
      id: 'id'
    }
  };
  it('should have a <PageWrapper />', () => {
    const wrapper = shallow(<Game match={match}/>);
    const actual = wrapper.find(PageWrapper).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <Header />', () => {
    const wrapper = shallow(<Game match={match} />);
    const actual = wrapper.find(Header).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <GameContaner />', () => {
    const wrapper = shallow(<Game match={match} />);
    const actual = wrapper.find(GameContainer).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
