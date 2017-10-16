import React from 'react';
import { Provider } from 'react-redux';
import DealsTableContainer from '../containers/deals_table_container.js'

const Root = ({ store }) => (
  <Provider store={store}>
    <DealsTableContainer />
  </Provider>
);

export default Root;
