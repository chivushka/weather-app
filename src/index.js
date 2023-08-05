import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {StoreContextProvider} from "./context/storeContex";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <StoreContextProvider>
          <App />
      </StoreContextProvider>
  </React.StrictMode>
);


