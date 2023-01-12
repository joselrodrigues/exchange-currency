import React, { useEffect } from 'react';
import { io } from 'socket.io-client';

import Toolbar from '../molecules/Toolbar';

// I could't make socket work with internal docker port is like somenthing is happening with al the pulling
// const socket = io('http://localhost:4000');
const Exchange = () => {
  // useEffect(() => {
  //   console.log('useEffect se ejecutó', socket.connect);
  //   socket.on('update', (data) => {
  //     console.log('UPDATE se ejecutó', data);
  //   });
  // }, []);
  // console.log('que paso');
  return <Toolbar />;
};

export default Exchange;
