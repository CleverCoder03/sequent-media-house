"use client"
import { motion } from "motion/react";

export const ManualTextRoll = ({ children, className }) => {
  const transition = {
    duration: 0.5,
    ease: [0.215, 0.61, 0.355, 1], // Deceleration curve (Power3.out)
  };

  return (
    <motion.span
      initial="rest"
      whileHover="hover"
      className={`relative inline-block overflow-hidden whitespace-nowrap ${className}`}
      style={{ 
        lineHeight: "0.9", // Tighten line height to prevent gap during slide
        display: "inline-block" 
      }}
    >
      <div className="relative">
        {/* Primary Word */}
        <motion.div
          variants={{
            rest: { y: "0%" },
            hover: { y: "-100%" },
          }}
          transition={transition}
          className="block"
          style={{ willChange: "transform" }}
        >
          {children}
        </motion.div>

        {/* Duplicate Word */}
        <motion.div
          variants={{
            rest: { y: "100%" },
            hover: { y: "0%" },
          }}
          transition={transition}
          className="absolute top-0 left-0 block"
          style={{ willChange: "transform" }}
        >
          {children}
        </motion.div>
      </div>
    </motion.span>
  );
};