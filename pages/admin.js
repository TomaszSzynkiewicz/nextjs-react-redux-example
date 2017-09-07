import React from 'react';
import PropTypes from 'prop-types';
import { withReduxSaga } from '../store';

import Layout from '../components/Page/Layout';
import Box from '../components/Helpers/Box';
import Profile from '../components/Profile/Profile';

const IndexPage = props => (
  <Layout
    title="RecruitmentTask | Index"
    secured
    currentUrl={props.url.pathname}
  >
    <Box>
      <Profile />
      <div>This should be a <strong>secured</strong> route</div>
    </Box>
  </Layout>
);

IndexPage.propTypes = {
  url: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  }).isRequired
};

export default withReduxSaga(IndexPage);
