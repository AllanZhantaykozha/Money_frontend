import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ModalState {
  isOpen: boolean;
  sum: number;
  title: string;
  category: string;
  type: "income" | "expense";
}

const initialState: ModalState = {
  isOpen: false,
  type: "income",
  sum: 0,
  title: "",
  category: "",
};

interface TypeOfCreate {
  type: "income" | "expense";
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    setOpen: (state) => {
      state.isOpen = true;
    },
    setClose: (state) => {
      state.isOpen = false;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setSum: (state, action: PayloadAction<number>) => {
      state.sum = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setTypeOfCreate: (state, action: PayloadAction<TypeOfCreate>) => {
      state.type = action.payload.type;
    },
  },
});

export const {
  setOpen,
  setClose,
  setTitle,
  setCategory,
  setSum,
  setTypeOfCreate,
} = modalSlice.actions;

export default modalSlice.reducer;
