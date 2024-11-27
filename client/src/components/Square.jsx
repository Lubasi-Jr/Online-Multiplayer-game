import React from "react";

function Square({ content }) {
  return (
    <div className="flex items-center justify-center bg-gray-300 border-2 border-black w-[100px] h-[100px]">
      {content}
    </div>
  );
}

export default Square;
