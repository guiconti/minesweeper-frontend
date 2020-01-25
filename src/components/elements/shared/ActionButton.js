import React from 'react';
import PropTypes from 'prop-types';
import './styles/actionButton.scss';

const ActionButton = ({ action, name }) => {
  return (
    <div className="action-container">
      <button className="action-button" onClick={action}>
        {name}
      </button>
    </div>
  );
};

ActionButton.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default ActionButton;
