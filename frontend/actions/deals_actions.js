export const RECEIVE_DEALS = 'RECEIVE_DEALS';
export const RECEIVE_DEAL = 'RECEIVE_DEAL';

export const receiveDeals = deals => ({
  type: RECEIVE_DEALS,
  deals
});

export const receiveDeal = deal => ({
  type: RECEIVE_DEAL,
  deal
});
