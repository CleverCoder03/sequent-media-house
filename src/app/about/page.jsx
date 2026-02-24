"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import AboutIntro from "./AboutIntro";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const mainContainer = useRef(null);
  const HeroH1Ref = useRef(null);
  const HeroH2Ref = useRef(null);
  const overlayRef = useRef(null);
  const exLyFi = useRef(null);
  const introTextRef = useRef(null); // Ref for the text masking

  useGSAP(
    () => {
      // ---- INITIAL STATES ----
      gsap.set(HeroH1Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(HeroH2Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(".intro-line", { yPercent: 105 }); // Hide all lines below their respective masks
      gsap.set(".why-text", { yPercent: 105, scale: 1 }); // Hide WHY? initially

      // ---- MAIN SEQUENCE ----
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "bottom+=100% center+=200px",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(HeroH1Ref.current, {
        scale: 3, // Normalized from your isMobile logic for simplicity
        yPercent: -500,
        duration: 1,
        ease: "power2.inOut",
      })
        .to(
          HeroH2Ref.current,
          {
            scale: 3,
            yPercent: 500,
            duration: 1,
            ease: "power2.inOut",
          },
          "<", // Starts at the same time as the H1 animation
        )
        .to(
          overlayRef.current,
          {
            backgroundColor: "rgba(0, 0, 0, 1)",
            duration: 1,
            ease: "power2.inOut",
          },
          "<", // Starts at the same time
        )
        .to(
          exLyFi.current,
          {
            height: "100dvh",
            duration: 0.5,
          },
          "0.15",
        )
        // 1. REVEAL LINES: Staggered from bottom to top
        .to(
          ".intro-line",
          {
            yPercent: 0,
            duration: 0.6,
            stagger: 0.2, // Time gap between each line starting
            ease: "power3.out",
          },
          "-=0.5",
        )
        // 2. EXIT LINES: Staggered from current position to above the mask
        .to(".intro-line", {
          yPercent: -105,
          duration: 0.3,
          stagger: 0.05,
          ease: "power3.in",
        }) // Brief pause for readability
        // REVEAL "WHY?" - Starts at the same time as the lines exit
        .to(
          ".why-text",
          {
            yPercent: 0,
            // duration: 1,
            ease: "power3.in",
          },
          "<",
        )
        // OPTIONAL: Exit "WHY?"
        // .to(
        //   ".why-text",
        //   {
        //     scale: 1.8,
        //     duration: 0.5,
        //     ease: "power3.in",
        //   },
        // );
    },
    { scope: mainContainer },
  );

  return (
    <div ref={mainContainer}>
      <Navbar />
      <div className="h-dvh w-full text-white flex justify-center items-center relative overflow-hidden">
        <Hero ref={HeroH1Ref} HeroH2Ref={HeroH2Ref} overlayRef={overlayRef} />
        <AboutIntro exLyFi={exLyFi} textRef={introTextRef} />
      </div>
      <Footer />
    </div>
  );
};

export default AboutPage;
