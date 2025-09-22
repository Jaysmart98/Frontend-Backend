import { createSlice } from '@reduxjs/toolkit';

// A slice of the Redux store for the counter.
export const countSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // Action to increment the counter's value.
    increment: (state) => {
      state.value += 1;
    },
    // Action to decrement the counter's value.
    decrement: (state) => {
      state.value -= 1;
    },
    // Action to increment the value by a specific amount.
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// The `configureStore` function expects a reducer, so we export it as the default.
export const { increment, decrement }
 = countSlice.actions
export default countSlice.reducer;
