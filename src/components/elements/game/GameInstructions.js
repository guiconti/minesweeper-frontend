import React from 'react';
import Title from '../shared/Title';
import './styles/gameInstructions.scss';

const GameInstructions = () => {
  const instructions = [
    'Your objective is to clear all cells while flagging every mine on the field',
    'To reveal a cell click on it with your left click',
    'To add a flag to the cell click on it with your right click',
    'Have fun!',
  ];
  return (
    <div className="game-instructions">
      <Title>
        Instructions
      </Title>
      {instructions.map((instruction, i) =>
        <p key={i}>
          {instruction}
        </p>
      )}
    </div>
  );
};

export default GameInstructions;
