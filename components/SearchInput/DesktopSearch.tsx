import React from "react";
import BaseButton from "../BaseButton";
import { FiSearch } from "react-icons/fi";

export default function SearchInput() {
  return (
    <div className="hidden w-1/2 lg:block">
      {/* this label is hidden because of sr-only class */}
      <label
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        htmlFor="default-search"
      >
        Search
      </label>

      <div className="relative">
        <BaseButton
          name="بگرد"
          classes="absolute left-1.5 bottom-[.4rem] bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-6"
        />

        <input
          className="py-3 outline-none border-none bg-zinc-200 dark:bg-slate-700 placeholder:text-gray-500 dark:placeholder:text-white !rounded-full input-md w-full pr-10"
          type="search"
          id="default-search"
          placeholder="دنبال چی هستی؟"
          autoComplete="off" 
          required
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <FiSearch size={22} />
        </div>
      </div>
    </div>
  );
}
