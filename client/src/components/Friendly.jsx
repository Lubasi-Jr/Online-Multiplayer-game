import React from "react";
import icon from "../assets/people-svgrepo-com.svg";

function Friendly() {
  return (
    <div className="h-16 w-72 flex gap-1 items-center justify-center border-b border-slate-400">
      <div className="symbol h-9 w-9 flex items-center justify-center">
        <img src={icon} alt="Symbol for friend" className="h-full w-full" />
      </div>
      <p className="text-xl font-semibold">Play v.s your friend</p>
    </div>
  );
}

export default Friendly;
