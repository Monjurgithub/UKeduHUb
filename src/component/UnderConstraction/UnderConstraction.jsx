import React from "react";
import { motion } from "framer-motion";

const UnderConstruction = () => {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-linear-to-b from-yellow-100 via-yellow-200 to-yellow-300">
      
      {/* Animated Construction Icon */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl md:text-9xl mb-6"
      >
        🚧
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="text-4xl md:text-6xl font-extrabold text-gray-800 mb-4 text-center"
      >
        Page Under Construction
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-lg md:text-2xl text-gray-700 text-center"
      >
        We’re building something amazing! 🚀
      </motion.p>

      {/* Animated Loading Bar */}
      <motion.div
        className="w-64 md:w-96 h-2 bg-gray-300 rounded-full mt-10 overflow-hidden"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
      >
        <motion.div className="h-2 bg-blue-600" layoutId="loader" />
      </motion.div>

    </div>
  );
};

export default UnderConstruction;
