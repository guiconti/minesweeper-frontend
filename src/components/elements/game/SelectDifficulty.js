import React from 'react';
import PropTypes from 'prop-types';
import Title from '../shared/Title';
import gameDifficulties from '../../../constants/gameDifficulties';
import './styles/gameDifficulties.scss';

const SelectDifficulty = ({ action, difficulties, selected }) => {
  return (
    <div className="difficulties">
      <Title>
        Select difficulty
      </Title>
      {difficulties.map((difficulty, i) =>
        <label key={i} className="difficulty-input">
          <input
            type="radio"
            name="difficulty"
            value={difficulty}
            checked={selected === difficulty}
            onChange={() => action(difficulty)}
            className="difficulty-input"
          />
          {gameDifficulties[difficulty]}
        </label>
      )}
    </div>
  );
};

SelectDifficulty.propTypes = {
  action: PropTypes.func.isRequired,
  difficulties: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired
};

export default SelectDifficulty;
