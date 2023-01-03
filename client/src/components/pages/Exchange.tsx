import React from 'react';

import { Dropdown } from '../atoms/Dropdown';

const Exchange = () => {
  return (
    <div>
      <div>
        <Dropdown
          disabled
          options={[
            { value: 'Hola', image: './bitcoin.png', text: 'Bitcoin' },
            {
              value: 'Hola2ddddd',
              image: './logo192.png',
              text: 'Bitcoin2ssss',
            },
          ]}
        />
      </div>
      <div>
        <Dropdown
          options={[
            { value: 'Hola', image: './bitcoin.png', text: 'Bitcoin' },
            {
              value: 'Hola2ddddd',
              image: './logo192.png',
              text: 'Bitcoin2ssss',
            },
          ]}
        />
      </div>
    </div>
  );
};

export default Exchange;
