"use client"
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export const AutoMedia = ({ media }) => {
  const [index, setIndex] = useState(0);
  const currentMedia = media[index];
  const videoRef = useRef(null);

  const next = () => setIndex((prev) => (prev + 1) % media.length);

  useEffect(() => {
    // If it's an image, set a timer. If it's a video, the onEnded handler takes over.
    if (currentMedia.type === "image") {
      const timer = setTimeout(next, 5000); // 5 seconds for images
      return () => clearTimeout(timer);
    }
  }, [index, currentMedia.type]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {currentMedia.type === "video" ? (
            <video
              ref={videoRef}
              src={currentMedia.url}
              autoPlay
              muted
              playsInline
              onEnded={next}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentMedia.url}
              alt="Project Media"
              fill
              className="object-cover"
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};