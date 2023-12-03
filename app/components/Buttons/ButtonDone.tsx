"use client";

import { setClose } from "@/app/store/slices/modalSlice";
import { useDispatch } from "react-redux";

const ButtonDone = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setClose())}
      className="cursor-pointer flex bg-greenBasic rounded-md text-white h-12 justify-center items-center font-bold text-base hover:scale-105 transition-all w-full"
    >
      <div>Create</div>
    </div>
  );
};

export default ButtonDone;
