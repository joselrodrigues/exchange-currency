import React from 'react';

import { formatDateTime24h } from '../../../utils/time';
import { exchangeData } from '../../types';
import { StyledTable, StyledTd } from './index.style';

const Table = ({ data }: exchangeData) => {
  return data && data.length > 0 ? (
    <StyledTable width="100%">
      <thead>
        <tr>
          <th>Date & Time</th>
          <th>Currency From </th>
          <th>Amount 1</th>
          <th>Currency To</th>
          <th>Amount 2</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        {data.map(
          ({ id, currency_from, currency_to, amount, type, rate, date }) => (
            <tr key={id}>
              <StyledTd>{formatDateTime24h(date)}</StyledTd>
              <StyledTd>{currency_from}</StyledTd>
              <StyledTd>{amount}</StyledTd>
              <StyledTd>{currency_to}</StyledTd>
              <StyledTd>{rate}</StyledTd>
              <StyledTd type={type}>{type}</StyledTd>
            </tr>
          ),
        )}
      </tbody>
    </StyledTable>
  ) : (
    <></>
  );
};

export default Table;
