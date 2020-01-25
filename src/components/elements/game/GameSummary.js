import React from 'react';
import PropTypes from 'prop-types';
import GameInfo from './GameInfo';
import gameStatus from '../../../constants/gameStatus';
import gameDifficulties from '../../../constants/gameDifficulties';
import './styles/gameSummary.scss';

const GameSummary = ({ status, mines, difficulty }) => {
  return (
    <div className="game-summary">
      <GameInfo label="Status" value={gameStatus[status]} fullWidth={true} />
      <GameInfo label="Mines" value={mines} />
      <GameInfo label="Difficulty" value={gameDifficulties[difficulty]} />
    </div>
  );
};

GameSummary.propTypes = {
  status: PropTypes.string.isRequired,
  mines: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired
};

export default GameSummary;
