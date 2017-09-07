import React from 'react';
import classNames from 'classnames';

// redux-form does not expose proper propTypes
// so we need to tell eslint to not check that
/* eslint react/prop-types: 0 */

const Checkbox = ({
  input,
  label,
  type,
  meta: {
    error,
    visited
  }
}) => (
  <div className="control-wrap">
    <label htmlFor={input.name} className="control-label switch-label">
      <span className={classNames('switch-control', { on: input.value })}>
        <input
          {...input}
          id={input.name}
          type={type}
        />
      </span>
      <span className="switch-label-text">{label}</span>
    </label>
    {visited && input.value.length > 0 && error && <span className="msg msg-error text-right">{error}</span>}
  </div>
);

export default Checkbox;
