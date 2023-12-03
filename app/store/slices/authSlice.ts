import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  type: "login" | "signin";
  login: string;
  password: string;
}

export interface TypeOfIn {
  type: "login" | "signin";
}

const initialState: AuthState = {
  type: "login",
  login: "",
  password: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setTypeOfIn: (state, action: PayloadAction<TypeOfIn>) => {
      state.type = action.payload.type;
    },
    setLogin: (state, action: PayloadAction<string>) => {
      state.login = action.payload;
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload;
    },
  },
});

export const { setTypeOfIn, setPassword, setLogin } = authSlice.actions;

export default authSlice.reducer;
