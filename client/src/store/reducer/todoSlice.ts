import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      _id: "",
      name: "",
    },
  ],
  activeTodo: {
    _id: "",
    name: "",
  },
};

const todoSlice = createSlice({
  name: "todoSlice",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.todos.push(action.payload);
    },
    setActiveTodo: (state, action) => {
      state.activeTodo = action.payload;
    },
    resetTodo: () => initialState,
  },
});

export const { setData, setActiveTodo, resetTodo } = todoSlice.actions;
export default todoSlice.reducer;
