"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "motion/react";

export const AutoMedia = ({ media }) => {
  const [index, setIndex] = useState(0);
  const currentMedia = media[index];
  const videoRef = useRef(null);

  // Memoize 'next' so its reference only changes if the media array length changes
  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % media.length);
  }, [media.length]);

  useEffect(() => {
    // If it's an image, set a timer. If it's a video, the onEnded handler takes over.
    if (currentMedia.type === "image") {
      const timer = setTimeout(next, 5000); // 5 seconds for images
      return () => clearTimeout(timer);
    }
  }, [index, currentMedia.type, next]);

  return (
    <div className="relative w-full h-full">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentMedia.url} // Change key to URL to trigger animation on source change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 bg-white"
        >
          {currentMedia.type === "video" ? (
            <video
              ref={videoRef}
              src={currentMedia.url}
              poster={currentMedia.thumbnail}
              autoPlay
              muted
              playsInline
              preload="auto"
              onEnded={next}
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={currentMedia.url}
              alt={currentMedia.description || "Portfolio item"}
              fill
              priority={index === 0}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-contain transition-opacity duration-500"
              quality={80} // Balance between file size and clarity
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
