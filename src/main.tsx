import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MainContext } from '../Context/MainContext.tsx';
import { Provider } from 'react-redux';
import { store } from '../redux/store.ts';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <MainContext>
          <App />
        </MainContext>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
);
