import React from 'react';
import merge from 'lodash/merge';

class DealsListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deal } = this.props;
    const { institution, dealSize, dealType } = deal;

    return (
        <li className="deals-list-item">
          <div className="deal-header">
            <h2>{ institution }</h2>
            <h3>{ dealType } - { dealSize }</h3>
          </div>
        </li>
    )
  }
}

export default DealsListItem;
