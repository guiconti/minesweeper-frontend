import React from 'react';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import GameInstructions from '../elements/game/GameInstructions';
import StartGame from '../containers/game/StartGame';

const Home = () => {
  return (
    <PageWrapper>
      <Header value="Minesweeper" />
      <GameInstructions />
      <StartGame />
    </PageWrapper>
  );
};

export default Home;
