import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';

describe('<NotFound />', () => {
  it('should have a <PageWrapper />', () => {
    const wrapper = shallow(<NotFound />);
    const actual = wrapper.find(PageWrapper).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });

  it('should have a <Header />', () => {
    const wrapper = shallow(<NotFound />);
    const actual = wrapper.find(Header).length;
    const expected = 1;

    expect(actual).toEqual(expected);
  });
});
