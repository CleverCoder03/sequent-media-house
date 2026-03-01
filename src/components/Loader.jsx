"use client";

import { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";

// Move variants outside to prevent re-creation on every render
const letterVariants = {
  hidden: { y: "100%", opacity: 0 },
  visible: (i) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.04,
    },
  }),
  exit: (i) => ({
    y: "-100%",
    opacity: 0,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.02, // Faster exit for snappier feel
    },
  }),
};

const wrapperVariants = {
  visible: { y: "0%" },
  exit: {
    y: "-100%",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.1 },
  },
};

export default function Loader({ onFinish }) {
  const [index, setIndex] = useState(0);
  const [isExiting, setIsExiting] = useState(false);

  const words = useMemo(() => ["Design.", "Culture.", "Storytelling."], []);

  useEffect(() => {
    // If we've reached the last word, trigger the final exit sequence
    if (index === words.length - 1) {
      const timer = setTimeout(() => setIsExiting(true), 1600);
      return () => clearTimeout(timer);
    }

    // Otherwise, cycle to the next word
    const timer = setTimeout(() => {
      setIndex((prev) => prev + 1);
    }, 1400);

    return () => clearTimeout(timer);
  }, [index, words.length]);

  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111] text-white"
      variants={wrapperVariants}
      initial="visible"
      animate={isExiting ? "exit" : "visible"}
      onAnimationComplete={(definition) => {
        if (definition === "exit" && onFinish) onFinish();
      }}
    >
      <div className="overflow-hidden text-2xl lowercase md:text-3xl xl:text-4xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            className={`flex font-playfair-italic leading-[1.3] ${
              index === 1 ? "text-lime-theme" : "text-white" // Lime theme for 2nd word
            }`}
          >
            {words[index].split("").map((letter, i) => (
              <span key={`${index}-${i}`} className="relative overflow-hidden inline-block">
                <motion.span
                  custom={i}
                  variants={letterVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="inline-block"
                >
                  {/* Handle space character if any word has one */}
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              </span>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}