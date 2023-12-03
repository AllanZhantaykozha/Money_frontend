"use client";

import { setTypeOfCreate } from "@/app/store/slices/modalSlice";
import { useDispatch } from "react-redux";

const ButtonExpense = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setTypeOfCreate({ type: "expense" }))}
      className="flex bg-gray3 text-gray6 rounded-md py-4 px-16 justify-between w-52 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.25 3.75C7.69365 3.75 4 7.44365 4 12C4 16.5563 7.69365 20.25 12.25 20.25C16.8063 20.25 20.5 16.5563 20.5 12C20.5 7.44365 16.8063 3.75 12.25 3.75ZM2.5 12C2.5 6.61522 6.86522 2.25 12.25 2.25C17.6348 2.25 22 6.61522 22 12C22 17.3848 17.6348 21.75 12.25 21.75C6.86522 21.75 2.5 17.3848 2.5 12Z"
          fill="#F75A68"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M8.54145 12.0414C8.83434 11.7486 9.30921 11.7486 9.60211 12.0414L12.2499 14.6892L14.8977 12.0414C15.1906 11.7486 15.6655 11.7486 15.9584 12.0414C16.2513 12.3343 16.2513 12.8092 15.9584 13.1021L12.7802 16.2802C12.4873 16.5731 12.0125 16.5731 11.7196 16.2802L8.54145 13.1021C8.24855 12.8092 8.24855 12.3343 8.54145 12.0414Z"
          fill="#F75A68"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.25 7.5C12.6642 7.5 13 7.83579 13 8.25L13 15.75C13 16.1642 12.6642 16.5 12.25 16.5C11.8358 16.5 11.5 16.1642 11.5 15.75L11.5 8.25C11.5 7.83579 11.8358 7.5 12.25 7.5Z"
          fill="#F75A68"
        />
      </svg>
      Expense
    </div>
  );
};

export default ButtonExpense;
