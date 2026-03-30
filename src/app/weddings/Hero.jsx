"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CharReveal from "@/components/CharReveal"; // Assuming this is your existing component
import Image from "next/image";

const WeddingHero = () => {
  const [index, setIndex] = useState(0);

  const heroImages = [
    "/weddings/weddings-1.jpg",
    "/weddings/weddings-3.jpg",
    "/weddings/weddings-8.jpg",
    "/weddings/weddings-9.jpg"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-dvh w-full overflow-hidden bg-[#050505] flex items-center justify-center">
      {/* --- CINEMATIC BACKGROUND LOOP --- */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.5, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
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
        {/* <div className="absolute inset-0 z-10 bg-gradient-to-b from-black/10 via-transparent to-[#050505]" /> */}
        {/* <div className="absolute inset-0 z-10 bg-black/20" /> */}
      </div>

      {/* --- REFINED TEXT CONTENT --- */}
      <div className="relative z-20 container mx-auto px-6 flex flex-col items-center pointer-events-none text-center">
        <CharReveal>
          <h1 className="text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            Weaving{" "}
            <span className="font-playfair-semibold-italic text-orange-400 italic lowercase">
              vows
            </span>{" "}
            into a {" "}
            <span className="md:hidden">
              cinematic{" "}
            <span className="font-playfair-semibold-italic text-orange-400 italic lowercase">
              rhythm
            </span>
            </span>
          </h1>
          <h1 className="hidden md;block text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            Cinematic{" "}
            <span className="font-playfair-semibold-italic text-orange-400 italic lowercase">
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
          <p className="text-white max-w-lg font-montserrat-light text-sm md:text-base leading-relaxed tracking-wide">
            Blending <span className="font-montserrat-semibold">raw emotion</span> with
            <span className="font-montserrat-semibold"> editorial grace</span>. We don&apos;t
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
          <span className="text-[9px] uppercase tracking-[0.3em] text-white/80">
            Discover
          </span>
          <div className="w-px h-4 bg-white/60" />
        </motion.div>
      </div>
    </section>
  );
};

export default WeddingHero;
