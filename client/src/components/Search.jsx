import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import SearchBar from "./SearchBar";
import SearchButton from "./SearchButton";

function Search() {
  return (
    <div className="flex flex-col items-center justify-center">
      <SearchBar />
      <SearchButton />
    </div>
  );
}

export default Search;
