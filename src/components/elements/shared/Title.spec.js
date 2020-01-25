import React from 'react';
import { shallow } from 'enzyme';
import Title from './Title';

describe('<Title />', () => {
  const title = 'Test title';

  it('should have a div with class title', () => {
    const wrapper = shallow(
      <Title>
        {title}
      </Title>
    );
    const actual = wrapper.find('div').hasClass('title');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a h3 with text equal to title variable', () => {
    const wrapper = shallow(
      <Title>
        {title}
      </Title>
    );
    const actual = wrapper.find('h3').text();
    const expected = title;

    expect(actual).toEqual(expected);
  });
});
