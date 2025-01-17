import React from "react";
import { DealType } from "../../../types";
import "./DealsTableRow.scss";

const currencyAmountToString = (amount: string) => {
  return `$${amount.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`;
};

type DealsTableRowProps = {
  deal: DealType;
  onTogglePublish: (deal: DealType) => void;
  onDeleteDeal: (deal: DealType) => void;
};

const DealsTableRow = (props: DealsTableRowProps) => {
  const {
    deal,
    onTogglePublish,
    onDeleteDeal,
  } = props;
  return (
    <tr className='DealsTableRow'>
      <td className='DealsTableRow--cell'>{deal.institution}</td>
      <td className='DealsTableRow--cell'>{deal.dealType}</td>
      <td className='DealsTableRow--cell'>
        {currencyAmountToString(deal.dealSize)}
      </td>
      <td className='DealsTableRow--cell'>{deal.isPublished ? "Yes" : "No"}</td>
      <td className='DealsTableRow--cell'>
        <div className='DealsTableRow--buttons'>
          <button
            onClick={() => onTogglePublish(deal)}
            className='DealsTableRow--button'
          >
            <span role="img" aria-label="published-state">
              {deal.isPublished ? '👍' : '👎'}
            </span>
          </button>
          <button
            onClick={() => onDeleteDeal(deal)}
            className='DealsTableRow--button'
          >
            <span role="img" aria-label="delete">
              🗑️
            </span>
          </button>
        </div>
      </td>
    </tr>
  );
};

export default DealsTableRow;
