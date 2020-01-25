import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

describe('<Home />', () => {
  it('should have a header called \'Minesweeper\'', () => {
    const wrapper = shallow(<Home />);
    const actual = wrapper.find('h1').text();
    const expected = 'Boilerplate';

    expect(actual).toEqual(expected);
  });
});
