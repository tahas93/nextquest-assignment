import React from 'react';

const HeaderSearch = () => {
  return (
    <div className="relative flex flex-1 items-center justify-start">
      <p className="absolute left-5">
        <svg
          className="h-4 w-4 text-gray-400 "
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
      </p>
      <input
        type="search"
        id="default-search"
        className="block w-full cursor-pointer rounded-lg border border-nx-border-100 bg-transparent py-2.5 pl-10 pr-4 outline-none placeholder:text-base placeholder:text-white"
        placeholder="Search"
        readOnly
        required
      />
    </div>
  );
};

export default HeaderSearch;
