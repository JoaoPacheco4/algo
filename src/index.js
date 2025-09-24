import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

// O BrowserRouter envolve toda a aplicação para habilitar rotas.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<React.StrictMode>
<BrowserRouter>
<App />
</BrowserRouter>
</React.StrictMode>
);