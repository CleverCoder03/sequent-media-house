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
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathName = usePathname();
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
      <motion.nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between gap-5 bg-transparent">
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
            <Logo
              className="h-8 w-auto text-neutral-100"
              scrollY={scrollY}
              open={open}
            />
          </div>

          {/* CONTACT BUTTON (desktop) */}
          <Link href={"/contact"}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden px-6 py-2 rounded-full
                        text-xs lg:text-sm font-bold uppercase tracking-widest
                        shadow-lg transition lg:px-8 
                        text-neutral-900 bg-lime-theme
                        hidden lg:block cursor-pointer

                        before:content-['']
                        before:absolute before:inset-0
                        before:bg-neutral-100 before:rounded-full
                        before:scale-0 before:origin-center
                        before:transition-transform before:duration-300
                        before:z-0

                        hover:before:scale-100
                       "
            >
              <span className="relative z-10">Contact</span>
            </motion.button>
          </Link>
        </motion.div>

        {/* HAMBURGER (Lucide) — always visible */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-9 h-9 rounded-full border-2 border-neutral-100/80 flex items-center justify-center text-neutral-100 bg-transparent lg:mr-2 pointer-events-auto cursor-pointer"
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
        className="fixed inset-0 w-full h-dvh bg-neutral-900 backdrop-blur-lg z-40 flex flex-col items-center justify-center"
      >
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          className="flex flex-col items-center justify-center flex-1 w-full text-center [&_span]:text-5xl gap-2 lg:gap-0 [&_div]:w-full lg:[&_span]:pt-1 lg:[&_span]:pb-2 [&_span]:pt-1 [&_span]:pb-1  lg:[&_span]:text-[6vh] lg:mt-20"
        >
          {navLinks.map((link, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link004
                href={link.href}
                className={`text-neutral-100 text-3xl font-bold uppercase tracking-wider ${pathName === link.href ? "text-lime-theme" : ""}`}
              >
                <TextRoll
                  className={`border-b border-neutral-100/70 ${index === 0 ? "border-t" : ""} w-full`}
                >
                  {link.label}
                </TextRoll>
              </Link004>
            </motion.div>
          ))}
        </motion.div>

        {/* SOCIAL ICONS */}
        <motion.div
          variants={itemVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          className="flex items-center gap-8 mt-6"
        >
          {/* Instagram */}
          <motion.a
            href="https://instagram.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="text-neutral-100 hover:text-lime-theme transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
            </svg>
          </motion.a>

          {/* Twitter */}
          <motion.a
            href="https://twitter.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="text-neutral-100 hover:text-lime-theme transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24h11.495v-9.294H9.692V11.01h3.129V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.31h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
            </svg>
          </motion.a>

          {/* LinkedIn */}
          <motion.a
            href="https://linkedin.com"
            target="_blank"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 0.2 }}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="text-neutral-100 hover:text-lime-theme transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0ZM.25 8.01h4.5v13h-4.5v-13ZM8.75 8h4.31v1.77h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.88v7.7h-4.5v-6.82c0-1.63-.03-3.72-2.27-3.72-2.28 0-2.63 1.78-2.63 3.6v6.94h-4.5v-14Z" />
            </svg>
          </motion.a>
        </motion.div>

        {/* Marquee pinned to bottom with animation */}
        <motion.div
          variants={marqueeVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          className="w-full mt-auto lg:-mb-3"
        >
          <Marquee className="font-playfair-bold-italic text-[14vw] lg:text-[9vw] text-neutral-100">
            Sequent Media House &nbsp;
          </Marquee>
        </motion.div>
      </motion.div>
    </>
  );
}
