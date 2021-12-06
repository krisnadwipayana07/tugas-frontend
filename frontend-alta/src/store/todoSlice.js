import { createSlice } from "@reduxjs/toolkit";

import { todoData } from "../pages/todo/ToDoData";

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: todoData,
  },
  reducers: {
    hapusTodo: (state, action) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    tambahDanEditTodo: (state, action) => {
      let { id } = action.payload;
      let data = state.todos.find((item) => item.id === id);
      if (data) {
        state.todos = state.todos.map((item) =>
          item.id === id ? action.payload : item
        );
      } else {
        let lastId = state.todos.length;
        let newData = {
          ...action.payload,
          id: state.todos[lastId - 1].id + 1,
        };
        state.todos = [...state.todos, newData];
      }
    },
    handleCheck: (state, action) => {
      state.todos = state.todos.map((item) =>
        item.id === action.payload
          ? { ...item, completed: !item.completed }
          : item
      );
    },
  },
});

export const { hapusTodo, tambahDanEditTodo, handleCheck } = todoSlice.actions;
export default todoSlice.reducer;
