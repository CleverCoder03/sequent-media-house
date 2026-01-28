"use client"
import React from 'react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between bg-transparent pointer-events-none">
      {/* Brand Logo / Text */}
      <div className="flex flex-col lg:flex-row items-center lg:gap-2 pointer-events-auto">
        <span className="text-white font-bold text-xl lg:text-3xl tracking-tighter uppercase">
        Sequent
        </span>
        <span className="text-white/60 text-[10px] font-medium uppercase tracking-widest pt-1">
          Media House©
        </span>
      </div>

      {/* Action Button */}
      <div className="flex items-center gap-6 pointer-events-auto">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FF5C00] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg transition hover:bg-white hover:text-[#FF5C00] origin-center "
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
}