import { createContext, PropsWithChildren, useState } from 'react';

const defaultFilter = {
  limit: 5,
  page: 1,
  route: '/exchange',
  type: null,
  startDate: '',
  endDate: '',
};

export const ExchangeContext = createContext<{
  exchangeFilter: ExchangeFilterValues;
  setExchangeFilter: React.Dispatch<React.SetStateAction<ExchangeFilterValues>>;
}>({
  exchangeFilter: defaultFilter,
  setExchangeFilter: () => {},
});

interface ExchangeFilterValues {
  limit: number;
  page: number;
  route: string;
  type: string | null;
  startDate: string | null;
  endDate: string | null;
}

export function ExchangeProvider({ children }: PropsWithChildren) {
  const [exchangeFilter, setExchangeFilter] =
    useState<ExchangeFilterValues>(defaultFilter);

  return (
    <ExchangeContext.Provider value={{ exchangeFilter, setExchangeFilter }}>
      {children}
    </ExchangeContext.Provider>
  );
}

const defaultMetaData = {
  totalItems: 0,
  itemCount: 0,
  itemsPerPage: 5,
  totalPages: 1,
  currentPage: 1,
};

export const ExchangeMetaDataContext = createContext<{
  exchangeMetaData: ExchangeMetaData;
  setExchangeMetaData: React.Dispatch<React.SetStateAction<ExchangeMetaData>>;
}>({
  exchangeMetaData: defaultMetaData,
  setExchangeMetaData: () => {},
});

interface ExchangeMetaData {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export function ExchangeMetaDataProvider({ children }: PropsWithChildren) {
  const [exchangeMetaData, setExchangeMetaData] =
    useState<ExchangeMetaData>(defaultMetaData);

  return (
    <ExchangeMetaDataContext.Provider
      value={{ exchangeMetaData, setExchangeMetaData }}
    >
      {children}
    </ExchangeMetaDataContext.Provider>
  );
}
