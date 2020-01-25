import React from 'react';
import PropTypes from 'prop-types';
import './styles/gameInfo.scss';

const GameInfo = ({ label, value, fullWidth }) => {
  return (
    <div className={`game-info ${fullWidth ? 'full-width' : ''}`}>
      <span>
        <p className="label">{label}</p>
        <p className="value">{value}</p>
      </span>
    </div>
  );
};

GameInfo.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  fullWidth: PropTypes.bool
};

export default GameInfo;
