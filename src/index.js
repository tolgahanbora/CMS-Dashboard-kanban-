import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { registerLicense } from '@syncfusion/ej2-base';
import App from './App';
import { ContextProvider } from './contexts/ContextProvider';

registerLicense(process.env.REACT_APP_SYNCFUSION_LICENSE);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // eslint-disable-next-line no-multiple-empty-lines

  <ContextProvider>
    <App />
  </ContextProvider>,

);

