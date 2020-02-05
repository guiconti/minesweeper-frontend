
import React from 'react';
import { mount } from 'enzyme';
import BoardCell from './BoardCell';
import { BLANK, MINE, UNKNOWN, FLAG } from '../../../constants/gameCells';

describe('<BoardCell />', () => {
  const action = jest.fn();
  const value = '.';
  const row = 0;
  const column = 0;

  it('should have a div with the board-cell class', () => {
    const wrapper = mount(
      <BoardCell
        action={action}
        value={value}
        row={row}
        column={column}
      />
    );
    const actual = wrapper.find('div').hasClass('board-cell');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it(`should not have a div with the empty-cell class if value is not ${BLANK}`, () => {
    const wrapper = mount(
      <BoardCell
        action={action}
        value={value}
        row={row}
        column={column}
      />
    );
    const actual = wrapper.find('div').hasClass('empty-cell');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  it(`should not have a div with the mine-cell class if value is not ${MINE}`, () => {
    const wrapper = mount(
      <BoardCell
        action={action}
        value={value}
        row={row}
        column={column}
      />
    );
    const actual = wrapper.find('div').hasClass('mine-cell');
    const expected = false;

    expect(actual).toEqual(expected);
  });

  it(`should have a div with the empty-cell class if value is ${BLANK}`, () => {
    const wrapper = mount(
      <BoardCell
        action={action}
        value={BLANK}
        row={row}
        column={column}
      />
    );
    const actual = wrapper.find('div').hasClass('empty-cell');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it(`should have a div with the mine-cell class if value is ${MINE}`, () => {
    const wrapper = mount(
      <BoardCell
        action={action}
        value={MINE}
        row={row}
        column={column}
      />
    );
    const actual = wrapper.find('div').hasClass('mine-cell');
    const expected = true;

    expect(actual).toEqual(expected);
  });

  it('should call action on click', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <BoardCell
        action={spy}
        value={UNKNOWN}
        row={row}
        column={column}
      />
    );
    wrapper.find('div').simulate('click');
    const expected = 1;

    expect(spy).toHaveBeenCalledTimes(expected);
  });

  it('should call action on contextmenu', () => {
    const spy = jest.fn();

    const wrapper = mount(
      <BoardCell
        action={spy}
        value={FLAG}
        row={row}
        column={column}
      />
    );
    wrapper.find('div').simulate('contextmenu');
    const expected = 1;

    expect(spy).toHaveBeenCalledTimes(expected);
  });

  it(`should not call action on click if value is ${MINE}`, () => {
    const spy = jest.fn();

    const wrapper = mount(
      <BoardCell
        action={spy}
        value={MINE}
        row={row}
        column={column}
      />
    );
    wrapper.find('div').simulate('click');
    const expected = 0;

    expect(spy).toHaveBeenCalledTimes(expected);
  });

  it(`should not call action on contextmenu if value is ${MINE}`, () => {
    const spy = jest.fn();

    const wrapper = mount(
      <BoardCell
        action={spy}
        value={MINE}
        row={row}
        column={column}
      />
    );
    wrapper.find('div').simulate('click');
    const expected = 0;

    expect(spy).toHaveBeenCalledTimes(expected);
  });
});
