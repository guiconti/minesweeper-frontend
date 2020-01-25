import React from 'react';
import PropTypes from 'prop-types';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import GameContainer from '../containers/game/GameContainer';

const Game = ({ match }) => {
  return (
    <PageWrapper>
      <Header>
        Minesweeper
      </Header>
      <GameContainer id={match.params.id} />
    </PageWrapper>
  );
};

Game.propTypes = {
  match: PropTypes.object.isRequired
};

export default Game;
