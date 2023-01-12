import { useEffect, useState } from 'react';

import Button from '../../atoms/Button';
import { Dropdown } from '../../atoms/Dropdown';
import Input from '../../atoms/Input';
import { currencyOptions } from './constants';
import {
  EqualSign,
  Title,
  ToolbarContainer,
  ToolbarWrapper,
} from './index.style';

const Toolbar = () => {
  const [currencyFrom, setCurrencyFrom] = useState<string | null>('');
  const [currenciesTo, setCurrenciesTo] = useState(currencyOptions);

  useEffect(() => {
    setCurrenciesTo(
      currencyOptions.filter((currency) => {
        return currency.value !== currencyFrom;
      }),
    );
  }, [currencyFrom]);

  return (
    <ToolbarContainer>
      <Title>Exchange</Title>
      <ToolbarWrapper>
        <Dropdown
          labelText="Currency from"
          options={currencyOptions}
          onSelection={(value) => {
            setCurrencyFrom(value);
          }}
        />
        <Input labelText="Amount" />
        <EqualSign>{'='}</EqualSign>
        <Dropdown labelText="Currency to" options={currenciesTo} />
        <Input labelText="Amount" />
        <Button text="Save" />
      </ToolbarWrapper>
    </ToolbarContainer>
  );
};

export default Toolbar;
