import React from "react";
import icon from "../assets/people-svgrepo-com.svg";
import worldIcon from "../assets/world.svg";
import { Link } from "react-router-dom";
import Friendly from "./Friendly";
import Random from "./Random";

function Menu() {
  return (
    <div className="flex flex-col items-center justify-center">
      {/* <Link to={"/search"}>
        <Friendly />
      </Link> */}

      <Link to={"/search"}>
        <Random />
      </Link>
    </div>
  );
}

export default Menu;
