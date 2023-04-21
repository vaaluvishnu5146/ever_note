import { configureStore } from "@reduxjs/toolkit";
import TaskReducer from "./Reducers/Tasks.reducer";
import RestaurantReducer from "./Reducers/Restaurant.reducer";
/**
 * configureStore will accepts object and root reducer inside it
 */
export default configureStore({
  reducer: {
    tasks: TaskReducer,
    restaurant: RestaurantReducer,
  },
});
