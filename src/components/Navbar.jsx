"use client";
import React, { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./LogoSvg";
import Marquee from "react-fast-marquee";
import { Link004 } from "./ui/skiper-ui/skiper40";
import { TextRoll } from "./ui/skiper-ui/skiper58";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  // fade + move up on scroll
  const opacity = useTransform(scrollY, [0, 80], [1, 0]);
  const translateY = useTransform(scrollY, [0, 80], [0, -20]);

  // Animation variants for nav links
  const menuVariants = {
    closed: {
      opacity: 0,
    },
    open: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    closed: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1], // Custom easing for smooth motion
      },
    },
  };

  const marqueeVariants = {
    closed: {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    },
    open: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        delay: 0.7, // Appears after all nav items
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* TOP NAV */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between gap-5 bg-transparent"
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
            <Logo className="h-8 w-auto text-white" scrollY={scrollY} open={open} />
          </div>

          {/* CONTACT BUTTON (desktop) */}
          <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-6 py-2 rounded-full
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
        className="fixed inset-0 w-full h-dvh bg-black/90 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
      >
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          className="flex flex-col items-center justify-center flex-1 w-full text-center [&_span]:text-5xl gap-2 lg:gap-0 [&_div]:w-full lg:[&_span]:pb-1  lg:[&_span]:text-6xl"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link004
                href={link.href}
                className="text-white text-3xl font-bold uppercase tracking-wider"
              >
                <TextRoll>{link.label}</TextRoll>
              </Link004>
            </motion.div>
          ))}
        </motion.div>

        {/* Marquee pinned to bottom with animation */}
        <motion.div
          variants={marqueeVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          className="w-full mt-auto lg:-mb-3"
        >
          <Marquee className="font-playfair-bold-italic text-[14vw] lg:text-[9vw] text-white">
            Sequent Media House &nbsp;
          </Marquee>
        </motion.div>
      </motion.div>
    </>
  );
}