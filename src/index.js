import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './i18n';
import App from './App';

import './assets/css/tailwind.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

ReactDOM.render(
  <Suspense fallback='loading'>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Suspense>,
  document.getElementById('root')
);
