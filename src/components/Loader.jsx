"use client";

import { useState, useEffect } from "react";
import {motion} from "motion/react"

export default function Loader({ onFinish }) {
  const [progress, setProgress] = useState(0);
  const [isExitSequence, setIsExitSequence] = useState(false);
  const [isLoaderExit, setIsLoaderExit] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + Math.random() * 30;

        // Check completion inside the setter to avoid dependency issues
        if (next >= 100) {
          clearInterval(interval);
          setIsExitSequence(true); // Trigger exit exactly when ready
          return 100;
        }
        return next;
      });
    }, 300);

    return () => clearInterval(interval);
  }, []); // Dependencies are now empty

  const textVariants = {
    hidden: { y: "100%" },
    visible: { 
      y: "0%",
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
    },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
    },
  };

  const wrapperVariants = {
    visible: { y: "0%" },
    exit: { 
      y: "-100%", 
      transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } 
    }
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
      <div className="font-figtree-regular text-4xl text-center md:text-5xl xl:text-6xl md:flex flex-col gap-1">
        
        {/* MASK 1 */}
        <div className="overflow-hidden">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isExitSequence ? "exit" : "visible"}
            className="leading-[1.2]"
          >
            Designing <span className="font-playfair-italic">Strategic and Creative</span> <span className="md:hidden">Digital Brand Experiences.</span>
          </motion.h1>
        </div>

        {/* MASK 2 */}
        <div className="hidden md:block overflow-hidden">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate={isExitSequence ? "exit" : "visible"}
            transition={{ delay: 0.1 }} 
            className="leading-[1.2]"
            onAnimationComplete={(definition) => {
              if (definition === "exit") {
                setIsLoaderExit(true);
              }
            }}
          >
            Digital Brand Experiences.
          </motion.h1>
        </div>

      </div>
    </motion.div>
  );
}