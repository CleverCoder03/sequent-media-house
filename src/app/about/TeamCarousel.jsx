"use client";
import Image from "next/image";
import React, { useState } from "react";
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
    lastName: "WILSON",
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
  const total = teamMembers.length;

  const goToSlide = (index) => {
    const newIndex = (index + total) % total;
    setCurrentIndex(newIndex);
  };

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
    if (touchStart - touchEnd > 50) goToSlide(currentIndex + 1); // Swipe Left
    if (touchStart - touchEnd < -50) goToSlide(currentIndex - 1); // Swipe Right
    setTouchStart(null);
  };

  useGSAP(() => {
    // Keep animations snappy for responsive feel
    gsap.fromTo(
      ".teamIMG",
      { xPercent: -5 },
      { xPercent: 0, duration: 0.4, ease: "power2.out" },
    );
    gsap.fromTo(
      ".details h2, .details p",
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0, duration: 0.4, stagger: 0.1 },
    );
  }, [currentIndex]);

  return (
    <>
      <Marquee
        speed={120}
        className="font-figtree-semibold text-[14vw] lg:text-[8vw] text-neutral-900 bg-lime-500 pt-8 lg:pt-15"
      >
        MEET THE TEAM
        <MarqueeIcon variant={1} className="mx-5" /> MEET THE TEAM{" "}
        <MarqueeIcon variant={2} className="mx-5" /> MEET THE TEAM{" "}
        <MarqueeIcon variant={3} className="mx-5" /> MEET THE TEAM{" "}
        <MarqueeIcon variant={4} className="mx-5" /> MEET THE TEAM{" "}
        <MarqueeIcon variant={5} className="mx-5" /> MEET THE TEAM{" "}
        <MarqueeIcon variant={1} className="mx-5" />
      </Marquee>
      <section
        className="w-full py-12 md:py-20 bg-lime-500 text-black relative overflow-hidden touch-pan-y"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* IMAGES CONTAINER */}
        <div className="flex items-center justify-center gap-4 md:gap-10 px-4">
          {/* HIDE OUTER IMAGES ON MOBILE (Hidden below 'md') */}
          <div className="hidden lg:block w-[180px] h-[250px] relative grayscale opacity-30 shrink-0">
            <Image
              src={prePrev.src}
              alt=""
              fill
              className="object-cover rounded teamIMG"
            />
          </div>

          <div className="hidden md:block w-[150px] h-[220px] lg:w-[200px] lg:h-[280px] relative grayscale opacity-60 shrink-0">
            <Image
              src={prev.src}
              alt=""
              fill
              className="object-cover rounded teamIMG"
            />
          </div>

          {/* CENTER BIG IMAGE (Responsive Sizing) */}
          <div className="w-[280px] h-[350px] md:w-[350px] md:h-[420px] relative grayscale shrink-0 z-10 shadow-2xl">
            <Image
              src={current.src}
              alt={current.name}
              fill
              className="object-cover rounded teamIMG"
              priority
            />
          </div>

          <div className="hidden md:block w-[150px] h-[220px] lg:w-[200px] lg:h-[280px] relative grayscale opacity-60 shrink-0">
            <Image
              src={next.src}
              alt=""
              fill
              className="object-cover rounded teamIMG"
            />
          </div>

          <div className="hidden lg:block w-[180px] h-[250px] relative grayscale opacity-30 shrink-0">
            <Image
              src={nextNext.src}
              alt=""
              fill
              className="object-cover rounded teamIMG"
            />
          </div>
        </div>

        {/* NAME + ROLE */}
        <div className="text-center mt-8 md:mt-10 details px-6 pointer-events-none">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-wide uppercase">
            {current.name} {current.lastName && <span>{current.lastName}</span>}
          </h2>
          <p className="text-base md:text-lg mt-1 md:mt-2 opacity-70 italic">
            {current.role}
          </p>
        </div>

        {/* ARROWS (Hidden or smaller on mobile to prevent overlap) */}
        <div className="absolute inset-y-0 w-full flex justify-between items-center px-4 md:px-10 pointer-events-none">
          <button
            onClick={() => goToSlide(currentIndex - 1)}
            className="pointer-events-auto bg-white/80 hover:bg-white/60 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <div className="relative size-8 md:size-10">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="black" // Sets the color to black
                strokeWidth="2.5"
                strokeLinecap="square"
                className="w-full h-full"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          <button
            onClick={() => goToSlide(currentIndex + 1)}
            className="pointer-events-auto bg-white/80 hover:bg-white/60 p-2 rounded-full backdrop-blur-sm transition-all"
          >
            <div className="relative size-8 md:size-10 rotate-180">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="black" // Sets the color to black
                strokeWidth="2.5"
                strokeLinecap="square"
                className="w-full h-full"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Indicator */}
        {/* <div className="flex justify-center gap-2 mt-6 md:hidden">
        {teamMembers.map((_, i) => (
          <div key={i} className={`h-1.5 w-1.5 rounded-full ${i === currentIndex ? 'bg-black' : 'bg-black/20'}`} />
        ))}
      </div> */}
      </section>
    </>
  );
};

export default TeamCarousel;
