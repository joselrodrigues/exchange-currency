import { useContext, useEffect, useState } from 'react';

import { ExchangeContext } from '../../../contexts/exchange';
import { Context } from '../../../contexts/websocket';
import { formatDateTime24h } from '../../../utils/time';
import { exchangeData } from '../../types';
import { StyledTable, StyledTd } from './index.style';

const Table = () => {
  const [data, setData] = useState<exchangeData[]>();
  const { exchangeFilter } = useContext(ExchangeContext);
  const socket = useContext(Context);

  useEffect(() => {
    socket.on('update', () => socket.emit('getExchangeData', exchangeFilter));
    socket.on('exchangeData', (data) => setData(data.items));
    socket.emit('getExchangeData', exchangeFilter);
    return () => {
      socket.off('connect');
      socket.off('exchangeData');
      socket.off('update');
    };
  }, [setData, socket, exchangeFilter]);

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
