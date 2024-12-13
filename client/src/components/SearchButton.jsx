import React from "react";
import magnifyingGlass from "../assets/magnifying-glass.svg";
import { motion } from "framer-motion";

function SearchButton(props) {
  return (
    <div className="searchButton h-16 w-72 flex items-center justify-center">
      <motion.button
        whileHover={{ scale: 1.2, transition: { ease: "easeInOut" } }}
        type="submit"
        className="rounded-2xl w-1/2 h-9 bg-customNavy text-customBlue flex items-center justify-center space-x-2"
        onClick={(event) => {
          props.searchFunction();
        }}
      >
        {/* <img
          src={magnifyingGlass}
          alt="Symbol of a magnifying glass"
          className="h-6 w-6"
        /> */}
        <span className="text-lg font-magic text-customBlue">SEARCH</span>
      </motion.button>
    </div>
  );
}

export default SearchButton;
