import {createSlice} from "@reduxjs/toolkit";
import {
  addTodoHelper,
  removeTodoHelper,
  toggleCompleteHelper,
  filterTodosHelper,
} from "./helpers";

const initialState = {todos: [], todosCopy: []};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos = addTodoHelper(state.todos, action.payload);
      state.todosCopy = state.todos;
    },
    removeTodo: (state, action) => {
      state.todos = removeTodoHelper(state.todos, action.payload);
    },
    toggleComplete: (state, action) => {
      state.todos = toggleCompleteHelper(state.todos, action.payload);
      state.todosCopy = state.todos;
    },
    filterTodos: (state, action) => {
      state.todos = filterTodosHelper(state.todosCopy, action.payload);
    },
  },
});

export const {addTodo, removeTodo, toggleComplete, filterTodos} =
  todoSlice.actions;

export default todoSlice.reducer;
