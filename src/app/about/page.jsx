"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Hero from "./Hero";
import AboutIntro from "./AboutIntro";
import MediaSection from "./MediaSection";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const mainContainer = useRef(null);
  const HeroH1Ref = useRef(null);
  const HeroH2Ref = useRef(null);
  const overlayRef = useRef(null);
  const exLyFi = useRef(null);
  const introTextRef = useRef(null); // Ref for the text masking
  const whyContainerRef = useRef(null)
  const exLySe = useRef(null)
  const enImg = useRef(null)
  const scText = useRef(null)

  useGSAP(
    () => {
      // ---- INITIAL STATES ----
      gsap.set(HeroH1Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(HeroH2Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(".intro-line", { yPercent: 105 }); // Hide all lines below their respective masks
      gsap.set(".why-text", { yPercent: 105, scale: 1 }); // Hide WHY? initially
      gsap.set(whyContainerRef.current, {scale: 1})

      gsap.set(enImg.current, {scale: 2})
      gsap.set(scText.current, {xPercent: 100})

      // ---- MAIN SEQUENCE ----
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "bottom+=300% center+=200px",
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
            ease: "power1.out"
          },
          "0.15",
        )
        // 1. REVEAL LINES: Staggered from bottom to top
        .to(
          ".intro-line",
          {
            yPercent: 0,
            duration: 1.5,
            stagger: 0.2, // Time gap between each line starting
            ease: "power3.out",
          },
          // "-=0.2",
        )
        // 2. EXIT LINES: Staggered from current position to above the mask
        .to(".intro-line", {
          yPercent: -105,
          duration: 1,
          stagger: 0.05,
          ease: "power3.in",
        }, "+=0.2")
        // REVEAL "WHY?" - Starts at the same time as the lines exit
        .to(
          ".why-text",
          {
            yPercent: 0,
            duration: 1,
            ease: "power3.out",
          },
          // ">",
        )
        // OPTIONAL: Exit "WHY?"
        // .to(
        //   ".why-text",
        //   {
        //     scale: 1.2,
        //     duration: 0.5,
        //     ease: "power3.in",
        //   },
        // )
        .to(whyContainerRef.current, {
          scale: 2.2,
          duration: 1,
          ease: "power2.inOut"
        }, ">")
        .to(
          exLySe.current,
          {
            height: "100dvh",
            duration: 1,
            ease: "power3.inOut"
          },
          "<",
        ).to(
          enImg.current, {
            scale: 0.2,
            duration: 5,
          }, "<"
        ).to(
          scText.current, {
            xPercent: -37,
            duration: 5
          }, "<"
        )
    },
    { scope: mainContainer },
  );

  return (
    <main>
      <Navbar />
      <div ref={mainContainer} className="h-dvh w-full relative overflow-hidden">
        <Hero ref={HeroH1Ref} HeroH2Ref={HeroH2Ref} overlayRef={overlayRef} />
        <AboutIntro exLyFi={exLyFi} textRef={introTextRef} whyContainerRef={whyContainerRef} />
        <MediaSection exLySe={exLySe} enImg={enImg} scText={scText} />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
