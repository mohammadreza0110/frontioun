import React from "react";

export default function MobileSearch() {
  return (
    <div>
      {/* this label is hidden because of sr-only class */}
      <label
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        htmlFor="default-search"
      >
        Search
      </label>

      <div className="relative">
        <input
          className= "w-full py-3 pl-10 pr-4 border-none rounded-full bg-zinc-200 dark:bg-slate-700 placeholder:text-gray-500 dark:placeholder:text-white input-md"
          type="search"
          id="default-search"
          placeholder="دنبال چی هستی؟"
          required
        />

        <div>
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-white absolute left-2.5 bottom-3.5"
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
