import Button from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import { HistoryFilterContainer, MarginWrapper } from './index.style';

const HistoryFilter = () => {
  return (
    <HistoryFilterContainer>
      <MarginWrapper>
        <Input variant="date" labelText="From date" />
      </MarginWrapper>
      <MarginWrapper>
        <Input variant="date" labelText="To date" />
      </MarginWrapper>
      <MarginWrapper>
        <Dropdown
          labelText="Type"
          options={[
            { value: 'all', image: '', text: 'All' },
            { value: 'live', image: '', text: 'Live Price' },
            { value: 'exchange', image: '', text: 'Exchanged' },
          ]}
        />
      </MarginWrapper>
      <Button variant="outline" text="Filter" />
    </HistoryFilterContainer>
  );
};

export default HistoryFilter;
