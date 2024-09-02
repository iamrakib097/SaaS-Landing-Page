import React from "react";
import { motion } from "framer-motion";

const PopularBtn = () => {
  return (
    <div>
      <motion.span
        animate={{ backgroundPositionX: "-600%" }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="border border-slate-700 rounded-lg px-2 py-1 bg-gradient-to-r from-[#DD7DFF] via-[#E1CD86] via-[#8BCB92] via-[#71C2EF] via-[#E1CD86] via-[#8BCB92] via-[#71C2EF] to-[#3BFFFF] inline-block text-transparent bg-clip-text flex-shrink-0"
        style={{ backgroundSize: "200%" }}
      >
        Most Popular
      </motion.span>
    </div>
  );
};

export default PopularBtn;
