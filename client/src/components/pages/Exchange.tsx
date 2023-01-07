import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

import { Dropdown } from '../atoms/Dropdown';

// I could't make socket work with internal docker port is like somenthing is happening with al the pulling
const socket = io('http://localhost:4000');
const Exchange = () => {
  useEffect(() => {
    console.log('useEffect se ejecutó', socket.connect);
    socket.on('update', (data) => {
      console.log('UPDATE se ejecutó', data);
    });
  }, []);
  console.log('que paso');
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
