"use client";

import { setOpen } from "@/app/store/slices/modalSlice";
import { useDispatch } from "react-redux";

const ButtonCreate = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setOpen())}
      className="cursor-pointer flex bg-greenBasic rounded-md text-white w-40 h-12 justify-center items-center font-bold text-base hover:scale-105 transition-all"
    >
      <div>Create</div>
    </div>
  );
};

export default ButtonCreate;
