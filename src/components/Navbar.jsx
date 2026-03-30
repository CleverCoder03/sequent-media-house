"use client";
import React, { useEffect, useState, useCallback } from "react";
import { motion, useScroll } from "motion/react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./LogoSvg";
import Button from "./Button";
import { ManualTextRoll } from "./ManualTextRoll";
import { cn } from "@/lib/utils";

// ─── Inline Motion Link (replaces Link004) ───────────────────────────────────
const NavLink = ({ href, children}) => {
  return (
    <Link
      href={href}
      className={cn(
        "group relative flex items-center justify-center",
        "before:pointer-events-none before:absolute before:left-0 before:w-full before:bg-white before:content-['']",
        "before:origin-right before:scale-x-0 before:transition-all before:duration-300 before:ease-in-out",
        "before:origin-center md:before:bottom-0",
        "before:z-1 px-2 before:h-0 before:scale-x-100 before:mix-blend-difference hover:before:h-full"
      )}>
      {children}
    </Link>
  );
};

// ─── Animation variants ───────────────────────────────────────────────────────
const menuVariants = {
  closed: { opacity: 0 },
  open: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.2 },
  },
};

const itemVariants = {
  closed: { opacity: 0, y: 20, filter: "blur(10px)" },
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

const socialVariants = {
  closed: { opacity: 0, y: 30, filter: "blur(8px)" },
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: 0.55, ease: [0.22, 1, 0.36, 1] },
  },
};

// ─── Nav data ─────────────────────────────────────────────────────────────────
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/sequentmediahouse?igsh=emE4amhtYWl0bmxy",
    label: "Instagram",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Zm5.25-.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5Z" />
      </svg>
    ),
  },
  {
    href: "https://x.com",
    label: "X (Twitter)",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.294 19.497h2.039L6.486 3.24H4.298l13.31 17.41z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/company/sequent-media-house/",
    label: "LinkedIn",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="size-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.98 3.5A2.49 2.49 0 1 1 0 3.5a2.49 2.49 0 0 1 4.98 0ZM.25 8.01h4.5v13h-4.5v-13ZM8.75 8h4.31v1.77h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.88v7.7h-4.5v-6.82c0-1.63-.03-3.72-2.27-3.72-2.28 0-2.63 1.78-2.63 3.6v6.94h-4.5v-14Z" />
      </svg>
    ),
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function Navbar() {
  const pathName = usePathname();
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Scroll listener — cleaned up via returned unsubscribe
  useEffect(
    () =>
      scrollY.on("change", (latest) => setIsScrolled(latest > 50)),
    [scrollY]
  );

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const toggle = useCallback(() => setOpen((v) => !v), []);

  const hideHeader = isScrolled && !open;

  return (
    <>
      {/* ── Top bar ── */}
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-8 py-6 lg:px-12 lg:py-12 flex items-center justify-between gap-5 bg-transparent pointer-events-none"
      >
        {/* Logo + desktop CTA — fades out on scroll */}
        <motion.div
          animate={{ opacity: hideHeader ? 0 : 1, y: hideHeader ? -5 : 0 }}
          transition={{
            duration: 0.3,
            ease: [0.42, 0, 0.58, 1],
            delay: open ? 0.8 : 0,
          }}
          style={{ pointerEvents: hideHeader ? "none" : "auto" }}
          className="flex items-center justify-between w-full"
        >
          <Link href="/">
            <Logo className="h-8 w-auto text-neutral-100" />
          </Link>

          <div className={`hidden ${pathName !== "/contact" && "lg:block"}`}>
            <Button />
          </div>
        </motion.div>

        {/* Hamburger — always interactive */}
        <button
          onClick={toggle}
          aria-label={open ? "Close menu" : "Open menu"}
          className="relative w-9 h-9 rounded-full border-2 border-white/80 flex items-center justify-center text-white bg-transparent lg:mr-2 pointer-events-auto cursor-pointer"
        >
          <Menu
            size={20}
            strokeWidth={3}
            className={`absolute transition-all duration-300 ease-in-out ${
              open ? "opacity-0 rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <X
            size={20}
            strokeWidth={3}
            className={`absolute transition-all duration-300 ease-in-out ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-75"
            }`}
          />
        </button>
      </motion.nav>

      {/* ── Full-screen menu panel ── */}
      <div
        className={`fixed inset-0 w-full h-dvh z-40 ${
          open ? "pointer-events-auto" : "pointer-events-none"
        }`}
        style={{ perspective: "1000px" }}
      >
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: open ? 1 : 0 }}
          transition={{ duration: 0.8, ease: [0.42, 0, 0.58, 1] }}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          style={{ pointerEvents: open ? "auto" : "none" }}
        />

        {/* Panel */}
        <motion.div
          initial={{ y: "-100%", scale: 0.3, rotateX: 50, borderRadius: "48px" }}
          animate={{
            y: open ? "0%" : "-100%",
            scale: open ? 1 : 0.3,
            rotateX: open ? 0 : 50,
            borderRadius: open ? "0px" : "48px",
          }}
          transition={{ duration: 1, ease: [0.42, 0, 0.42, 0], bounce: 0 }}
          style={{ transformStyle: "preserve-3d" }}
          className="w-full h-dvh bg-neutral-900 flex flex-col items-center justify-center"
        >
          {/* Nav links */}
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="flex flex-col items-center justify-center flex-1 w-full text-center [&_span]:text-5xl gap-2 lg:gap-0 [&_div]:w-full lg:[&_span]:text-[6vh] lg:mt-20"
          >
            {NAV_LINKS.map((link, index) => (
              <motion.div
                key={link.href}
                variants={itemVariants}
                className={`border-b border-neutral-100/70 ${index === 0 ? "border-t" : ""} w-full`}
              >
                <NavLink
                  href={link.href}
                  isActive={pathName === link.href}
                  className={`text-neutral-100 text-3xl tracking-norma`}
                >
                  <div className="py-2">
                    <ManualTextRoll className={`px-2 font-playfair-bold-italic ${pathName === link.href ? "text-lime-theme" : "text-neutral-100"}`}>
                      {link.label}
                    </ManualTextRoll>
                  </div>
                </NavLink>
              </motion.div>
            ))}
          </motion.div>

          {/* Social icons */}
          <motion.div
            variants={socialVariants}
            initial="closed"
            animate={open ? "open" : "closed"}
            className="flex items-center gap-8 mb-10"
          >
            {SOCIAL_LINKS.map(({ href, label, icon }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
                className="text-neutral-100 hover:text-lime-theme transition-colors duration-200"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}