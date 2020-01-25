import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loading';

describe('<Loading />', () => {
  it('should have a div with class loader', () => {
    const wrapper = shallow(
      <Loading />
    );
    const actual = wrapper.find('div.loader').length;
    const expected = 1

    expect(actual).toEqual(expected);
  });
});
