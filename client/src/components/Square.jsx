import React from "react";

function Square({ content, id, func }) {
  return (
    <div
      className="flex items-center justify-center bg-customNavy border-2 border-black w-[100px] h-[100px]"
      onClick={() => {
        func(id);
      }}
    >
      {content}
    </div>
  );
}

export default Square;
