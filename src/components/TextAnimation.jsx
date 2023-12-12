// TextAnimation.jsx
import React from "react";
import { motion } from "framer-motion";

const TextAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="text-animation-container bg-blue-800 text-white p-8"
    >
      <motion.h1
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 0.5, type: "spring", stiffness: 100 }}
        className="text-5xl font-bold mb-4"
      >
        <motion.span
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Transforming
        </motion.span>{" "}
        <motion.span
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 1,
            type: "spring",
            stiffness: 100,
          }}
        >
          Ideas
        </motion.span>
      </motion.h1>
      <motion.h1
        initial={{ x: "-100vw" }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 1, type: "spring", stiffness: 100 }}
        className="text-5xl font-bold mb-4"
      >
        <motion.span
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            delay: 1.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          into
        </motion.span>{" "}
        <motion.span
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            delay: 2,
            type: "spring",
            stiffness: 100,
          }}
        >
          Digital
        </motion.span>{" "}
        <motion.span
          initial={{ x: -20 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.5,
            delay: 2.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          Reality
        </motion.span>
      </motion.h1>
      <motion.h1
        initial={{ y: "100vh" }}
        animate={{ y: 0 }}
        transition={{ duration: 1, delay: 3, type: "spring", stiffness: 100 }}
        className="text-2xl font-bold mb-4"
      >
        <motion.span
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{
            duration: 0.5,
            delay: 3.5,
            type: "spring",
            stiffness: 100,
          }}
        >
          🚀 Bounce
        </motion.span>
      </motion.h1>
    </motion.div>
  );
};

export default TextAnimation;
