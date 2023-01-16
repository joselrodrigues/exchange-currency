import { createContext } from 'react';
import { io, Socket } from 'socket.io-client';

// I could't make socket work with internal docker port is like somenthing is happening with al the pulling
export const socket = io('http://localhost:4000');
export const Context = createContext<Socket>(socket);
export const WebsocketProvider = Context.Provider;
