"use client";
import Image from "next/image";
import React, { useState, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Marquee from "react-fast-marquee";
import MarqueeIcon from "@/components/MarqueeIcon";

const teamMembers = [
  { src: "/0-about-1.jpeg", name: "Namrataa Dwarakanath", role: "Founder" },
  { src: "/0-about-2.jpeg", name: "Manogjnaa Dwarakanath", role: "Co-founder" },
  {
    src: "/0-about-3.jpeg",
    name: "Sharath Kumar Basavaraju",
    role: "Director & Business Development Head",
  },
  { src: "/0-about-1.jpeg", name: "RACHEL", role: "Graphic designer" },
  { src: "/0-about-2.jpeg", name: "MATT", role: "Web developer" },
  { src: "/0-about-3.jpeg", name: "JAMES", role: "Web developer" },
  { src: "/0-about-1.jpeg", name: "MARK", role: "Event head" },
  { src: "/0-about-2.jpeg", name: "ANNABELLE", role: "Photographer" },
];

const TeamCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [isPaused, setIsPaused] = useState(false); // To pause auto-rotate on hover
  const total = teamMembers.length;

  const goToSlide = useCallback(
    (index) => {
      const newIndex = (index + total) % total;
      setCurrentIndex(newIndex);
    },
    [total],
  );

  // --- AUTO ROTATE LOGIC ---
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      goToSlide(currentIndex + 1);
    }, 3500); // Rotates every 3.5 seconds
    return () => clearInterval(interval);
  }, [currentIndex, isPaused, goToSlide]);

  const getAt = (offset) =>
    teamMembers[(currentIndex + offset + total) % total];

  const current = getAt(0);
  const prev = getAt(-1);
  const prePrev = getAt(-2);
  const next = getAt(1);
  const nextNext = getAt(2);

  // Swipe Logic
  const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const touchEnd = e.changedTouches[0].clientX;
    if (touchStart - touchEnd > 50) goToSlide(currentIndex + 1);
    if (touchStart - touchEnd < -50) goToSlide(currentIndex - 1);
    setTouchStart(null);
  };

  useGSAP(() => {
    gsap.fromTo(
      ".teamIMG",
      { xPercent: -5, opacity: 0.5 },
      { xPercent: 0, opacity: 1, duration: 0.5, ease: "power2.out" },
    );
    gsap.fromTo(
      ".details h2, .details p",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
    );
  }, [currentIndex]);

  return (
    <div
      className="py-6 lg:py-10 bg-lime-500 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <Marquee
        speed={80}
        className="font-figtree-semibold text-[12vw] lg:text-[7vw] text-neutral-900 mb-4"
      >
        MEET THE TEAM <MarqueeIcon variant={1} className="mx-5" />
        MEET THE TEAM <MarqueeIcon variant={2} className="mx-5" />
      </Marquee>

      <section
        className="w-full py-4 text-black relative touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* IMAGES CONTAINER - Reduced Sizing */}
        <div className="flex items-center justify-center gap-3 md:gap-6 px-4">
          {/* Outer Left (Smallest) */}
          <div className="hidden xl:block w-[140px] h-[200px] relative grayscale opacity-40 shrink-0 transition-all duration-500">
            <Image
              src={prePrev.src}
              alt=""
              fill
              className="object-cover rounded-lg teamIMG"
            />
          </div>

          {/* Inner Left */}
          <div className="hidden sm:block w-[120px] h-[180px] md:w-[180px] md:h-[260px] relative grayscale opacity-60 shrink-0 transition-all duration-500">
            <Image
              src={prev.src}
              alt=""
              fill
              className="object-cover rounded-lg teamIMG"
            />
          </div>

          {/* CENTER FOCUS IMAGE - Reduced from 350px to 300px on mobile */}
          <div className="w-[240px] h-[320px] md:w-[300px] md:h-[400px] relative grayscale-0 shrink-0 z-10 shadow-xl scale-105 md:scale-110">
            <Image
              src={current.src}
              alt={current.name}
              fill
              className="object-cover rounded-xl teamIMG border-2 border-black/10"
              priority
            />
          </div>

          {/* Inner Right */}
          <div className="hidden sm:block w-[120px] h-[180px] md:w-[180px] md:h-[260px] relative grayscale opacity-60 shrink-0 transition-all duration-500">
            <Image
              src={next.src}
              alt=""
              fill
              className="object-cover rounded-lg teamIMG"
            />
          </div>

          {/* Outer Right (Smallest) */}
          <div className="hidden xl:block w-[140px] h-[200px] relative grayscale opacity-40 shrink-0 transition-all duration-500">
            <Image
              src={nextNext.src}
              alt=""
              fill
              className="object-cover rounded-lg teamIMG"
            />
          </div>
        </div>

        {/* NAME + ROLE */}
        <div className="text-center mt-12 details px-6 pointer-events-none">
          <h2 className="text-xl md:text-2xl font-bold tracking-tight uppercase leading-tight">
            {current.name}{" "}
            {current.lastName && (
              <span className="block md:inline">{current.lastName}</span>
            )}
          </h2>
          <p className="text-sm md:text-base mt-1 opacity-80 font-medium uppercase tracking-widest text-neutral-800">
            {current.role}
          </p>
        </div>

        {/* ARROWS */}
        <div className="absolute inset-y-0 w-full flex justify-between items-center px-2 md:px-10 pointer-events-none">
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="pointer-events-auto bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-transform active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              className="size-5 md:size-6"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="pointer-events-auto bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition-transform active:scale-90"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="black"
              strokeWidth="3"
              className="size-5 md:size-6 rotate-180"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
      </section>
    </div>
  );
};

export default TeamCarousel;
