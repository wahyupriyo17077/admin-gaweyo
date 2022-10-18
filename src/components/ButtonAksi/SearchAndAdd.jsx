import React from "react";

function SearchAndAdd() {
  return (
    <div className="grid md:grid-cols-2 mb-5">
      <div className="max-w-md">
        <form className="flex h-12  ">
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 h-12 border border-gray-300  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-4   dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            ></input>
          </div>
          <button type="submit" class="p-3 ml-4 text-xs h-12 font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Search
          </button>
        </form>
      </div>
      <div className="grid md:grid-cols-3 mt-1 ml-48">
        <button className="bg-green-500 hover:bg-green-500 text-white  w-32   h-10 font-bo rounded focus:outline-none focus:shadow-outline" type="button">
          Tambah Baru
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white  w-32  h-10 font-bo rounded focus:outline-none focus:shadow-outline" type="button">
          Tambah Baru
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white  w-32  h-10 font-bo rounded focus:outline-none focus:shadow-outline" type="button">
          Tambah Baru
        </button>
      </div>
    </div>
  );
}

export default SearchAndAdd;
