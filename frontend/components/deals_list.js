import React from 'react';

import DealsListItem from './deals_list_item';

class DealsList extends React.Component {

  render() {
    const { deals, receiveDeal } = this.props;
    const dealsListItems = deals.map(deal => (
        <DealsListItem
          key={`deals-list-item${deal.id}`}
          deal={deal}
          receiveDeal={ receiveDeal } />
      )
    );

    return(
      <div>
        <ul className="deals-list">
          { dealsListItems }
        </ul>
      </div>
    );
  }
}

export default DealsList;
