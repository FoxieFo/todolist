import { configureStore, createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, title: "prepare for the interview", completed: true },
    { id: 2, title: "water plants", completed: true },
    { id: 3, title: "buy groceries", completed: false },
    { id: 4, title: "read a book", completed: true },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: state.length + 1,
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo: (state, action) => {
      const todo = state.find((item) => item.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    deleteTodo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;

const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});

export default store;