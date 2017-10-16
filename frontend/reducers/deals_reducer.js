import { RECEIVE_DEALS,
         RECEIVE_DEAL } from '../actions/deals_actions';
import merge from 'lodash/merge';

const initialState = {
  1: {
    id: 1,
    institution: 'LS Credit Union',
    dealSize: 1000000,
    dealType: 'Consumer Auto',
    isPublished: true,
  },
  2: {
    id: 2,
    institution: 'LS Credit Union',
    dealSize: 5000000,
    dealType: 'Real Estate',
    isPublished: false,
  },
};

const dealsReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type){
    case RECEIVE_DEALS:
      nextState = {};
      action.deals.forEach(deal => nextState[deal.id] = deal);
      return nextState;
    case RECEIVE_DEAL:
      const newDeal = {[action.deal.id]: action.deal};
      return merge({}, state, newDeal);
    default:
      return state;
  }
};

export default dealsReducer;
