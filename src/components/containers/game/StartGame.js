import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SelectDifficulty from '../../elements/game/SelectDifficulty';
import ActionButton from '../../elements/shared/ActionButton';
import gameDifficulties from '../../../constants/gameDifficulties';
import { getCreationDifficulty } from '../../../reducers/selectors';
import { changeDifficulty } from '../../../actions/creationActions';
import { createNewGame } from '../../../actions/gameActions';

const StartGame = () => {
  const dispatch = useDispatch();
  const difficulty = useSelector(getCreationDifficulty);
  const onChangeDifficulty = selectedDifficulty => {
    dispatch(changeDifficulty({ difficulty: selectedDifficulty }));
  };

  return (
    <div>
      <SelectDifficulty
        action={onChangeDifficulty}
        difficulties={Object.keys(gameDifficulties)}
        selected={difficulty}
      />
      <ActionButton
        action={() => dispatch(createNewGame({ difficulty }))}
        label="Start game"
      />
    </div>
  );
};

export default StartGame;
