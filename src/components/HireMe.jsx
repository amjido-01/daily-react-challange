import { useRef } from "react";
import { motion } from "framer-motion";
import { useFollowPointer } from "./useFollowPointer";

const HireMe = () => {
  const sectionRef = useRef(null);
  const { x, y } = useFollowPointer(sectionRef);

  return (
    <div
      ref={sectionRef}
      className="section"
      style={{
        height: "150px",
        width: "70%",
        margin: "auto",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <motion.div
        className="box"
        animate={{ x, y }}
        transition={{
          type: "spring",
          damping: 3,
          stiffness: 50,
          restDelta: 0.001,
        }}
      />
    </div>
  );
};

export default HireMe;
