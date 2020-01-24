import React from 'react';
// import { Link } from 'react-router-dom';
import PageWrapper from '../elements/shared/PageWrapper';
import Header from '../elements/shared/Header';
import StartGame from '../containers/game/StartGame';

const HomePage = () => {
  return (
    <PageWrapper>
      <Header title="Minesweeper" />
      <StartGame />
    </PageWrapper>
  );
};

export default HomePage;
