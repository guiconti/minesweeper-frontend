import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.scss';

const Header = ({ children }) => {
  return (
    <div className="header">
      <h2>
        {children}
      </h2>
    </div>
  );
};

Header.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Header;
