import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';

import { Bugfender } from '@bugfender/sdk';

Bugfender.init({
    appKey: 'sOHsa19oFfWFjpZF7TjkcRv72T0yACcd',
    // apiURL: 'https://api.bugfender.com',
    // baseURL: 'https://dashboard.bugfender.com',
    // overrideConsoleMethods: true,
    // printToConsole: true,
    // registerErrorHandler: true,
    // logBrowserEvents: true,
    // logUIEvents: true,
    // version: '',
    // build: '',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ToastContainer /> 
  </React.StrictMode>,
)
