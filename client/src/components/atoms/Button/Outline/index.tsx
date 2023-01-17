import { ButtomProps } from '..';
import { OutlineStyledButton } from './index.style';

const OutlineButton = ({ text, ...props }: ButtomProps) => {
  return <OutlineStyledButton {...props}>{text}</OutlineStyledButton>;
};

export default OutlineButton;
