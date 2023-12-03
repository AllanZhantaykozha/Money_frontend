"use client";

import React, { useState } from "react";
import ButtonIncome from "./Buttons/ButtonIncome";
import ButtonExpense from "./Buttons/ButtonExpense";
import ButtonDone from "./Buttons/ButtonDone";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import {
  setCategory,
  setClose,
  setSum,
  setTitle,
} from "../store/slices/modalSlice";

const Modal = () => {
  const isOpen = useSelector((state: RootState) => state.modal.isOpen);
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setClose())}
      className={`z-50 overflow-auto bg-modalBg text-white left-0 top-0 flex justify-center items-center w-full h-full ${
        isOpen ? "fixed" : "hidden"
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-gray2 w-[520px] h-[520px] rounded-md p-12"
      >
        <div className="font-bold mb-4">Create</div>
        <div className="grid grid-row-3 gap-4">
          <input
            onChange={(e) => dispatch(setTitle(e.target.value))}
            className="p-4 rounded-md bg-gray1 text-gray5"
            type="text"
            placeholder="Title"
          />
          <input
            onChange={(e) => dispatch(setCategory(e.target.value))}
            className="p-4 rounded-md bg-gray1 text-gray5"
            type="text"
            placeholder="Category"
          />
          <input
            onChange={(e) => dispatch(setSum(+e.target.value))}
            className="p-4 rounded-md bg-gray1 text-gray5"
            type="number"
            placeholder="Sum"
          />
        </div>
        <div className="flex py-10 justify-between">
          <ButtonIncome />
          <ButtonExpense />
        </div>
        <ButtonDone />
      </div>
    </div>
  );
};

export default Modal;
