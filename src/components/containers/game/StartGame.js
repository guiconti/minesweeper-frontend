import React from 'react';
import ActionButton from '../../elements/shared/ActionButton';
import { useDispatch } from 'react-redux';
import { createNewGame } from '../../../actions/gameActions';

const StartGame = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <ActionButton action={() => dispatch(createNewGame())} name="Start game" />
    </div>
  );
};

export default StartGame;
