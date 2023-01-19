import Paginate from '../../atoms/Paginate';
import Table from '../../atoms/Table';
import HistoryFilter from '../../molecules/HistoryFilter';
import {
  HistoryFilterWrapper,
  HistoryTableContainer,
  PaginateContainer,
  Title,
} from './index.style';

const HistoryTable = () => {
  return (
    <HistoryTableContainer>
      <Title>History</Title>
      <HistoryFilterWrapper>
        <HistoryFilter />
      </HistoryFilterWrapper>
      <Table />
      <PaginateContainer>
        <Paginate />
      </PaginateContainer>
    </HistoryTableContainer>
  );
};

export default HistoryTable;
