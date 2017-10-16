import React from 'react';
import { Provider } from 'react-redux';
import DealsListContainer from '../containers/deals_list_container.js'

const Root = ({ store }) => (
  <Provider store={store}>
    <DealsListContainer />
  </Provider>
);

export default Root;
