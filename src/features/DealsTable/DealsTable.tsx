import React from "react";
import { DealType, } from "../../types";
import DealsTableRow from "./DealsTableRow/DealsTableRowContainer";
import "./DealsTable.scss";
import SortIcon from "../../assets/SortIcon";

type DealsTableProps = {
  deals: DealType[];
};

const DealsTable = (props: DealsTableProps) => {
  const [sort, setSort] = React.useState<{ [key: string]: "up" | "down" | undefined }>({});

  const { deals } = props;

  const handleSortDirection = (k: string) => {
    let direction: 'up' | 'down' | undefined = 'up';
    if (sort[k] === 'up') {
      direction = 'down';
    } else if (sort[k] === 'down') {
      direction = undefined;
    }
    return direction;
  }

  const copyDeals = [...deals]
  const dealsTableRows = copyDeals.sort((a: any, b: any) => {
    const key = Object.keys(sort)[0];
    if (!key || !sort[key]) {
      return 0;
    } else if (sort[key] === 'up') {
      if(key === 'dealSize') return Number(a[key]) - Number(b[key]);
      return `${a[key]}`.localeCompare(`${b[key]}`);

    } else if (sort[key] === 'down') {
      if(key === 'dealSize') return Number(b[key]) - Number(a[key]);
      return `${b[key]}`.localeCompare(`${a[key]}`);
    }
    return 0;
  })
    .map((deal: any) => {
      return (
        <DealsTableRow key={deal.id} deal={deal} />
      )
    });

  const dealsTableHeaders =
    [
      { name: 'Institution', value: 'institution' },
      { name: 'Deal Type', value: 'dealType' },
      { name: 'Deal Size', value: 'dealSize' },
      { name: 'Is Published?', value: 'isPublished' },
    ]
      .map((v) => {
        return (
          <th
            key={v.value}
            className='DealsTable--headerCell'
            onClick={() => setSort({ [v.value]: handleSortDirection(v.value) })}
          >
            {v.name} <SortIcon direction={sort[v.value]} />
          </th>
        )
      });

  return (
    <div className="tile">
      <div className="tile--header">Deal Portfolio</div>
      <table className='DealsTable'>
        <thead>
          <tr>
            {dealsTableHeaders}
            <th className='DealsTable--headerCell'>Actions</th>
          </tr>
        </thead>
        <tbody>{dealsTableRows}</tbody>
      </table>
    </div>
  );
};

export default DealsTable;
