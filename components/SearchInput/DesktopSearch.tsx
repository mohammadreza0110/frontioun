import React from "react";
import BaseButton from "../BaseButton";

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
          title="بگرد"
          classes="absolute left-1.5 bottom-[.4rem] bg-blue-700 hover:bg-blue-800 rounded-full text-sm px-6"
        />

        <input
          className="py-3 border-none bg-zinc-200 dark:bg-slate-700 placeholder:text-gray-500 dark:placeholder:text-white !rounded-full input-md w-full pr-10"
          type="search"
          id="default-search"
          placeholder="دنبال چی هستی؟"
          required
        />

        <div className="absolute inset-y-0 right-0 flex items-center pr-8">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-white absolute right-2.5 bottom-3.5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
