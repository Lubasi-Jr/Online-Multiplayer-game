import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg";

function Search() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="searchBar h-16 w-72 flex items-center justify-center">
        <input
          type="text"
          className="rounded-md w-full h-9 px-3 border border-slate-400"
          placeholder="Enter your username"
        />
      </div>
      <div className="searchButton h-16 w-72 flex items-center justify-center">
        <button className="rounded-md w-1/2 h-9 bg-slate-400 text-black flex items-center justify-center space-x-2">
          <img
            src={magnifyingGlass}
            alt="Symbol of a magnifying glass"
            className="h-6 w-6"
          />
          <span className="text-lg font-semibold">Search</span>
        </button>
      </div>
    </div>
  );
}

export default Search;
