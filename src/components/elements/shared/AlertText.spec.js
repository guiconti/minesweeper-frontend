import React from 'react';
import { shallow } from 'enzyme';
import AlertText from './AlertText';

describe('<AlertText />', () => {
  const title = 'Test title'

  it('should have a div with the alert class', () => {
    const wrapper = shallow(
      <AlertText success={false}>
        {title}
      </AlertText>
    );
    const actual = wrapper.find('div').hasClass('alert');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a h3 with the title variable', () => {
    const wrapper = shallow(
      <AlertText success={false}>
        {title}
      </AlertText>
    );
    const actual = wrapper.find('h3').text();
    const expected = title;

    expect(actual).toEqual(expected);
  });

  it('should have a div with the failure class when no success is sent', () => {
    const wrapper = shallow(
      <AlertText success={false}>
        {title}
      </AlertText>
    );
    const actual = wrapper.find('div').hasClass('failure');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a div with the no success class when no success is sent', () => {
    const wrapper = shallow(
      <AlertText success={false}>
        {title}
      </AlertText>
    );
    const actual = wrapper.find('div').hasClass('success');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  it('should have a div with the success class when success is sent', () => {
    const wrapper = shallow(
      <AlertText success={true}>
        {title}
      </AlertText>
    );
    const actual = wrapper.find('div').hasClass('success');
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
