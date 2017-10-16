import React from 'react';

import DealsTableRow from './deals_table_row';
import DealForm from './deal_form';

class DealsList extends React.Component {

  render() {
    const { deals, receiveDeal } = this.props;
    const dealsTableRows = deals.map(deal => (
        <DealsTableRow
          key={`deals-table-row${deal.id}`}
          deal={deal}
          receiveDeal={ receiveDeal } />
      )
    );

    return(
      <div>
        <table className="deals-table">
          <thead className="deals-table-header">
            <tr>
              <th>Institution</th>
              <th>Deal Type</th>
              <th>Deal Size</th>
              <th>Is Published?</th>
            </tr>
          </thead>
          <tbody>
            { dealsTableRows }
          </tbody>
        </table>
        <DealForm receiveDeal={ receiveDeal }/>
      </div>
    );
  }
}

export default DealsList;
