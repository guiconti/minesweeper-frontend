import React from 'react';
import PropTypes from 'prop-types';
import './styles/alertText.scss';

const AlertText = ({ children, success }) => {
  return (
    <div className={`alert ${success ? 'success' : 'failure'}`}>
      <h3>
        {children}
      </h3>
    </div>
  );
};

AlertText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  success: PropTypes.bool.isRequired
};

export default AlertText;
