import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import App from './App.tsx'
import { HashRouter } from 'react-router-dom';
import StoreProvider from './components/storeProvider/storeProvider.tsx';
import store from './store/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  
  
  <React.StrictMode>
    <HashRouter>
  <StoreProvider store={store}>
    <App />
    </StoreProvider>
    </HashRouter>
  </React.StrictMode>
 
  
)
