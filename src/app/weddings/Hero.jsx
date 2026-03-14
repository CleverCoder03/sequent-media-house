"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharReveal from "@/components/CharReveal"; // Assuming this is your existing component
import Image from "next/image";

const WeddingHero = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
    "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069",
    "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2070",
    "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069",
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[95vh] w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* --- CINEMATIC BACKGROUND LOOP --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2.5, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            <Image
              src={heroImages[index]}
              alt="Wedding Story"
              fill // Replaces w-full h-full to fill the parent container
              priority={index === 0} // Loads the first image instantly
              sizes="100vw" // Helps the browser choose the right size
              className="object-cover" // Replaces object-cover from <img>
              quality={80} // Balance between visual quality and file size
            />
          </motion.div>
        </AnimatePresence>

        {/* Thematic Overlays */}
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-[#050505]" />
        {/* <div className="absolute inset-0 z-10 bg-black/20" /> */}
      </div>

      {/* --- REFINED TEXT CONTENT --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center pointer-events-none text-center">
        <CharReveal>
          <h1 className="text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            Weaving{" "}
            <span className="font-playfair-semibold-italic text-lime-theme italic lowercase">
              vows
            </span>{" "}
            into a
          </h1>
          <h1 className="text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            Cinematic{" "}
            <span className="font-playfair-semibold-italic text-lime-theme italic lowercase">
              rhythm
            </span>
          </h1>
        </CharReveal>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-10 flex flex-col items-center"
        >
          <p className="text-gray-400 max-w-lg font-figtree-light text-sm md:text-base leading-relaxed tracking-wide">
            Blending <span className="text-white">raw emotion</span> with
            <span className="text-white"> editorial grace</span>. We don&apos;t
            just film weddings; we sequence your legacy.
          </p>
        </motion.div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-[9px] uppercase tracking-[0.3em] text-gray-500">
            Discover
          </span>
          <div className="w-px h-4 bg-white/30" />
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingHero;
