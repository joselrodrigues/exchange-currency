import React, { useState, PropsWithChildren } from 'react';

import {
  Option,
  DropdownContainer,
  Button,
  Select,
  Image,
  DownArrowImage,
  Text,
} from './index.style';

interface SelectProps {
  options?: { value: string; image: string; text: string }[];
  onSelection?: (value: string | null) => void;
  disabled?: boolean;
}
export const Dropdown = ({ options, onSelection, disabled }: SelectProps) => {
  const [drop, setDrop] = useState(false);
  const [select, setSelect] = useState(options && options[0]);

  function handleSelection(
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
  ) {
    const value = event.currentTarget.getAttribute('value');
    const selected = options?.find((option) => option.value === value);
    setSelect(selected && selected);
    setDrop((prev) => !prev);
    onSelection && onSelection(value);
  }

  return (
    <DropdownContainer isVisible={drop}>
      <Button
        className="link"
        disabled={disabled}
        onClick={() => setDrop((prev) => !prev)}
      >
        <Image src={select?.image} alt={select?.value} />
        <Text>{select?.text}</Text>
        <DownArrowImage src="/downArrow.png" alt={select?.value} />
      </Button>
      <Select className="select">
        {options &&
          options.map(({ value, image, text }) => (
            <Option value={value} onClick={handleSelection}>
              <Image src={image} alt={value} />
              {text}
            </Option>
          ))}
      </Select>
    </DropdownContainer>
  );
};
