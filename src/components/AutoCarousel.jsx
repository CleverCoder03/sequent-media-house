import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export const AutoCarousel = ({ images, imageClassName, interval = 4000 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, interval);
    
    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <AnimatePresence mode="popLayout">
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 1.05 }} // Slight zoom-in effect on enter
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        className="absolute inset-0"
      >
        <Image
          src={images[index]}
          alt={`Carousel Image ${index}`}
          fill
          className={`object-cover ${imageClassName}`}
        />
      </motion.div>
    </AnimatePresence>
  );
};