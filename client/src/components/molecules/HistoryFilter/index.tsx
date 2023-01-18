import { useCallback, useContext, useState } from 'react';

import { ExchangeContext } from '../../../contexts/exchange';
import Button from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import { HistoryFilterContainer, MarginWrapper } from './index.style';

const HistoryFilter = () => {
  const [filter, setFilter] = useState<{
    startDate: string | null;
    endDate: string | null;
    type: string | null;
  }>({
    startDate: '',
    endDate: '',
    type: '',
  });
  const { setExchangeFilter } = useContext(ExchangeContext);
  return (
    <HistoryFilterContainer>
      <MarginWrapper>
        <Input
          variant="date"
          labelText="From date"
          onChangeText={(value) =>
            setFilter((prev) => ({ ...prev, startDate: value }))
          }
        />
      </MarginWrapper>
      <MarginWrapper>
        <Input
          variant="date"
          labelText="To date"
          onChangeText={(value) =>
            setFilter((prev) => ({ ...prev, endDate: value }))
          }
        />
      </MarginWrapper>
      <MarginWrapper>
        <Dropdown
          labelText="Type"
          options={[
            { value: '%', image: '', text: 'All' },
            { value: 'Live Price', image: '', text: 'Live Price' },
            { value: 'Exchanged', image: '', text: 'Exchanged' },
          ]}
          onSelection={(value) =>
            setFilter((prev) => ({ ...prev, type: value }))
          }
        />
      </MarginWrapper>
      <Button
        variant="outline"
        text="Filter"
        onClick={() => setExchangeFilter((prev) => ({ ...prev, ...filter }))}
      />
    </HistoryFilterContainer>
  );
};

export default HistoryFilter;
