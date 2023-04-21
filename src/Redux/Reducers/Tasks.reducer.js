import { createSlice } from "@reduxjs/toolkit";

const TaskSlice = createSlice({
  name: "task",
  /**
   * BLUE PRINT OF DATA
   */
  initialState: {
    tasks: [],
  },
  reducers: {
    saveTodo: (state, action) => {
      state.tasks = [...state.tasks, action.payload];
    },
  },
});

export const { saveTodo } = TaskSlice.actions;

export default TaskSlice.reducer;
