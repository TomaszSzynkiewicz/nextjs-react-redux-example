import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

const Profile = ({ user, handleSignOut }) => (
  <div>
    <p>You are logged as: <strong>{user}</strong></p>
    <button type="button" className="btn" onClick={handleSignOut}>Sign Out</button>
  </div>
);

Profile.propTypes = {
  user: PropTypes.string.isRequired,
  handleSignOut: PropTypes.func.isRequired
};

export default connect(
  state => ({
    user: state.auth.user
  }),
  dispatch => ({
    handleSignOut: () => dispatch(signOut())
  })
)(Profile);
