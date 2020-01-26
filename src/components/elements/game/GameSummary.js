import React from 'react';
import PropTypes from 'prop-types';
import AlertText from '../shared/AlertText';
import GameInfo from './GameInfo';
import gameStatus, { WON, LOST } from '../../../constants/gameStatus';
import gameDifficulties from '../../../constants/gameDifficulties';
import './styles/gameSummary.scss';

const GameSummary = ({ status, mines, difficulty }) => {
  return (
    <div className="game-summary">
      {gameStatus[status] === WON
        ? <AlertText>
            Congratulations!!! You won 🎉🎉🎉
          </AlertText>
        : null}
      {gameStatus[status] === LOST
        ? <AlertText>Ohh noooo, you lost :(</AlertText>
        : null}
      <GameInfo label="Mines" value={mines} />
      <GameInfo label="Difficulty" value={gameDifficulties[difficulty]} />
    </div>
  );
};

GameSummary.propTypes = {
  status: PropTypes.number.isRequired,
  mines: PropTypes.number.isRequired,
  difficulty: PropTypes.number.isRequired
};

export default GameSummary;
