import React from 'react';
import PropTypes from 'prop-types';
import BoardRow from './BoardRow';

const Board = ({ action, board }) => {
  return (
    <div>
      {board.map((row, i) =>
        <BoardRow action={action} cells={row} row={i} key={i} />
      )}
    </div>
  );
};

Board.propTypes = {
  action: PropTypes.func.isRequired,
  board: PropTypes.array.isRequired
};

export default Board;
