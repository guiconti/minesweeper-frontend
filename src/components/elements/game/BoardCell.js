import React from 'react';
import PropTypes from 'prop-types';
import './styles/boardCell.scss';

const BoardCell = ({ action, value, row, column }) => {
  return (
    <div
      className={`
        board-cell
        ${value === ' ' ? 'empty-cell' : ''}
        ${value === '💣' ? 'mine-cell' : ''}
      `}
      onClick={e => action(e, column, row)}
      onContextMenu={e => action(e, column, row)}
    >
      {value}
    </div>
  );
};

BoardCell.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  column: PropTypes.number.isRequired
};

export default BoardCell;
