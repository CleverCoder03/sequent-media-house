"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Heart, Camera, Film, Pause } from "lucide-react";

const WeddingPortfolio = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }
    })
  };

  return (
    <section className="bg-[#050505] py-12 lg:py-32 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8 border-b border-white/5 pb-12">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-lime-theme font-figtree-medium uppercase tracking-[0.4em] text-[10px] mb-4 block"
            >
              Curated Masterpieces
            </motion.span>
            <h2 className="text-white text-5xl md:text-6xl font-figtree-semibold tracking-tight leading-[1.1]">
              Sequencing <span className="font-playfair-semibold-italic italic text-white/50">frames</span> into <br />
              Digital <span className="font-playfair-semibold-italic italic text-lime-theme">mixtapes</span>.
            </h2>
          </div>
          <div className="flex gap-10">
            <div className="group flex flex-col items-start gap-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Technique</span>
              <div className="flex items-center gap-2 text-white text-sm">
                <Camera size={16} className="text-lime-theme" /> 8K Editorial
              </div>
            </div>
            <div className="group flex flex-col items-start gap-2">
              <span className="text-[10px] text-gray-500 uppercase tracking-widest">Format</span>
              <div className="flex items-center gap-2 text-white text-sm">
                <Film size={16} className="text-lime-theme" /> Cinematic 24fps
              </div>
            </div>
          </div>
        </div>

        {/* --- BENTO GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px] md:auto-rows-[250px]">
          
          {/* Main Video Card */}
          <motion.div 
            custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden bg-zinc-900 rounded-md"
          >
            <AnimatePresence>
              {!isPlaying ? (
                <motion.div 
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-20"
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                  <Image 
                    src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069" 
                    alt="The Royal Union"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute bottom-8 left-8">
                    <h3 className="text-3xl text-white font-playfair-semibold-italic italic">The Royal Union</h3>
                    <p className="text-lime-theme text-xs uppercase tracking-[0.3em] mt-2">Jaipur • 2026</p>
                  </div>
                </motion.div>
              ) : (
                <motion.video
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  src="https://www.pexels.com/download/video/8776127/" // Replace with your actual wedding film URL
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-10"
                />
              )}
            </AnimatePresence>

            {/* Custom Control Overlay */}
            <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
              <motion.button
                onClick={() => setIsPlaying(!isPlaying)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 rounded-full bg-lime-theme flex items-center justify-center text-black shadow-2xl pointer-events-auto opacity-0 group-hover:opacity-100 transition-opacity"
              >
                {isPlaying ? <Pause size={24} fill="black" /> : <Play size={24} fill="black" className="ml-1" />}
              </motion.button>
            </div>
          </motion.div>

          {/* Philosophy Card */}
          <motion.div 
            custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
            className="md:col-span-4 md:row-span-2 p-12 flex flex-col justify-between border border-white/10 bg-[#0A0A0A] relative overflow-hidden rounded-md"
          >
            <div className="absolute -right-4 -top-4 opacity-[0.03] rotate-12">
               <Heart size={200} />
            </div>
            <div className="relative z-10">
              <Heart className="text-lime-theme mb-8" size={32} />
              <h4 className="text-2xl text-white mb-6 font-figtree-semibold">Our <span className="italic font-playfair-semibold-italic">Pulse</span></h4>
              <p className="text-gray-400 font-figtree-light leading-relaxed text-sm mb-8">
                We believe that every wedding is a live recording of a once-in-a-lifetime symphony. Our role is to master the audio and visual into a seamless mixtape.
              </p>
            </div>
            <ul className="hidden md:block space-y-4 relative z-10">
              {['Atmospheric Audio', 'Candid Sequences', 'Artisanal Grading'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-[10px] text-white/60 uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-lime-theme rounded-full shadow-[0_0_8px_#bef264]" /> {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Square Detail Image */}
          <motion.div 
            custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
            className="md:col-span-4 md:row-span-2 relative group overflow-hidden rounded-md"
          >
            <Image 
              src="https://images.unsplash.com/photo-1544577080-91762bc7f475?q=80&w=2338" 
              alt="Detail Shot"
              fill
              className="object-cover lg:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
            <div className="absolute bottom-6 left-6">
               <span className="text-white text-xs uppercase tracking-widest">Detail & Grace</span>
            </div>
          </motion.div>

          {/* Wide Cinematic Image */}
          <motion.div 
            custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={itemVariants}
            className="md:col-span-8 md:row-span-2 relative group overflow-hidden rounded-md"
          >
            <Image 
              src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=2070" 
              alt="Cinematic Ceremony"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-all duration-700"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WeddingPortfolio;