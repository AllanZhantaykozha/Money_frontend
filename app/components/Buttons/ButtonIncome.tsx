"use client";

import { setTypeOfCreate } from "@/app/store/slices/modalSlice";
import { useDispatch } from "react-redux";

const ButtonIncome = () => {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(setTypeOfCreate({ type: "income" }))}
      className="flex cursor-pointer bg-gray3 text-gray6 rounded-md py-4 px-16 justify-between w-52"
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
          fill="#00B37E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.2499 7.5C12.4488 7.5 12.6396 7.57902 12.7802 7.71967L15.9584 10.8978C16.2513 11.1907 16.2513 11.6656 15.9584 11.9585C15.6655 12.2513 15.1906 12.2513 14.8977 11.9585L12.2499 9.31066L9.60211 11.9585C9.30921 12.2513 8.83434 12.2513 8.54145 11.9585C8.24855 11.6656 8.24855 11.1907 8.54145 10.8978L11.7196 7.71967C11.8602 7.57902 12.051 7.5 12.2499 7.5Z"
          fill="#00B37E"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M12.25 7.5C12.6642 7.5 13 7.83579 13 8.25L13 15.75C13 16.1642 12.6642 16.5 12.25 16.5C11.8358 16.5 11.5 16.1642 11.5 15.75L11.5 8.25C11.5 7.83579 11.8358 7.5 12.25 7.5Z"
          fill="#00B37E"
        />
      </svg>
      Income
    </div>
  );
};

export default ButtonIncome;
