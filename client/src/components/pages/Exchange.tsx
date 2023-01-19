import { useContext, useEffect, useState } from 'react';

import { Context } from '../../contexts/websocket';
import Toolbar from '../molecules/Toolbar';
import HistoryTable from '../organism/HistoryTable';
import { ExchangeContainer } from './Exchange.style';

const Exchange = () => {
  const socket = useContext(Context);
  const [livePrices, setLivePrices] = useState();
  useEffect(() => {
    socket.emit('updateLiveCurrencies');
    return () => {
      socket.off('connect');
      socket.off('exchangeData');
      socket.off('update');
      socket.off('updateLiveCurrencies');
    };
  }, [socket]);
  return (
    <ExchangeContainer>
      <Toolbar />
      <HistoryTable />
    </ExchangeContainer>
  );
};

export default Exchange;
