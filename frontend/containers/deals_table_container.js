import { connect } from 'react-redux';
import DealsTable from '../components/deals_table';

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
)(DealsTable);
