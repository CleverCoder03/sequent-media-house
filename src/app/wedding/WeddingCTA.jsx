"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WeddingCTA = () => {
  return (
    <section className="relative py-24 bg-[#050505] border-t border-white/5">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-6 text-center"
      >

        {/* <h2 className="text-white text-4xl md:text-5xl font-figtree-semibold leading-tight tracking-tight mb-10">
          Ready to <span className="font-playfair-semibold-italic italic text-lime-theme">sequence</span> <br />
          your <span className="font-playfair-semibold-italic italic">legacy?</span>
        </h2> */}

        <div className="mb-10">
            <h1 className="text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            Ready to <span className="font-playfair-semibold-italic text-lime-theme italic lowercase">sequence</span>
          </h1>
          <h1 className="text-white text-5xl lg:text-7xl font-figtree-semibold leading-[1.1] tracking-tight">
            your <span className="font-playfair-semibold-italic text-lime-theme italic lowercase">legacy?</span> 
          </h1>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Link href={"/contact"}>
            <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative px-10 py-4 overflow-hidden rounded-full bg-white text-black transition-all duration-500"
          >
            {/* Hover fill effect */}
            <div className="absolute inset-0 bg-lime-theme translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            
            <div className="relative z-10 flex items-center gap-2">
              <span className="uppercase tracking-[0.2em] text-[10px] font-figtree-bold">
                Get an Enquiry
              </span>
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </motion.button>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingCTA;