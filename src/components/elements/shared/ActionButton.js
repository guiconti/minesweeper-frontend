import React from 'react';
import PropTypes from 'prop-types';
import './styles/actionButton.scss';

const ActionButton = ({ action, label }) => {
  return (
    <div className="action-container">
      <button className="action-button" onClick={action}>
        {label}
      </button>
    </div>
  );
};

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

export default ActionButton;
