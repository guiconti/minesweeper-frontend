import React from 'react';
import PropTypes from 'prop-types';
import './styles/title.scss';

const Title = ({ children }) => {
  return (
    <div className="title">
      <h3>
        {children}
      </h3>
    </div>
  );
};

Title.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default Title;
