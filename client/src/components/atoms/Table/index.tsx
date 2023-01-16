import React from 'react';

import { formatDateTime24h } from '../../../utils/time';
import { exchangeData } from '../../types';
import { StyledTable, StyledTd } from './index.style';

const Table = ({ data }: exchangeData) => {
  return data && data.length > 0 ? (
    <StyledTable width="100%">
      <tr>
        <th>Date & Time</th>
        <th>Currency From </th>
        <th>Amount 1</th>
        <th>Currency To</th>
        <th>Amount 2</th>
        <th>Type</th>
      </tr>
      {data.map(
        ({ id, currency_from, currency_to, amount, type, rate, date }) => (
          <tr>
            <StyledTd key={id}>{formatDateTime24h(date)}</StyledTd>
            <StyledTd key={id}>{currency_from}</StyledTd>
            <StyledTd key={id}>{amount}</StyledTd>
            <StyledTd key={id}>{currency_to}</StyledTd>
            <StyledTd key={id}>{rate}</StyledTd>
            <StyledTd type={type} key={id}>
              {type}
            </StyledTd>
          </tr>
        ),
      )}
    </StyledTable>
  ) : (
    <></>
  );
};

export default Table;
