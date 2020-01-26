import React from 'react';
import PropTypes from 'prop-types';
import './styles/alertText.scss';

const AlertText = ({ children }) => {
  return (
    <div className='alert'>
      <h3>
        {children}
      </h3>
    </div>
  );
};

AlertText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
};

export default AlertText;
