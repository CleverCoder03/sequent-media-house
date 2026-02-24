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
  const scText = useRef(null);
  const exLyTh = useRef(null);
  const sliderRef = useRef(null);
  const sliderRatioRef = useRef({ start: 0, end: 1 });

  useGSAP(
    () => {
      // ---- INITIAL STATES ----
      gsap.set(HeroH1Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(HeroH2Ref.current, { scale: 1, yPercent: 0 });
      gsap.set(".intro-line", { yPercent: 105 });
      gsap.set(".why-text", { yPercent: 105, scale: 1 });
      gsap.set(whyContainerRef.current, { scale: 1 });
      gsap.set(enImg.current, { scale: 2 });
      gsap.set(scText.current, { xPercent: 100 });

      // ---- MAIN SEQUENCE ----
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: mainContainer.current,
          start: "top top",
          end: "bottom+=800% center+=200px", // Extended from 300% to give slider room
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
            duration: 1,
            ease: "power2.inOut",
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
        .to(
          scText.current,
          {
            xPercent: -37,
            duration: 5,
          },
          "<",
        )
        // ✅ Label placed RIGHT before slider section opens
        .addLabel("sliderStart")
        .to(exLyTh.current, {
          height: "100dvh",
          duration: 1,
          ease: "power3.inOut",
        })
        // ✅ Add extra duration so slider has room to cycle through all slides
        .to({}, { duration: 12 }); // empty tween — pure scroll breathing room for slider

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
        <MediaSection exLySe={exLySe} enImg={enImg} scText={scText} />
        <SliderSection ref={sliderRef} exLyTh={exLyTh} />
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;