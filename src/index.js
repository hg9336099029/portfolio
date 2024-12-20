import React from 'react';
import ReactDOM from 'react-dom/client'; // Updated import for React 18
import App from './App';
import { ThemeProvider } from './context';

// React 18 uses createRoot instead of render
const root = ReactDOM.createRoot(document.getElementById('root')); // Create the root
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
