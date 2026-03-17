"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

const WeddingFooter = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] } 
    },
  };

  return (
    <footer className="bg-[#050505] text-white pt-14 lg:pt-16 pb-8 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col"
        >
          {/* --- TOP: LARGE CTA --- */}
          {/* <motion.div variants={itemVariants} className="mb-24 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
            <div>
              <span className="text-orange-500 font-figtree-medium uppercase tracking-[0.4em] text-[10px] mb-6 block">
                The Final Cut
              </span>
              <h2 className="text-5xl md:text-7xl font-figtree-semibold tracking-tight leading-[1.1]">
                Ready to sequence <br />
                your <span className="font-playfair-semibold-italic italic text-neutral-400">legacy?</span>
              </h2>
            </div>
            
            <motion.a 
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center justify-center w-32 h-32 md:w-40 md:h-40 rounded-full bg-white text-neutral-900 overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-500 rounded-full scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-center" />
              <span className="relative z-10 font-figtree-semibold uppercase tracking-widest text-xs group-hover:text-white transition-colors duration-500">
                Inquire
              </span>
            </motion.a>
          </motion.div> */}

          {/* --- DIVIDER --- */}
          {/* <motion.div variants={itemVariants} className="w-full h-px bg-white/10 mb-12" /> */}

          {/* --- BOTTOM: LINKS & COPYRIGHT --- */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
            
            {/* Brand / Copy */}
            <motion.div variants={itemVariants} className="md:col-span-2 flex flex-col justify-between">
              <div>
                <Link href="/" className="text-2xl font-figtree-bold tracking-tighter">
                  SEQUENT MEDIA HOUSE
                </Link>
                <p className="text-neutral-500 text-sm mt-4 font-figtree-light max-w-xs leading-relaxed">
                  Cinematic wedding documentation blending raw emotion with editorial grace.
                </p>
              </div>
              <p className="text-neutral-600 text-[10px] uppercase tracking-widest mt-12 md:mt-0 font-figtree-medium">
                © {new Date().getFullYear()} Sequent Media House.
              </p>
            </motion.div>

            {/* Navigation */}
            <motion.div variants={itemVariants} className="flex flex-col gap-4">
              <span className="text-neutral-600 text-[10px] uppercase tracking-widest font-figtree-medium mb-2">Navigation</span>
              {['Home', 'About', 'Services', 'Work'].map((item) => (
                <Link key={item} href={`/${item == 'Home' ? "" : item.toLowerCase()}`} className="text-neutral-300 hover:text-orange-500 text-sm font-figtree-medium transition-colors w-fit">
                  {item}
                </Link>
              ))}
            </motion.div>

            {/* Socials & Top Button */}
            <motion.div variants={itemVariants} className="flex flex-col justify-between">
              <div className="flex flex-col gap-4">
                <span className="text-neutral-600 text-[10px] uppercase tracking-widest font-figtree-medium mb-2">Socials</span>
                {['Instagram', 'X (Twitter)', 'LinkedIn'].map((item) => (
                  <a key={item} href="#" target="_blank" rel="noreferrer" className="text-neutral-300 hover:text-orange-500 text-sm font-figtree-medium transition-colors w-fit">
                    {item}
                  </a>
                ))}
              </div>
              
              <button 
                onClick={scrollToTop}
                className="mt-12 md:mt-0 flex items-center gap-2 text-neutral-500 hover:text-white transition-colors text-xs uppercase tracking-widest font-figtree-medium w-fit group"
              >
                Back to top 
                <ArrowUp size={14} className="group-hover:-translate-y-1 transition-transform" />
              </button>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default WeddingFooter;