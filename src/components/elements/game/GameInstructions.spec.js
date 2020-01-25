
import React from 'react';
import { shallow } from 'enzyme';
import Title from '../shared/Title';
import GameInstructions from './GameInstructions';

describe('<GameInstructions />', () => {
  it('should have a div with class game-instructions', () => {
    const wrapper = shallow(
      <GameInstructions />
    );
    const actual = wrapper.find('div').hasClass('game-instructions');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a Title', () => {
    const wrapper = shallow(
      <GameInstructions />
    );
    const actual = wrapper.find(Title).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
