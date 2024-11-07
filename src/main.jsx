import React from 'react';
import ReactDOM from 'react-dom/client'; // make sure you are using the right method for React 18

import './App.css'; // Any global CSS you want to include
import App from './App.jsx'; // Import your main app component

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
