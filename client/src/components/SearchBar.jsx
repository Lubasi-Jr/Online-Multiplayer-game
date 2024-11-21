import React from "react";

function SearchBar() {
  return (
    <div className="searchBar h-16 w-72 flex items-center justify-center">
      <input
        type="text"
        className="rounded-md w-full h-9 px-3 border border-slate-400"
        placeholder="Enter your username"
      />
    </div>
  );
}

export default SearchBar;