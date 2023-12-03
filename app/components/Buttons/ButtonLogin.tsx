"use client";

import { useDispatch } from "react-redux";

const ButtonLogin = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => {}}
      className="cursor-pointer flex bg-greenBasic rounded-md text-white h-12 justify-center items-center font-bold text-base hover:scale-105 transition-all w-full"
    >
      <div>Login</div>
    </div>
  );
};

export default ButtonLogin;
