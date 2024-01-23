import React from 'react';
import ReactDOM from 'react-dom/client';
import ScreenClock from './screen/ScreenClock';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <main style={{width: '100vw', height: '100vh'}}>
      <ScreenClock />
    </main>
  </React.StrictMode>
);
