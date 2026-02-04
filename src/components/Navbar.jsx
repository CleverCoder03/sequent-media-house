"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./LogoSvg";
import Marquee from "react-fast-marquee";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // fade + move up on scroll
  const opacity = useTransform(scrollY, [0, 80], [1, 0]);
  const translateY = useTransform(scrollY, [0, 80], [0, -20]);

  return (
    <>
      {/* TOP NAV */}
      <motion.nav
        // style={{ opacity, y: translateY }}
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between gap-5 bg-transparent "
      >
        <motion.div
          style={{
            opacity: open ? 1 : opacity,
            y: open ? 0 : translateY,
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex items-center justify-between w-full transition-all duration-300 ease-in-out"
        >
          {/* Brand */}
          <div className="flex flex-col lg:flex-row items-center lg:gap-2 pointer-events-auto cursor-pointer">
            <Logo className="h-8 w-auto text-white"/>
          </div>

          {/* CONTACT BUTTON (desktop) */}
          <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" relative overflow-hidden px-6 py-2 rounded-full
                        text-xs lg:text-sm font-bold uppercase tracking-widest
                        shadow-lg transition lg:px-8 
                        text-white bg-[#FF5C00]
                        hidden lg:block cursor-pointer

                        before:content-['']
                        before:absolute before:inset-0
                        before:bg-white before:rounded-full
                        before:scale-0 before:origin-center
                        before:transition-transform before:duration-300
                        before:z-0

                        hover:before:scale-100
                        hover:text-[#FF5C00]"
            >
              <span className="relative z-10">Contact</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* HAMBURGER (Lucide) — always visible */}
        <button
  onClick={() => setOpen(!open)}
  className="relative w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center text-white bg-transparent lg:mr-2 pointer-events-auto cursor-pointer"
>
  {/* Menu icon */}
  <Menu
    size={20}
    strokeWidth={3}
    className={`absolute transition-all duration-300 ease-in-out
      ${open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"}
    `}
  />

  {/* X icon */}
  <X
    size={20}
    strokeWidth={3}
    className={`absolute transition-all duration-300 ease-in-out
      ${open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"}
    `}
  />
</button>
      </motion.nav>

      {/* SLIDE-DOWN MENU */}
      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: open ? "0%" : "-100%" }}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="fixed inset-0 w-full h-dvh bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-between gap-10"
      >
        <div className="flex flex-col items-center justify-center mt-[20vh] w-full ">
          <a
          className="text-white text-3xl font-bold uppercase tracking-wider"
          href="#"
        >
          Home
        </a>
        <a
          className="text-white text-3xl font-bold uppercase tracking-wider"
          href="#"
        >
          Services
        </a>
        <a
          className="text-white text-3xl font-bold uppercase tracking-wider"
          href="#"
        >
          Work
        </a>
        <a
          className="text-white text-3xl font-bold uppercase tracking-wider"
          href="#"
        >
          Wedding
        </a>
        <a
          className="text-white text-3xl font-bold uppercase tracking-wider"
          href="#"
        >
          Contact
        </a>
        </div>
        <Marquee className="font-playfair-bold-italic text-[9vw] text-white">
          Sequent Media House
        </Marquee>
      </motion.div>
    </>
  );
}
