
import React from 'react';
import { shallow } from 'enzyme';
import SelectDifficulty from './SelectDifficulty';
import Title from '../shared/Title';
import gameDifficulties from '../../../constants/gameDifficulties';

describe('<SelectDifficulty />', () => {
  const action = jest.fn();
  const difficulties = Object.keys(gameDifficulties);
  const selected = 0;

  it('should have div with a difficulties class', () => {
    const wrapper = shallow(
      <SelectDifficulty
        action={action}
        difficulties={difficulties}
        selected={selected}
      />
    );
    const actual = wrapper.find(SelectDifficulty).hasClass('difficulties');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should an amount of inputs equals to the amount of difficulties', () => {
    const wrapper = shallow(
      <SelectDifficulty
        action={action}
        difficulties={difficulties}
        selected={selected}
      />
    );
    const actual = wrapper.find('label').length;
    const expected = difficulties.length;

    expect(actual).toEqual(expected);
  });
});
