import React from 'react';
import { createRoot } from 'react-dom/client';
import './components/Header'; // Import Header component
import './components/Hem';
import './components/OmMig';
import './components/CV';
import './components/Portfölj';
import './components/KontaktaMig';
import './index.css';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
