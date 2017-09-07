import React from 'react';
import { withReduxSaga } from '../store';

import Layout from '../components/Page/Layout';
import Box from '../components/Helpers/Box';

const IndexPage = props => (
  <Layout
    title="RecruitmentTask | Index"
    currentUrl={props.url.pathname}
  >
    <Box>
      <div>This should be a <strong>public</strong> route</div>
    </Box>
  </Layout>
);

export default withReduxSaga(IndexPage);
