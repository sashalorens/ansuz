import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { BrowserRouter, Routes, Route } from 'react-router';

import MainPage from './MainPage';

import store from './shared/store/store.js';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Routes>
          <Route path="/" element={<MainPage />} />
        </Routes>
      </App>
    </BrowserRouter>
  </Provider>,
);
