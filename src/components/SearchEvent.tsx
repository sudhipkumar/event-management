import React from "react";

const SearchEvent = () => {
  return (
    <article className="px-4 py-6 md:px-16 lg:px-64">
      <form className="flex flex-col md:flex-row bg-white p-5 shadow-2xl shadow-gray-50 rounded-full">
        <input
          type="search"
          placeholder="Search Events with location"
          className="w-full px-6 py-3 mb-4 md:mb-0 md:mr-1 rounded-full md:rounded-l-full bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-lg md:placeholder:text-xl placeholder:tracking-wider"
        />
        <button
          type="button"
          className="px-6 py-3 text-lg md:text-xl text-white rounded-full md:rounded-r-full font-medium bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </form>
    </article>
  );
};

export default SearchEvent;
