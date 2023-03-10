import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/pages/Exchange';
import {
  ExchangeMetaDataProvider,
  ExchangeProvider,
} from './contexts/exchange';
import { socket, WebsocketProvider } from './contexts/websocket';
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <WebsocketProvider value={socket}>
      <ExchangeProvider>
        <ExchangeMetaDataProvider>
          <App />
        </ExchangeMetaDataProvider>
      </ExchangeProvider>
    </WebsocketProvider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
