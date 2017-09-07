import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import validators from '../../helpers/validators';
import { signInRequested } from '../../actions';

import TinyForm from '../Forms/TinyForm';
import Input from '../Forms/Input';
import Checkbox from '../Forms/Checkbox';
import Loader from '../Helpers/Loader';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);

    const { signIn } = this.props;
    this.signIn = signIn.bind(this);
  }

  render() {
    const { handleSubmit, submitting, invalid, loading, message } = this.props;

    return (
      <TinyForm title="Sign In">
        <form
          onSubmit={handleSubmit(this.signIn)}
        >
          {loading && <Loader />}
          {message && <p className="msg msg-box msg-error">{message}</p>}
          <Field
            name="email"
            placeholder="e-mail"
            type="email"
            component={Input}
          />
          <Field
            name="password"
            placeholder="password"
            type="password"
            component={Input}
          />
          <Field
            name="rememberMe"
            label="Remember me"
            type="checkbox"
            component={Checkbox}
          />
          <div className="btn-wrap">
            <button
              className="btn stretch"
              type="submit"
              disabled={submitting || invalid}
            >
              Sign In
            </button>
          </div>
          <div className="tiny-form-footer">
            <p>Don&apos;t have an account? <a href="#/no-sign-up-implemented">Sign Up</a></p>
          </div>
        </form>
      </TinyForm>
    );
  }
}

SignInForm.propTypes = {
  signIn: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  invalid: PropTypes.bool.isRequired,
  loading: PropTypes.bool,
  message: PropTypes.string
};

SignInForm.defaultProps = {
  loading: false,
  message: ''
};

export default reduxForm({
  form: 'lyricsSearchForm',
  touchOnChange: true,
  validate: (fields) => {
    const errors = {};

    if (!validators.validateEmail(fields.email)) {
      errors.email = 'Invalid e-mail';
    }

    if (!validators.validatePassword(fields.password)) {
      errors.password = 'Invalid password';
    }

    return errors;
  }
})(connect(
  state => ({
    loading: state.auth.loading,
    message: state.auth.message
  }),
  dispatch => ({
    signIn: ({ email, password, rememberMe }) => dispatch(signInRequested({ email, password, rememberMe }))
  })
)(SignInForm));
