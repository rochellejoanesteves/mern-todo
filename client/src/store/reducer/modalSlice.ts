import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  visible: false,
  title: "",
};

const modalSlice = createSlice({
  name: "modalSlice",
  initialState,
  reducers: {
    setVisible: (state, action) => {
      state.visible = action.payload;
    },
    setTitle: (state, action) => {
      state.title = action.payload;
    },
    resetModal: () => initialState,
  },
});

export const { setVisible, setTitle, resetModal } = modalSlice.actions;
export default modalSlice.reducer;
