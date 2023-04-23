import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "./Reducers/Counter.reducer";

export default configureStore({
  reducer: {
    // REGISTER ALL OUR REDUCERS HERE
    counter: CounterSlice,
  },
});
