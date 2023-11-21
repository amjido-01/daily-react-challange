import { motion } from "framer-motion";

export const AnimatedStars = (props) => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={2}
    className="lucide lucide-star"
    initial={{ scale: 0.5, rotate: 0 }} // Initial state
    animate={{
      scale: [0.5, 2, 0.5], // Scale animation
      rotate: [-360, 0, 360], // Rotate animation
    }}
    transition={{
      duration: 5,
      ease: "linear",
      times: [0, 0.5, 1], // Keyframe times for scale animation
      repeat: Infinity,
      // repeatDelay: 1, // Delay before the next repeat
    }}
    {...props}
  >
    <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </motion.svg>
);
