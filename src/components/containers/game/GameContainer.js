import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import GameSummary from '../../elements/game/GameSummary';
import BoardRow from '../../elements/game/BoardRow';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveGameDetails, openCell, flagCell } from '../../../actions/gameActions';
import {
  getGameStatus,
  getGameMines,
  getGameDifficulty,
  getGameBoard
} from '../../../reducers/selectors';

const GameContainer = ({ id }) => {
  const dispatch = useDispatch();
  const status = useSelector(getGameStatus);
  const mines = useSelector(getGameMines);
  const difficulty = useSelector(getGameDifficulty);
  const board = useSelector(getGameBoard);
  const onCellClick = (e, x, y) => {
    e.preventDefault();
    if (e.type === 'click') {
      dispatch(openCell({ id, x, y }));
    } else {
      dispatch(flagCell({ id, x, y }));
    }
  };

  useEffect(() => {
    dispatch(retrieveGameDetails({ id }));
  }, []);

  return (
    <div>
      <GameSummary
        status={status}
        mines={mines}
        difficulty={difficulty}
      />
      {board.map((row, i) =>
        <BoardRow action={onCellClick} cells={row} row={i} key={i} />
      )}
    </div>
  );
};

GameContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default GameContainer;
