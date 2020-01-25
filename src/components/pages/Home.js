import React from 'react';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import StartGame from '../containers/game/StartGame';

const Home = () => {
  return (
    <PageWrapper>
      <Header title="Minesweeper" />
      <StartGame />
    </PageWrapper>
  );
};

export default Home;
