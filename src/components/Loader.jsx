"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Loader({ onFinish }) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isLoaderExit, setIsLoaderExit] = useState(false);
  const [hasCompletedWords, setHasCompletedWords] = useState(false);

  const words = ["Design.", "Culture.", "Storytelling."];
  const totalWords = words.length

  // Cycle through words with a fixed duration
  useEffect(() => {
    if (currentWordIndex < totalWords - 1) {
      const wordTimeout = setTimeout(() => {
        setCurrentWordIndex((prev) => prev + 1);
      }, 1400); // Extra time for first word stagger

      return () => clearTimeout(wordTimeout);
    } else if (!hasCompletedWords) {
      // All words shown, wait a bit then trigger exit
      const completeTimeout = setTimeout(() => {
        setHasCompletedWords(true);
        setIsLoaderExit(true);
      }, 1600);

      return () => clearTimeout(completeTimeout);
    }
  }, [currentWordIndex, hasCompletedWords, totalWords]);

  const letterVariants = {
    hidden: {
      y: "100%",
      opacity: 0,
    },
    visible: (i) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.04, // Stagger delay
      },
    }),
    exit: (i) => ({
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.76, 0, 0.24, 1],
        delay: i * 0.04, // Slight stagger on exit
      },
    }),
  };

  const wordVariants = {
    enter: {
      y: "100%",
      opacity: 0,
    },
    center: {
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      y: "-100%",
      opacity: 0,
      transition: {
        duration: 0.7,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };

  const wrapperVariants = {
    visible: { y: "0%" },
    exit: {
      y: "-100%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
    },
  };

  // Split first word into letters for stagger effect
  const renderWord = (word, index) => {
    // if (index === 0) {
      // First word with stagger
      return (
        <div className="flex">
          {word.split("").map((letter, i) => (
            <div key={i} className="overflow-hidden">
              <motion.span
                custom={i}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-block"
              >
                {letter}
              </motion.span>
            </div>
          ))}
        </div>
      );
    // } else {
      // Other words with normal animation
      // return word;
    // }
  };

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-[#111] text-white z-9999 loader-wrapper"
      variants={wrapperVariants}
      initial="visible"
      animate={isLoaderExit ? "exit" : "visible"}
      onAnimationComplete={() => {
        if (isLoaderExit && onFinish) onFinish();
      }}
    >
      <div className="text-2xl lowercase text-center md:text-3xl xl:text-4xl overflow-hidden">
        <AnimatePresence mode="wait">
        <motion.h1
              key={currentWordIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="leading-[1.3] font-montserrat-italic"
            >
              {renderWord(words[currentWordIndex], currentWordIndex)}
            </motion.h1>
          {/* {currentWordIndex === 0 ? (
            <motion.h1
              key={currentWordIndex}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="leading-[1.3] font-playfair-regular"
            >
              {renderWord(words[currentWordIndex], currentWordIndex)}
            </motion.h1>
          ) : (
            <motion.h1
              key={currentWordIndex}
              variants={wordVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="leading-[1.3] font-playfair-regular"
            >
              {words[currentWordIndex]}
            </motion.h1>
          )} */}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}