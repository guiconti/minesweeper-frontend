import React from 'react';
import PropTypes from 'prop-types';
import './styles/header.scss';

const Header = ({ title }) => {
  return (
    <div className="header">
      <h2>
        {title}
      </h2>
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
