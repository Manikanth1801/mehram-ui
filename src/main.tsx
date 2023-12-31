import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import GlobalProvider from './context/globalProvider.tsx';
import './styles/main.scss'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <GlobalProvider>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </GlobalProvider>
)
