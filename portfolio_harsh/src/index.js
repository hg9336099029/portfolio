// Entry point of the application
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App'; // Assuming there is an App component in the components directory
import './styles/index.css'; // Assuming there is a global stylesheet

// Render the main application component
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Ensure there is a div with id 'root' in public/index.html
);