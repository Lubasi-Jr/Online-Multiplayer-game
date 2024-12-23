import React from "react";
import worldIcon from "../assets/world.svg";
import Back from "./BackButton";
import { motion } from "framer-motion";

function Random() {
  return (
    <motion.div
      whileHover={{ scale: 1.2, transition: { ease: "easeInOut" } }}
      className="h-16 w-72 flex gap-1 items-center justify-center border-b border-slate-400"
    >
      <div className="symbol h-9 w-9 flex items-center justify-center">
        <img
          src={worldIcon}
          alt="Symbol of a globe"
          className="h-full w-full"
        />
      </div>
      <p className="text-xl font-magic font-semibold">
        Play v.s a random online
      </p>
    </motion.div>
  );
}

export default Random;
