import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
  name: "Counter",
  initialState: {
    value: 0,
  },
  reducers: {
    tick: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      if (action.payload === "i") {
        state.value += 1;
      } else {
        state.value -= 1;
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { tick } = CounterSlice.actions;
export default CounterSlice.reducer;
