import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { connect } from 'react-redux';
import { checkToken } from '../../actions';

import stylesheet from '../../styles/style.scss';

import SignInForm from '../Auth/SignInForm';
import Header from './Header';

class Layout extends React.Component {
  componentDidMount() {
    if (!this.props.authenticated) {
      this.props.checkToken();
    }
  }

  renderContent() {
    const { authenticated, children } = this.props;
    return authenticated ? children : <SignInForm />;
  }

  render() {
    const {
      secured,
      title,
      children,
      currentUrl
    } = this.props;

    return (
      <div>
        <Head>
          <title>{ title }</title>
          <meta charSet="utf-8" />
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <Header currentUrl={currentUrl} />
        <div className="page-content">
          {secured ? this.renderContent() : children}
        </div>
      </div>
    );
  }
}

Layout.propTypes = {
  secured: PropTypes.bool,
  authenticated: PropTypes.bool,
  title: PropTypes.string.isRequired,
  checkToken: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  currentUrl: PropTypes.string.isRequired
};

Layout.defaultProps = {
  secured: false,
  authenticated: false,
  children: null
};

export default connect(
  state => ({
    authenticated: state.auth.authenticated
  }),
  dispatch => ({
    checkToken: () => dispatch(checkToken())
  })
)(Layout);
