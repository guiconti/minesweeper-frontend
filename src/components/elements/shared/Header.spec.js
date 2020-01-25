import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('<Header />', () => {
  const title = 'Test title';

  it('should have a div with class header', () => {
    const wrapper = shallow(
      <Header>
        {title}
      </Header>
    );
    const actual = wrapper.find('div').hasClass('header');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a h2 with text equal to title variable', () => {
    const wrapper = shallow(
      <Header>
        {title}
      </Header>
    );
    const actual = wrapper.find('h2').text();
    const expected = title;

    expect(actual).toEqual(expected);
  });
});
