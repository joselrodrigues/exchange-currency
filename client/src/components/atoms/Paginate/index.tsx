import { useContext } from 'react';

import {
  ExchangeContext,
  ExchangeMetaDataContext,
} from '../../../contexts/exchange';
import { Pagination } from './index.style';

const Paginate = () => {
  const { setExchangeFilter } = useContext(ExchangeContext);
  const { exchangeMetaData } = useContext(ExchangeMetaDataContext);
  const handlePageClick = (event: any) => {
    const page = event.selected + 1;
    setExchangeFilter((prev) => ({ ...prev, page }));
  };
  return exchangeMetaData.totalPages === 1 ? (
    <></>
  ) : (
    <Pagination
      nextLabel="Next"
      breakLabel="..."
      pageCount={exchangeMetaData.totalPages}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      onPageChange={handlePageClick}
    />
  );
};

export default Paginate;
