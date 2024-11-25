import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg";

function SearchButton(props) {
  return (
    <div className="searchButton h-16 w-72 flex items-center justify-center">
      <button
        type="submit"
        className="rounded-2xl w-1/2 h-9 bg-slate-400 text-black flex items-center justify-center space-x-2"
        onClick={(event) => {
          props.searchFunction();
        }}
      >
        <img
          src={magnifyingGlass}
          alt="Symbol of a magnifying glass"
          className="h-6 w-6"
        />
        <span className="text-lg font-semibold">Search</span>
      </button>
    </div>
  );
}

export default SearchButton;
