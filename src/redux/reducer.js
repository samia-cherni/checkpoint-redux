import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTaskReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTasks: (state, action) => {
      state.push(action.payload);
      return state;
    },
    updateTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload.id) {
          return {
            ...task,
            description: action.payload.description,
          };
        }
        return task;
      });
    },
    removeTasks: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    completeTasks: (state, action) => {
      return state.map((task) => {
        if (task.id === action.payload) {
          return {
            ...task,
            isDone: true,
          };
        }
        return task;
      });
    },
  },
});

export const { addTasks,completeTasks,removeTasks,updateTasks } = addTaskReducer.actions;
export const reducer = addTaskReducer.reducer;
