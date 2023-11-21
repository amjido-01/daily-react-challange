import { motion } from "framer-motion";

export const DownArrow = () => (
  <motion.div
    style={{
      width: 40,
      height: 40,
      borderRadius: "50%",
      border: "1px solid white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden", // Clip the arrow within the circle
      // position: "relative", // Position relative for absolute positioning of the arrow
    }}
  >
    <motion.svg
      xmlns="http://www.w3.org/2000/svg"
      width={24}
      height={24}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-move-down"
      initial={{ y: 0 }}
      animate={{ y: [0, -10, 0] }} // Bouncing animation along the y-axis
      transition={{
        duration: 0.8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      //   style={{
      //     position: "absolute", // Position absolute to move independently within the container
      //     top: "50%", // Center vertically
      //     left: "50%", // Center horizontally
      //     transform: "translate(-50%, -50%)", // Center exactly within the container
      //   }}
    >
      <path d="m8 18 4 4 4-4M12 2v20" />
    </motion.svg>
  </motion.div>
);

// Example usage:
// <BouncingArrowContainer />
