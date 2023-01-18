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
