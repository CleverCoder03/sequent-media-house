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
import SliderSection from "./SliderSection";
import { slides } from "@/constant/slides";
import TeamCarousel from "./TeamCarousel";

gsap.registerPlugin(ScrollTrigger);

const AboutPage = () => {
  const mainContainer = useRef(null);
  const HeroH1Ref = useRef(null);
  const HeroH2Ref = useRef(null);
  const overlayRef = useRef(null);
  const exLyFi = useRef(null);
  const introTextRef = useRef(null);
  const whyContainerRef = useRef(null);
  const exLySe = useRef(null);
  const enImg = useRef(null);
  const enImg2 = useRef(null);
  const scText = useRef(null);
  const exLyTh = useRef(null);
  const sliderRef = useRef(null);
  const sliderRatioRef = useRef({ start: 0, end: 1 });
  const bgImgsRef = useRef([]);

  useGSAP(
    () => {
      // Scatter images far off-screen from the center
      // 0: Top-Left, 1: Top-Right, 2: Bottom-Right, 3: Bottom-Left, 4: Far Left, 5: Far Right
      const scatterPositions = [
        { x: "-100vw", y: "-100vh" },
        { x: "100vw", y: "-100vh" },
        { x: "100vw", y: "100vh" },
        { x: "-100vw", y: "100vh" },
        { x: "-120vw", y: "0" },
        { x: "120vw", y: "0" },
      ];

      // ---- INITIAL STATES ----
      gsap.set(HeroH1Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(HeroH2Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(".intro-line", { yPercent: 105 });
      gsap.set(".why-text", { yPercent: 105, scale: 1 });
      gsap.set(whyContainerRef.current, { scale: 1 });
      gsap.set(enImg.current, { scale: 2 });
      gsap.set(enImg2.current, { scale: 2 });
      gsap.set(scText.current, { xPercent: 100 });
      bgImgsRef.current.forEach((img, i) => {
        gsap.set(img, {
          x: scatterPositions[i].x,
          y: scatterPositions[i].y,
          scale: 2, // Start large for depth
          opacity: 1, // Kept at 1 as requested
        });
      });

      // ---- MAIN SEQUENCE ----
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "bottom+=900% center", // Extended from 300% to give slider room
          pin: true,
          scrub: 1,
          onUpdate: (self) => {
            const { start, end } = sliderRatioRef.current;
            if (start === 0 && end === 1) return;

            const sliderProgress = Math.min(
              Math.max(0, (self.progress - start) / (end - start)),
              1,
            );

            sliderRef.current?.updateProgress(sliderProgress);

            // Use (slides.length - 1) so last slide gets a full segment, not a sliver
            const newIndex = Math.min(
              Math.floor(sliderProgress * slides.length),
              slides.length - 1,
            );

            if (sliderProgress > 0) {
              sliderRef.current?.goToSlide(newIndex);
            }
          },
        },
      });

      tl.to(HeroH1Ref.current, {
        scale: 3,
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
          "<",
        )
        .to(
          overlayRef.current,
          {
            backgroundColor: "rgba(0, 0, 0, 1)",
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        )
        .to(
          exLyFi.current,
          {
            height: "100dvh",
            duration: 0.5,
            ease: "power1.out",
          },
          "0.15",
        )
        .to(".intro-line", {
          yPercent: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power3.out",
        })
        .to(
          ".intro-line",
          {
            yPercent: -105,
            duration: 1,
            stagger: 0.05,
            ease: "power3.in",
          },
          "+=0.2",
        )
        .to(".why-text", {
          yPercent: 0,
          duration: 1,
          ease: "power3.out",
        })
        .to(
          whyContainerRef.current,
          {
            scale: 2.2,
            duration: 2,
          },
          ">",
        )
        .to(
          exLySe.current,
          {
            height: "100dvh",
            duration: 1,
            ease: "power3.inOut",
          },
          "<",
        )
        .to(
          enImg.current,
          {
            scale: 0.2,
            duration: 5,
          },
          "<",
        )
        // ANIMATE FIRST 3 IMAGES TO CENTER
        .to(
          bgImgsRef.current.slice(0, 3),
          {
            x: 0,
            y: 0,
            scale: 0,
            duration: 4,
            stagger: 0.1,
            ease: "power2.in", // Fast at the start, slows down as it hits center
          },
          "<",
        )
        .to(
          scText.current,
          {
            xPercent: -37,
            duration: 5,
          },
          "<",
        )
        .to(
          enImg2.current,
          {
            height: "auto", // Reveal the container
            scale: 0.3, // Scale down to 0.5
            duration: 2.5, // Taking the remaining half of the parent's duration
            ease: "power2.out",
          },
          "-=2.5", // This starts exactly halfway through the 5s enImg animation
        )
        // ANIMATE REMAINING 3 IMAGES TO CENTER
        .to(
          bgImgsRef.current.slice(3),
          {
            x: 0,
            y: 0,
            scale: 0,
            duration: 2.5,
            stagger: 0.2,
            ease: "power1.inOut",
          },
          "<",
        )
        // ✅ Label placed RIGHT before slider section opens
        .addLabel("sliderStart")
        .to(
          exLyTh.current,
          {
            height: "100dvh",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=1",
        )
        // ✅ Add extra duration so slider has room to cycle through all slides
        .to({}, { duration: 11 }); // empty tween — pure scroll breathing room for slider

      // ✅ Compute exact ratios from timeline after it's built
      sliderRatioRef.current = {
        start: tl.labels.sliderStart / tl.totalDuration(),
        end: 1.0,
      };
    },
    { scope: mainContainer },
  );

  return (
    <main>
      <Navbar />
      <div
        ref={mainContainer}
        className="h-dvh w-full relative overflow-hidden"
      >
        <Hero ref={HeroH1Ref} HeroH2Ref={HeroH2Ref} overlayRef={overlayRef} />
        <AboutIntro
          exLyFi={exLyFi}
          textRef={introTextRef}
          whyContainerRef={whyContainerRef}
        />
        <MediaSection
          exLySe={exLySe}
          enImg={enImg}
          enImg2={enImg2}
          scText={scText}
          bgImgsRef={bgImgsRef}
        />
        <SliderSection ref={sliderRef} exLyTh={exLyTh} />
      </div>
      <TeamCarousel />
      <Footer />
    </main>
  );
};

export default AboutPage;
