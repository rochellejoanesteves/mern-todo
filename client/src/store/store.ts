import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import modalSlice from "./reducer/modalSlice";
import todoSlice from "./reducer/todoSlice";

const store = configureStore({
  reducer: {
    modalSlice: modalSlice,
    todoSlice: todoSlice
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
