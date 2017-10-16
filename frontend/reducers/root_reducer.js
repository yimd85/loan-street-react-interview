import { combineReducers } from 'redux';

import dealsReducer from './deals_reducer';

const RootReducer = combineReducers({
  deals: dealsReducer
});

export default RootReducer;
