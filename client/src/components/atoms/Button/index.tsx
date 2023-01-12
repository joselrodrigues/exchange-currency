import React from 'react';

import PrimaryButton from './Primary';

export interface ButtomProps {
  variant?: string;
  text: string;
  onClick?: () => void;
}

const Button = ({ variant, ...props }: ButtomProps) => {
  switch (variant) {
    case 'outline':
    default:
      return <PrimaryButton {...props} />;
  }
};

export default Button;
