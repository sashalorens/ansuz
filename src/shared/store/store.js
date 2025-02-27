import { configureStore } from '@reduxjs/toolkit';

import UIState from './ui';

const store = configureStore({
  reducer: {
    UIState,
  },
});

export default store;
