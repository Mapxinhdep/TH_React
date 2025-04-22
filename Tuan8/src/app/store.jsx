import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../Redux/counterSlice';
import todoReducer from '../ToDoApp/ToDoSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todoReducer,
  },
});
