import React from 'react';
import PropTypes from 'prop-types';

const Box = ({ children }) => (
  <div className="box">
    {children}
  </div>
);

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
};

Box.defaultProps = {
  children: null
};

export default Box;
