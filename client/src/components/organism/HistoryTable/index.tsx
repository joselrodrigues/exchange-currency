import Table from '../../atoms/Table';
import HistoryFilter from '../../molecules/HistoryFilter';
import { exchangeData } from '../../types';
import {
  HistoryFilterWrapper,
  HistoryTableContainer,
  Title,
} from './index.style';

const HistoryTable = ({ data }: exchangeData) => {
  return (
    <HistoryTableContainer>
      <Title>History</Title>
      <HistoryFilterWrapper>
        <HistoryFilter />
      </HistoryFilterWrapper>
      <Table data={data} />
    </HistoryTableContainer>
  );
};

export default HistoryTable;
