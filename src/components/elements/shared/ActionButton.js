import React from 'react';
import PropTypes from 'prop-types';
import './styles/actionButton.scss';

const Header = ({ action, name }) => {
  return (
    <div>
      <button className="action-button" onClick={action}>
        {name}
      </button>
    </div>
  );
};

Header.propTypes = {
  action: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
};

export default Header;
