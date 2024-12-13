import React from "react";
import { motion } from "framer-motion";

function Square({ content, id, func }) {
  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { ease: "easeInOut" } }}
      className="flex items-center justify-center bg-customNavy border-2 border-black w-[100px] h-[100px]"
      onClick={() => {
        func(id);
      }}
    >
      {content}
    </motion.div>
  );
}

export default Square;
