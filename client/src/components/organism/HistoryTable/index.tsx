import Table from '../../atoms/Table';
import { exchangeData } from '../../types';
import { HistoryTableContainer } from './index.style';

const HistoryTable = ({ data }: exchangeData) => {
  return (
    <HistoryTableContainer>
      <Table data={data} />
    </HistoryTableContainer>
  );
};

export default HistoryTable;
