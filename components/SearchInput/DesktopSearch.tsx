import classes from '@/layouts/Header/style'
import React from 'react'

export default function SearchInput() {
  return (
    <div className={classes.header.search_area.wrapper}>
    {/* this label is hidden because of sr-only class */}
    <label className={classes.header.search_area.label} htmlFor="default-search">
      Search
    </label>

    <div className="relative">
      <button className={classes.header.search_area.button} type="submit">
        بگرد
      </button>
      <input
        className={classes.header.search_area.input}
        type="search"
        id="default-search"
        placeholder="دنبال چی هستی؟"
        required
      />

      <div className={classes.header.search_area.icon.wrapper}>
        <svg
          aria-hidden="true"
          className={classes.header.search_area.icon.svg}
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
  )
}
