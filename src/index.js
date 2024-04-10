import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Modal from 'react-modal';

// Set the app element for the modal outside of the root render
Modal.setAppElement("#root");

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
