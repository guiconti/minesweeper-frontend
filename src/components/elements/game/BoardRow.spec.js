
import React from 'react';
import { shallow } from 'enzyme';
import BoardRow from './BoardRow';
import BoardCell from './BoardCell';

describe('<BoardRow />', () => {
  const action = jest.fn();
  const cells = ['*', '*', '*', '*', '*'];
  const row = 0;

  it('should have a div with the board-row class', () => {
    const wrapper = shallow(
      <BoardRow
        action={action}
        cells={cells}
        row={row}
      />
    );
    const actual = wrapper.find('div').hasClass('board-row');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should have an amount of <BoardCell /> equals to cells', () => {
    const wrapper = shallow(
      <BoardRow
        action={action}
        cells={cells}
        row={row}
      />
    );
    const actual = wrapper.find(BoardCell).length;
    const expected = cells.length;

    expect(actual).toEqual(expected);
  });
});
