import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.scss';

const Header = ({ value }) => {
  return (
    <div className="header">
      <h2>
        {value}
      </h2>
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.string.isRequired
};

export default Header;
