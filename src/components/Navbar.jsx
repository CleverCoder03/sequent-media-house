"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Menu } from "lucide-react";
import Link from "next/link";
import { X } from "lucide-react";
import Logo from "./LogoSvg";
import Marquee from "react-fast-marquee";
import { Link004 } from "./ui/skiper-ui/skiper40";
import { usePathname } from "next/navigation";
import Button from "./Button";
import LogoHoz from "./LogoHozSvg";
import { ManualTextRoll } from "./ManualTextRoll";

export default function Navbar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      if (latest > 50) setIsScrolled(true);
      else setIsScrolled(false);
    });
  }, [scrollY]);

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
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/work", label: "Work" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* TOP NAV */}
      <motion.nav className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between gap-5 bg-transparent">
        <motion.div
          animate={{
            opacity: isScrolled && !open ? 0 : 1,
            y: isScrolled && !open ? -5 : 0,
          }}
          transition={{
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1],
            delay: open ? 0.8 : 0,
          }}
          style={{
    pointerEvents: isScrolled && !open ? "none" : "auto",
  }}
          className="flex items-center justify-between w-full"
        >
          {/* Brand */}
          <Link href={"/"}>
            <Logo
              className="h-8 w-auto text-neutral-100"
              scrollY={scrollY}
              open={open}
            />
          </Link>

          {/* CONTACT BUTTON (desktop) */}
          <div className="hidden lg:block">
            <Button />
          </div>
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
        className={`fixed inset-0 w-full h-dvh flex items-center justify-center perspective-[1000px] z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        {/* Backdrop overlay - always rendered, animates with opacity */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 1, ease: [0.42, 0, 0.58, 1] }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm pointer-events-none"
          style={{
            pointerEvents: open ? "auto" : "none", // Only clickable when open
          }}
        />
        <motion.div
          initial={{ y: "-100%", rotateX: 0, rotateY: 0, borderRadius: "0px" }}
          animate={{
            y: open ? "0%" : "-100%",
            scale: open ? 1 : 0.3,
            rotateX: open ? 0 : 50,
            rotateY: 0,
            borderRadius: open ? "0px" : "48px",
          }}
          exit={{
            y: "-100%",
            scale: 0.3,
            rotateX: 50,
            opacity: 0,
            borderRadius: "48px",
          }}
          transition={{
            // type: "spring",
            bounce: 0,
            duration: 1,
            ease: [0.42, 0, 0.42, 0],
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full h-dvh bg-neutral-900 backdrop-blur-lg flex flex-col items-center justify-center z-35"
        >
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="flex flex-col items-center justify-center flex-1 w-full text-center [&_span]:text-5xl gap-2 lg:gap-0 [&_div]:w-full lg:[&_span]:pt-1 [&_span]:pt-1 lg:[&_span]:text-[6vh] lg:mt-20"
          >
            {navLinks.map((link, index) => (
              <motion.div key={index} variants={itemVariants} className={`border-b border-neutral-100/70 ${index === 0 ? "border-t" : ""} w-full`}>
                <Link004
                  href={link.href}
                  className={`text-neutral-100 text-3xl font-montserrat-semibold uppercase tracking-normal ${pathName === link.href ? "text-lime-theme" : ""}`}
                >
                  <div className="py-2">
                    <ManualTextRoll>
                    {link.label}
                  </ManualTextRoll>
                  </div>
                </Link004>
              </motion.div>
            ))}
          </motion.div>

          {/* SOCIAL ICONS */}
          <motion.div
            variants={itemVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="flex items-center gap-8 mb-10"
          >
            {/* Instagram */}
            <motion.a
              href="https://www.instagram.com/sequentmediahouse?igsh=emE4amhtYWl0bmxy"
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

            {/* facebook */}
            <motion.a
              href="https://x.com"
              target="_blank"
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.2 }}
              initial="closed"
              animate={open ? "open" : "closed"}
              className="text-neutral-100 hover:text-lime-theme transition-colors duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5" // Slightly smaller size looks better for the X weight
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
              </svg>
            </motion.a>

            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/company/sequent-media-house/"
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

          {/* Marquee */}
          <motion.div
            variants={marqueeVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="w-full mt-10 lg:-mb-3 hidden"
          >
            <Marquee>
              <div className="shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden md:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden md:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden lg:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden lg:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden xl:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
              <div className="hidden xl:block shrink-0 px-6">
                <LogoHoz className="h-12 w-auto min-w-max text-neutral-100" />
              </div>
            </Marquee>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  );
}
