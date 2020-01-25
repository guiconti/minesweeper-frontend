
import React from 'react';
import { shallow } from 'enzyme';
import Board from './Board';
import BoardRow from './BoardRow';

describe('<Board />', () => {
  const action = jest.fn();
  const board = [['*'], ['*'], ['*'], ['*'], ['*']];

  it('should have an amount of <BoardRow /> equals to board length', () => {
    const wrapper = shallow(
      <Board
        action={action}
        board={board}
      />
    );
    const actual = wrapper.find(BoardRow).length;
    const expected = board.length;

    expect(actual).toEqual(expected);
  });
});
