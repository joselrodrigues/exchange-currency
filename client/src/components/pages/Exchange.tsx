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
    socket.on('update', (data) => setLivePrices(data));
  }, [setLivePrices, socket]);

  return (
    <ExchangeContainer>
      <Toolbar data={livePrices} />
      <HistoryTable data={livePrices} />
    </ExchangeContainer>
  );
};

export default Exchange;
