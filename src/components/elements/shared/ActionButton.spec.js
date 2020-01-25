import React from 'react';
import { shallow } from 'enzyme';
import ActionButton from './ActionButton';

describe('<ActionButton />', () => {
  const title = 'Test title'
  const action = jest.fn();

  it('should have a div with the action-container class', () => {
    const wrapper = shallow(
      <ActionButton action={action} name={title}/>
    );
    const actual = wrapper.find('div').hasClass('action-container');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a button with the action-button class', () => {
    const wrapper = shallow(
      <ActionButton action={action} name={title}/>
    );
    const actual = wrapper.find('button').hasClass('action-button');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have a button with the title variable', () => {
    const wrapper = shallow(
      <ActionButton action={action} name={title}/>
    );
    const actual = wrapper.find('button').text();
    const expected = title;

    expect(actual).toEqual(expected);
  });

  it('should call action when button is clicked', () => {
    const wrapper = shallow(
      <ActionButton action={action} name={title}/>
    );
    wrapper.find('button').simulate('click');
    const expected = 1;

    expect(action).toHaveBeenCalledTimes(expected);
  });
});
