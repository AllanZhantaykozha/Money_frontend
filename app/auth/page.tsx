"use client";

import { useDispatch, useSelector } from "react-redux";
import ButtonLogin from "../components/Buttons/ButtonLogin";
import { RootState } from "../store/store";
import { setPassword, setTypeOfIn, setLogin } from "../store/slices/authSlice";
import ButtonRegister from "../components/Buttons/ButtonRegister";

export default function Auth() {
  const typeOfIn = useSelector((state: RootState) => state.auth.type);
  const dispatch = useDispatch();

  return (
    <div className="overflow-auto flex justify-center items-center w-full h-full fixed">
      <div className="w-[500px] h-[500px] bg-gray1 rounded-md p-8 text-white">
        <div className="flex justify-center font-bold text-3xl gap-16">
          <div
            onClick={() => dispatch(setTypeOfIn({ type: "login" }))}
            className={
              typeOfIn === "login"
                ? "cursor-pointer text-greenLight decoration-solid decoration-greenLight underline underline-offset-8 decoration-4"
                : "cursor-pointer"
            }
          >
            Log In
          </div>
          <div
            onClick={() => dispatch(setTypeOfIn({ type: "signin" }))}
            className={
              typeOfIn === "signin"
                ? "cursor-pointer text-greenLight decoration-solid decoration-greenLight underline underline-offset-8 decoration-4"
                : "cursor-pointer"
            }
          >
            Sign In
          </div>
        </div>
        <div className="">
          <div className="font-bold text-xl pb-4 mt-14 text-gray5">Login</div>
          <input
            onChange={(e) => dispatch(setLogin(e.target.value))}
            className="w-full bg-gray3 rounded-md p-4 mb-8"
            type="text"
            placeholder="login"
          />
          <div className="font-bold text-xl pb-4 text-gray5">Password</div>
          <input
            onChange={(e) => dispatch(setPassword(e.target.value))}
            className="w-full bg-gray3 rounded-md p-4 mb-14"
            type="text"
            placeholder="password"
          />

          {typeOfIn === "login" ? <ButtonLogin /> : <ButtonRegister />}
        </div>
      </div>
    </div>
  );
}
