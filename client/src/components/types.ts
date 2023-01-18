export interface exchangeData {
  amount: number;
  currency_from: string;
  currency_to: string;
  date: string;
  id: number;
  rate: number;
  type: string;
}

export interface exchangeDataWithPagination {
  items: exchangeData[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
  links: {
    first: string;
    previous: string;
    next: string;
    last: string;
  };
}
