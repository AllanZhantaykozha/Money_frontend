import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalSlice";
import searchReducer from "./slices/searchSlice";
import authReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    modal: modalReducer,
    search: searchReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
