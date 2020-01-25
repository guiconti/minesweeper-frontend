import React from 'react';
import { shallow } from 'enzyme';
import PageWrapper from './PageWrapper';

describe('<PageWrapper />', () => {
  const title = 'Test title'

  it('should have a div with class loader', () => {
    const wrapper = shallow(
      <PageWrapper />
    );
    const actual = wrapper.find('div.page-wrapper').length;
    const expected = 1

    expect(actual).toEqual(expected);
  });

  it('should render a string if passed as children', () => {
    const wrapper = shallow(
      <PageWrapper>
        <p>{title}</p>
      </PageWrapper>
    );
    const actual = wrapper.find('p').text();
    const expected = title

    expect(actual).toEqual(expected);
  });
});
