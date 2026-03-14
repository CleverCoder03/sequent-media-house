"use client";
import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const WeddingAbout = () => {
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive check for parallax
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth springs for the parallax to prevent jank
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 };
  
  // Disable transform (set to 0) if on mobile
  const y1Raw = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -150]);
  const y2Raw = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 : -300]);
  
  const y1 = useSpring(y1Raw, springConfig);
  const y2 = useSpring(y2Raw, springConfig);

  return (
    <section 
      ref={containerRef}
      className="relative bg-[#050505] overflow-hidden py-20 lg:py-0"
    >
      <div className="container mx-auto px-6 pt-12 lg:pt-40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12 items-center lg:items-start">
          
          {/* --- LEFT SIDE: TEXT CONTENT --- */}
          <div className="lg:col-span-5 z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-lime-theme font-figtree-medium uppercase tracking-[0.4em] text-[10px] mb-6 block">
                The Philosophy
              </span>
              <h2 className="text-white text-4xl lg:text-6xl font-figtree-semibold leading-tight mb-8">
                Capturing <span className="italic font-playfair-semibold-italic text-white">silence</span> between the <span className="text-lime-theme font-playfair-semibold-italic italic">sounds</span>.
              </h2>
              <div className="space-y-6 text-gray-400 font-figtree-light text-base lg:text-lg leading-relaxed">
                <p>
                  At Sequent, we don’t follow a template. Every wedding is its own 
                  unique <span className="text-white">mixtape of emotions</span>. 
                  We focus on the unscripted moments that define your legacy.
                </p>
                <p>
                  Our approach blends the high-paced energy of modern cinematography 
                  with a deep respect for traditional aesthetics.
                </p>
              </div>

              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 group flex items-center gap-4 text-white uppercase tracking-[0.2em] text-xs font-figtree-semibold"
              >
                <span className="w-12 h-px bg-lime-theme group-hover:w-16 transition-all duration-500" />
                Experience our craft
              </motion.button>
            </motion.div>
          </div>

          {/* --- RIGHT SIDE: CREATIVE IMAGE LAYOUT --- */}
          {/* On mobile, we give this a fixed height so absolute children don't collapse it */}
          <div className="lg:col-span-7 relative h-[500px] md:h-[600px] lg:min-h-[800px] w-full mt-10 lg:mt-0">
            
            {/* Main Floating Image */}
            <motion.div 
              style={{ y: y1 }}
              className="absolute top-0 right-0 w-[85%] lg:w-[70%] aspect-[4/5] overflow-hidden rounded-md border border-white/10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069" 
                alt="Wedding Cinema" 
                fill
                className="object-cover lg:grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </motion.div>

            {/* Smaller Overlapping Image */}
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-4 left-0 lg:bottom-0 w-[60%] lg:w-[50%] aspect-square overflow-hidden rounded-md border border-white/10 z-20 shadow-2xl"
            >
              <Image 
                src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2338" 
                alt="Detail Shot" 
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Decorative Element - hidden on mobile for cleaner look */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[1px] bg-white/5 rotate-[-45deg] pointer-events-none" />
          </div>

        </div>
      </div>

      {/* Background Text */}
      <div className="pointer-events-none select-none overflow-hidden w-full mt-20 lg:mt-0">
        <h3 className="text-[20vw] font-figtree-semibold text-white/[0.03] whitespace-nowrap leading-none lg:-ml-20">
          SEQUENT STORIES — SEQUENT STORIES
        </h3>
      </div>
    </section>
  );
};

export default WeddingAbout;