import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../elements/shared/Loading';
import GameSummary from '../../elements/game/GameSummary';
import Board from '../../elements/game/Board';
import { useDispatch, useSelector } from 'react-redux';
import { retrieveGameDetails, openCell, flagCell } from '../../../actions/gameActions';
import {
  getGameLoading,
  getGameStatus,
  getGameMines,
  getGameDifficulty,
  getGameBoard
} from '../../../reducers/selectors';

const GameContainer = ({ id }) => {
  const dispatch = useDispatch();
  const loading = useSelector(getGameLoading);
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
      {loading ?
        <Loading /> :
          <div>
            <GameSummary
              status={status}
              mines={mines}
              difficulty={difficulty}
            />
            <Board action={onCellClick} board={board} />
          </div>
      }
    </div>
  );
};

GameContainer.propTypes = {
  id: PropTypes.string.isRequired
};

export default GameContainer;
