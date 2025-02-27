import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  history: false,
};

const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggle: (state, { payload }) => ({
      ...state,
      [payload]: !state[payload],
    }),
  },
});

const { actions, reducer } = UISlice;
export const { toggle } = actions;
export default reducer;
