import React from 'react';
import PropTypes from 'prop-types';

const TinyForm = ({
  title,
  children
}) => (
  <div className="tiny-form-wrap">
    <div className="tiny-form-logo">
      <img src="/static/logo.png" alt="logo" />
    </div>
    <h1 className="tiny-form-header">{title}</h1>
    <div className="tiny-form">
      {children}
    </div>
  </div>
);

TinyForm.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

export default TinyForm;
