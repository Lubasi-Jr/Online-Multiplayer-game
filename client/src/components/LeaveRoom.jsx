import React from "react";
import { motion } from "framer-motion";

function Leave() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { ease: "easeInOut" } }}
      className="w-full h-6 flex flex-row justify-center items-center  mt-1 text-customNavy font-magic"
    >
      Leave Game
    </motion.div>
  );
}

export default Leave;
