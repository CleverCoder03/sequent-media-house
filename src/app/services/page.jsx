"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { TextMask } from "@/components/TextMask";
import { stickyCardsData } from "@/constant/services";
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const ServicesPage = () => {
  const container = useRef(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray(".sticky-card");

      cards.forEach((card, i) => {
        if (i === cards.length - 1) return;

        // 1. Pinning Logic
        ScrollTrigger.create({
          trigger: card,
          start: "top top",
          endTrigger: cards[cards.length - 1],
          end: "top top",
          pin: true,
          pinSpacing: false,
        });

        // 2. Animation Logic
        const nextCard = cards[i + 1];
        ScrollTrigger.create({
          trigger: nextCard,
          start: "top bottom",
          end: "top top",
          onUpdate: (self) => {
            const progress = self.progress;

            gsap.set(card, {
              scale: 1 - progress * 0.25,
              rotation: i % 2 === 0 ? progress * 5 : -(progress * 5),
              "--overlay-opacity": progress,
            });
          },
        });
      });
      // Handle anchor links from other pages/same page
      const hash = window.location.hash;
      if (hash) {
        const target = document.querySelector(hash);
        if (target) {
          // Give the page a tiny bit of time to calculate all ScrollTriggers
          setTimeout(() => {
            const st = ScrollTrigger.create({
              trigger: target,
              start: "top top",
            });

            gsap.to(window, {
              scrollTo: st.start,
              duration: 1.2,
              ease: "power4.inOut",
            });

            st.kill(); // Clean up the temporary trigger
          }, 100);
        }
      }
    },
    { scope: container, dependencies: [] },
  );

  return (
    <>
      <main className="min-h-screen text-white font-sans overflow-hidden">
        <Navbar />

        {/* --- HERO SECTION --- */}
        <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
          {/* Optional background glow/gradient to make it pop */}
          {/* <div className="absolute inset-0 bg-linear-to-b from-zinc-900 to-black z-0"></div> */}
          <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
            >
              <source src="/footer-bg.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="absolute inset-0 bg-black/50"></div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
            {/* The Heading */}
            <h1 className="text-5xl md:text-8xl font-montserrat-semibold tracking-tight text-white">
              <TextMask
                text="The Spectrum"
                delay={0.1}
                stagger="0.12"
                once={false}
              />
            </h1>

            {/* The Subheading (starts slightly after the heading) */}
            <p className="text-lg md:text-2xl font-montserrat-regular text-neutral-300 max-w-2xl">
              <TextMask
                text="Six disciplines. One design philosophy"
                delay={0.5}
                once={false}
              />
            </p>
          </div>
        </section>
        {/* --- END HERO SECTION --- */}

        {/* GSAP Animation Container */}
        <div ref={container} className="w-full relative">
          {stickyCardsData.map((card, i) => (
            <div
              key={card.index}
              style={{ "--overlay-opacity": 0 }}
              className="sticky-card bg-black relative h-screen w-full flex flex-col overflow-hidden will-change-transform after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-(--overlay-opacity,0) after:z-10 after:pointer-events-none after:transition-opacity after:duration-100 after:ease-out"
              id={card.id}
            >
              {/* TOP BAR: Index and Main Title */}
              <div className="flex justify-between items-end p-5 md:p-8 border-b border-white/10">
                <div>
                  {/* <span className="text-lime-400 font-mono text-sm tracking-widest uppercase mb-2 block">
                    Phase 0{card.index}
                  </span> */}
                  <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">
                    {card.title}
                  </h2>
                </div>
                <div className="hidden md:block text-right max-w-xs">
                  <p className="text-xs uppercase tracking-[0.2em] text-lime-theme leading-relaxed">
                    {card.subtitle}
                  </p>
                </div>
              </div>

              {/* MAIN CONTENT GRID */}
              <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-0 px-6 md:px-10 items-center overflow-hidden">
                {/* LEFT SIDE: Text Content (Offset for luxury feel) */}
                <div className="lg:col-span-6 xl:col-span-4 lg:pl-10 space-y-2 lg:space-y-12 z-20 order-2 lg:order-1">
                  <div className="space-y-6">
                    {/* Increased font size and tighter tracking for a premium look */}
                    <h3 className="text-3xl md:text-[36px] lg:text-[40px] xl:text-5xl font-light text-white/90 leading-[1.1] tracking-tight">
                      {card.tagline}
                    </h3>
                    <p className="text-gray-400 text-base  xl:text-xl leading-relaxed max-w-md border-l border-lime-400/30 pl-6">
                      {card.description}
                    </p>
                  </div>

                  {/* Expertise List */}
                  <div className="pt-6 lg:pt-0 relative">
                    <p className="text-lime-400 text-[10px] md:text-xs font-bold uppercase tracking-[0.4em] mb-6">
                      {card.listTitle}
                    </p>
                    <ul className="grid grid-cols-2 lg:grid-cols-1 gap-x-4 gap-y-3">
                      {card.listItems.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-300 text-xs md:text-sm xl:text-base flex items-center gap-3 group"
                        >
                          <span className="w-1.5 h-[1px] bg-lime-400 shrink-0 transition-all group-hover:w-4" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* RIGHT SIDE: Strategic Video Composition */}
                <div className="lg:col-span-6 xl:col-span-8 relative w-full h-full flex items-center justify-center lg:justify-end order-1 lg:order-2 md:hidden lg:flex">
                  {/* Video Container - Maintaining the same width/aspect ratio as your previous image layout */}
                  <div className="relative w-full lg:w-[85%] xl:w-[95%] aspect-video">
                    {/* Main Video Wrapper */}
                    <div className="relative w-full h-full z-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden rounded-sm border border-white/10">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out hover:scale-105"
                        // Dynamically pull the video source from your card data
                        // Ensure your stickyCardsData objects have a 'video' property
                        src={card.video}
                      >
                        Your browser does not support the video tag.
                      </video>

                      {/* Subtle Overlay to match the previous aesthetic */}
                      <div className="absolute inset-0 bg-black/10 pointer-events-none" />
                    </div>

                    {/* Modern Decorative Element (Preserved from your original design) */}
                    <div className="hidden xl:block absolute -top-8 -right-8 w-32 h-32 border-t border-r border-white/10 z-0" />

                    {/* Bottom decorative accent (Replacing the second image's position with a stylized frame) */}
                    <div className="hidden lg:block absolute -bottom-4 -left-4 w-1/2 h-1/2 border-b border-l border-lime-400/20 z-0" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
};

export default ServicesPage;
