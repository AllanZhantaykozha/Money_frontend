"use client";

import { useDispatch } from "react-redux";
import { setSearch } from "../store/slices/searchSlice";

const Search = () => {
  const dispatch = useDispatch();

  return (
    <div className="w-full">
      <input
        onChange={(e) => dispatch(setSearch(e.target.value))}
        type="text"
        className="rounded-md p-4 bg-gray1 text-gray5 w-full border-none"
        placeholder="Search"
      />
    </div>
  );
};

export default Search;
