import { connect } from 'react-redux';
import DealsTable from '../components/DealsTable';

const mapStateToProps = state => {
  const { deals } = state;
  return {
    deals
  };
};

export default connect(mapStateToProps)(DealsTable);
