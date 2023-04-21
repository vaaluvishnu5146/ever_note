import { createSlice } from "@reduxjs/toolkit";

const RestaurantSlice = createSlice({
  name: "restaurant",
  /**
   * BLUE PRINT OF DATA
   */
  initialState: {
    data: [],
    count: 0,
    isFetching: false,
  },
  reducers: {
    saveRestuarnts: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    filterRestaurants: (state, action) => {
      return state.data.filter((d) => d.restuarntCuisine === action.payload);
    },
  },
});

export const { saveRestuarnts, filterRestaurants } = RestaurantSlice.actions;

export default RestaurantSlice.reducer;
