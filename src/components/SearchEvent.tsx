import React from "react";

const SearchEvent = () => {
  return (
    <article className="px-[25rem] py-6">
      <form className="flex flex-col md:flex-row bg-white p-5 shadow-2xl shadow-gray-50 rounded-full">
        <input
          type="search"
          placeholder="Search Events with location"
          className="w-full px-6 py-6 mb-4 md:mb-0 md:mr-1 rounded-l-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-xl placeholder:tracking-wider"
        />
        <button
          type="button"
          className="px-8 py-3 text-xl text-white rounded-r-full font-medium bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </article>
  );
};
export default SearchEvent;
