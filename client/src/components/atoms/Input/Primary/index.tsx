import { ChangeEvent } from 'react';

import { Input as InputWrapper, Label, InputContainer } from '../index.style';

export interface InputProps {
  onTextChange?: (value: string | null) => void;
  disabled?: boolean;
  labelText?: string;
  onClick?: () => void;
  value?: string;
  variant?: string;
}
const PrimaryInput = ({ labelText, onTextChange, ...props }: InputProps) => {
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (!onTextChange) {
      return;
    }
    onTextChange(event.target.value);
  }
  return (
    <InputContainer>
      <Label>{labelText}</Label>
      <InputWrapper onChange={handleChange} {...props} />
    </InputContainer>
  );
};

export default PrimaryInput;
