import React, { ChangeEvent } from 'react';

import { Input as InputWrapper, Label, InputContainer } from './index.style';

interface InputProps {
  onTextChange?: (value: string | null) => void;
  disabled?: boolean;
  labelText?: string;
}
const Input = ({ labelText, onTextChange }: InputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!onTextChange) {
      return;
    }
    onTextChange(event.target.value);
  }
  return (
    <InputContainer>
      <Label>{labelText}</Label>
      <InputWrapper onChange={handleChange} />
    </InputContainer>
  );
};

export default Input;
