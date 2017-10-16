import React from 'react';
import merge from 'lodash/merge';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function currencyAmountToString(amount) {
  // https://stackoverflow.com/questions/2901102/how-to-print-a-number-with-commas-as-thousands-separators-in-javascript
  return "$" + amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class DealsTableRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { deal } = this.props;
    const { institution, dealType, dealSize, isPublished } = deal;
    const dealSizeString = currencyAmountToString(dealSize);
    const isPublishedString = capitalizeFirstLetter(isPublished.toString());

    return (
        <tr className="deals-trst-item">
          <td>{ institution }</td>
          <td>{ dealType }</td>
          <td>{ dealSizeString }</td>
          <td>{ isPublishedString }</td>
        </tr>
    )
  }
}

export default DealsTableRow;
