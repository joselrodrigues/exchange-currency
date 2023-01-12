import React from 'react';

import { ButtomProps } from '..';
import { PrimaryButton as PrimaryStyledButton } from './index.style';

const PrimaryButton = ({ text, ...props }: ButtomProps) => {
  return <PrimaryStyledButton {...props}>{text}</PrimaryStyledButton>;
};

export default PrimaryButton;
