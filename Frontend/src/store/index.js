import { configureStore } from "@reduxjs/toolkit";
// By default exporting `countSlice.reducer` in `countSlice.js`, 
// we can now import it directly as `countReducer`.
import countReducer from './countSlice';

// The store is now configured with the correct reducer object.
export const store = configureStore({
  reducer: {
    counter: countReducer,
  },
});
