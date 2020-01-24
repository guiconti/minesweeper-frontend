import React from 'react';
import PropTypes from 'prop-types';
import './styles/pageWrapper.scss';

const PageWrapper = ({
  children
}) => (
  <div className="page-wrapper">
    { children }
  </div>
);

PageWrapper.propTypes = {
  children: PropTypes.element
};


export default PageWrapper;