import React, { useEffect, useState } from 'react';

import {
  Option,
  DropdownContainer,
  Button,
  Select,
  Image,
  DownArrowImage,
  Text,
  Label,
} from './index.style';

interface SelectProps {
  options?: { value: string; image: string; text: string }[];
  onSelection?: (value: string | null) => void;
  disabled?: boolean;
  labelText?: string;
}
export const Dropdown = ({
  options,
  onSelection,
  disabled,
  labelText,
}: SelectProps) => {
  const [drop, setDrop] = useState(false);
  const [select, setSelect] = useState(
    options && { value: '', image: '', text: 'Select' },
  );

  function handleSelection(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const value = event.currentTarget.getAttribute('value');
    const selected = options?.find((option) => option.value === value);
    setSelect(selected && selected);
    setDrop((prev) => !prev);
    onSelection && onSelection(value);
  }
  useEffect(() => {
    const optionExist = options?.find(
      (option) => option.value === select?.value,
    );
    if (!optionExist) {
      setSelect({ value: '', image: '', text: 'Select' });
      onSelection && onSelection('');
    }
  }, [options, select?.value, onSelection]);
  return (
    <DropdownContainer isVisible={drop}>
      <Label>{labelText}</Label>
      <Button
        className="link"
        disabled={disabled}
        onClick={() => setDrop((prev) => !prev)}
      >
        {select?.image && <Image src={select?.image} alt={select?.value} />}
        <Text>{select?.text}</Text>
        <DownArrowImage src="/downArrow.png" alt={select?.value} />
      </Button>
      <Select className="select">
        {options &&
          options.map(({ value, image, text }) => (
            <Option key={value} value={value} onClick={handleSelection}>
              {image && <Image src={image} alt={value} />}
              {text}
            </Option>
          ))}
      </Select>
    </DropdownContainer>
  );
};
