"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Camera, Film, Pause } from "lucide-react";
import { AutoCarousel } from "@/components/AutoCarousel";

const WeddingPortfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const detailImages = [
  "https://images.unsplash.com/photo-1544577080-91762bc7f475?q=80&w=2338",
  "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2338",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=2000"
];

const cinematicImages = [
  "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2000",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000"
];

  return (
    <section className="bg-white py-12 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-neutral-100 pb-12">
          <div className="max-w-2xl">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-orange-500 font-figtree-medium uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Curated Masterpieces
            </motion.span>
            <h2 className="text-neutral-900 text-5xl md:text-6xl font-figtree-semibold tracking-tight leading-[1.1]">
              Sequencing{" "}
              <span className="font-playfair-semibold-italic italic text-neutral-300">
                frames
              </span>{" "}
              into <br />
              Digital{" "}
              <span className="font-playfair-semibold-italic italic text-orange-500">
                mixtapes
              </span>
              .
            </h2>
          </div>
          <div className="flex gap-10">
            <div className="group flex flex-col items-start gap-2">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                Technique
              </span>
              <div className="flex items-center gap-2 text-neutral-900 text-sm font-figtree-medium">
                <Camera size={16} className="text-orange-500" /> 8K Editorial
              </div>
            </div>
            <div className="group flex flex-col items-start gap-2">
              <span className="text-[10px] text-neutral-400 uppercase tracking-widest">
                Format
              </span>
              <div className="flex items-center gap-2 text-neutral-900 text-sm font-figtree-medium">
                <Film size={16} className="text-orange-500" /> Cinematic 24fps
              </div>
            </div>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          {/* Main Video Card */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-neutral-100 rounded-md shadow-sm"
          >
            <AnimatePresence>
              {!isPlaying ? (
                <motion.div
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20"
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                  <Image
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069"
                    alt="The Royal Union"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl text-white font-playfair-semibold-italic italic drop-shadow-md">
                      The Royal Union
                    </h3>
                    <p className="text-orange-500 text-xs uppercase tracking-[0.3em] mt-2 font-figtree-semibold">
                      Jaipur • 2026
                    </p>
                  </div>
                </motion.div>
              ) : (
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src="https://www.pexels.com/download/video/8776127/"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              )}
            </AnimatePresence>

            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-2xl pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isPlaying ? (
                  <Pause size={24} fill="white" />
                ) : (
                  <Play size={24} fill="white" className="ml-1" />
                )}
              </motion.button>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-4 md:row-span-2 p-12 flex flex-col justify-between border border-neutral-100 bg-neutral-50 relative overflow-hidden rounded-md"
          >
            <div className="absolute -right-4 -top-4 text-neutral-200/50 rotate-12">
              <Heart size={200} />
            </div>
            <div className="relative z-10">
              <Heart className="text-orange-500 mb-8" size={32} />
              <h4 className="text-2xl text-neutral-900 mb-6 font-figtree-semibold">
                Our{" "}
                <span className="italic font-playfair-semibold-italic">
                  Pulse
                </span>
              </h4>
              <p className="text-neutral-600 font-figtree-light leading-relaxed text-sm mb-8">
                We believe that every wedding is a live recording of a
                once-in-a-lifetime symphony. Our role is to master the audio and
                visual into a seamless mixtape.
              </p>
            </div>
            <ul className="hidden md:block space-y-4 relative z-10">
              {[
                "Atmospheric Audio",
                "Candid Sequences",
                "Artisanal Grading",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-[10px] text-neutral-900 uppercase tracking-widest font-figtree-medium"
                >
                  <span className="w-1.5 h-1.5 bg-orange-500 rounded-full shadow-[0_0_8px_rgba(249,115,22,0.4)]" />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Square Detail Image */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-md"
          >
            <AutoCarousel
              images={detailImages}
              interval={3500}
              imageClassName="transition-all duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 z-10 pointer-events-none" />
            <div className="absolute bottom-6 left-6 z-20 pointer-events-none">
              <span className="text-white text-xs uppercase tracking-widest font-figtree-medium">
                Detail & Grace
              </span>
            </div>
          </motion.div>

          {/* Wide Cinematic Image */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={itemVariants}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-md"
          >
            <AutoCarousel
              images={cinematicImages}
              interval={4000} // Slightly different interval so they don't sync up perfectly (looks more natural)
              imageClassName="opacity-90 group-hover:opacity-100 transition-all duration-700"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WeddingPortfolio;
