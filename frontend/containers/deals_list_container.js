import { connect } from 'react-redux';
import DealsList from '../components/deals_list';

import { receiveDeals, receiveDeal } from '../actions/deals_actions';
import { allDeals } from '../reducers/selectors';

const mapStateToProps = state => ({
  deals: allDeals(state),
  state
});

const mapDispatchToProps = dispatch => ({
  receiveDeals: () => dispatch(receiveDeals()),
  receiveDeal: deal => dispatch(receiveDeal(deal))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DealsList);
