"use client"
import { motion } from "motion/react";
import React from "react";

export const TextMask2 = ({ children, className, delay = 0, once = true, stagger = 0.08 }) => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  };

  const itemVariants = {
    hidden: { y: "110%", rotateZ: 5 },
    visible: {
      y: 0,
      rotateZ: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  // Helper to split text strings into animated words while preserving React elements (like the lime spans)
  const elements = React.Children.map(children, (child) => {
    if (typeof child === "string") {
      return child.split(" ").map((word, i) => (
        <span key={i} className="relative overflow-hidden inline-block mr-[0.2em] pb-[0.1em]">
          <motion.span variants={itemVariants} className="inline-block">
            {word}
          </motion.span>
        </span>
      ));
    }
    // If it's the <span>story</span> or <span>proof</span>, wrap it in the mask logic
    return (
      <span className="relative overflow-hidden inline-block pb-[0.1em]">
        <motion.span variants={itemVariants} className="inline-block">
          {child}
        </motion.span>
      </span>
    );
  });

  return (
    <motion.span
      className={`inline-flex flex-wrap items-baseline ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: once, amount: 0.3 }}
    >
      {elements}
    </motion.span>
  );
};