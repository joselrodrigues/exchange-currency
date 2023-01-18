import DateInput from './Date';
import PrimaryInput from './Primary';

export interface InputProps {
  variant?: string;
  disabled?: boolean;
  labelText?: string;
  onClick?: () => void;
  onChangeText?: (value: string | null) => void;
}

const Input = (props: InputProps) => {
  const { variant } = props;
  switch (variant) {
    case 'date':
      return <DateInput {...props} />;
    default:
      return <PrimaryInput {...props} />;
  }
};

export default Input;
