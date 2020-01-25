import React from 'react';
import PropTypes from 'prop-types';
import './styles/title.scss';

const Title = ({ value }) => {
  return (
    <div className="title">
      <h3>
        {value}
      </h3>
    </div>
  );
};

Title.propTypes = {
  value: PropTypes.string.isRequired
};

export default Title;
