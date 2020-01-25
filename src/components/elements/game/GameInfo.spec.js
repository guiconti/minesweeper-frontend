
import React from 'react';
import { shallow } from 'enzyme';
import GameInfo from './GameInfo';

describe('<GameInfo />', () => {
  const label = 'Test label';
  const value = 'Test value';

  it('should have a text using label variable', () => {
    const wrapper = shallow(
      <GameInfo
        label={label}
        value={value}
      />
    );
    const actual = wrapper.find('p.label').text();
    const expected = label;

    expect(actual).toEqual(expected);
  });

  it('should have a text using value variable', () => {
    const wrapper = shallow(
      <GameInfo
        label={label}
        value={value}
      />
    );
    const actual = wrapper.find('p.value').text();
    const expected = value;

    expect(actual).toEqual(expected);
  });

  it('should not have a full-width class when fullWidth is not true', () => {
    const wrapper = shallow(
      <GameInfo
        label={label}
        value={value}
      />
    );
    const actual = wrapper.find('div.game-info').hasClass('full-width');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  it('should have a full-width class when fullWidth is true', () => {
    const wrapper = shallow(
      <GameInfo
        label={label}
        value={value}
        fullWidth={true}
      />
    );
    const actual = wrapper.find('div.game-info').hasClass('full-width');
    const expected = true;

    expect(actual).toEqual(expected);
  });
});
