import { useContext, useEffect, useState } from 'react';

import { ExchangeContext } from '../../../contexts/exchange';
import { Context } from '../../../contexts/websocket';
import Table from '../../atoms/Table';
import HistoryFilter from '../../molecules/HistoryFilter';
import { exchangeDataWithPagination } from '../../types';
import {
  HistoryFilterWrapper,
  HistoryTableContainer,
  Title,
} from './index.style';

const HistoryTable = () => {
  return (
    <HistoryTableContainer>
      <Title>History</Title>
      <HistoryFilterWrapper>
        <HistoryFilter />
      </HistoryFilterWrapper>
      {/* <Table data={history?.items} /> */}
      <Table />
    </HistoryTableContainer>
  );
};

export default HistoryTable;
