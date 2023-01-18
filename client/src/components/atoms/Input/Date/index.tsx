import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PrimaryInput from '../Primary';

export interface DateInputProps {
  variant?: string;
  disabled?: boolean;
  labelText?: string;
  onChangeText?: (value: string | null) => void;
  onClick?: () => void;
}

const DateInput = ({ onChangeText, ...props }: DateInputProps) => {
  const [date, setDate] = useState<Date | null>();
  return (
    <DatePicker
      selected={date}
      onChange={(value) => {
        setDate(value);
        onChangeText &&
          onChangeText(
            `${value?.getFullYear()}-${value && value.getMonth() + 1}-${
              value && value?.getDate()
            }`,
          );
      }}
      customInput={<PrimaryInput {...props} />}
    />
  );
};

export default DateInput;
