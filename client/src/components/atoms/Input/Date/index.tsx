import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import PrimaryInput from '../Primary';

export interface DateInputProps {
  variant?: string;
  disabled?: boolean;
  labelText?: string;
  onClick?: () => void;
}

const DateInput = (props: DateInputProps) => {
  const [date, setDate] = useState<Date | null>();
  return (
    <DatePicker
      selected={date}
      onChange={(value) => setDate(value)}
      customInput={<PrimaryInput {...props} />}
    />
  );
};

export default DateInput;
