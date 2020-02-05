import React from 'react';
import PropTypes from 'prop-types';
import { BLANK, MINE, UNKNOWN, FLAG } from '../../../constants/gameCells';
import './styles/boardCell.scss';

const BoardCell = ({ action, value, row, column }) => {
  return (
    <div
      className={`
        board-cell
        ${value === BLANK ? 'empty-cell' : ''}
        ${value === MINE ? 'mine-cell' : ''}
      `}
      onClick={(e) => {
        if (value === UNKNOWN || value === FLAG) 
          action(e, column, row);
        null;
      }}
      onContextMenu={(e) => {
        if (value === UNKNOWN || value === FLAG) 
          action(e, column, row);
        null;
      }}
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

export default React.memo(BoardCell);
