import React from 'react';
import classNames from 'classnames';

// redux-form does not expose proper propTypes
// so we need to tell eslint to not check that
/* eslint react/prop-types: 0 */

const Input = ({
  input,
  label,
  type,
  placeholder,
  meta: {
    error,
    visited
  }
}) => (
  <div className="control-wrap">
    {label && <label htmlFor={input.name} className="control-label">{label}</label>}
    <input
      {...input}
      id={input.name}
      placeholder={placeholder}
      type={type}
      className={classNames('form-control', { 'form-control-error': visited && input.value.length > 0 && error })}
    />
    {visited && input.value.length > 0 && error && <span className="msg msg-error text-right">{error}</span>}
  </div>
);

export default Input;
