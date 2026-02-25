"use client"
import { motion } from "motion/react";

/**
 * @param {string} text - The string to animate
 * @param {string} className - Tailwind or CSS classes for the text
 * @param {number} delay - How long to wait before starting (seconds)
 * @param {boolean} once - Should it only animate the first time it's seen?
 */
export const TextMask = ({ text, className, delay = 0, once = true, stagger = 0.08 }) => {
  
  // 1. Parent variants to handle the stagger timing
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger, // Time between each word
        delayChildren: delay,
      },
    },
  };

  // 2. Child variants for the actual motion
  const wordVariants = {
    hidden: { 
      y: "110%", 
      rotateZ: 5 // Subtle tilt for a more dynamic "pop"
    },
    visible: {
      y: 0,
      rotateZ: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] // Custom "Expo" ease-out
      },
    },
  };

  return (
    <motion.span
      className={`inline-flex flex-wrap ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.3 }}
    >
      {text.split(" ").map((word, i) => (
        <span 
          key={i} 
          className="relative overflow-hidden inline-block mr-[0.2em] pb-[0.1em] -mb-[0.1em]"
        >
          <motion.span variants={wordVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
};