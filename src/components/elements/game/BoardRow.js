import React from 'react';
import PropTypes from 'prop-types';
import BoardCell from './BoardCell';
import gameCells from '../../../constants/gameCells';
import './styles/boardRow.scss';

const BoardRow = ({ action, cells, row }) => {
  return (
    <div className="board-row">
      {cells.map((cell, i) =>
        <BoardCell action={action} value={gameCells[cell]} row={row} column={i} key={i} />
      )}
    </div>
  );
};

BoardRow.propTypes = {
  action: PropTypes.func.isRequired,
  cells: PropTypes.arrayOf(PropTypes.string).isRequired,
  row: PropTypes.number.isRequired
};

export default BoardRow;
