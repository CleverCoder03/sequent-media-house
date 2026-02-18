"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function CharReveal({
  children,
  animateOnScroll = true,
  delay = 0,
  staggerAmount = 0.05, // User requested stagger
}) {
  const containerRef = useRef(null);
  const splitRef = useRef([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      const chars = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        const split = SplitText.create(element, {
          // --- KEY CHANGE: Split by characters ---
          type: "words, chars",
          mask: "chars",
          charsClass: "char-reveal",
        });

        splitRef.current.push(split);
        chars.push(...split.chars);
      });

      // --- Set initial state for characters ---
      gsap.set(chars, { yPercent: 100, opacity: 0 });

      const animationProps = {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: staggerAmount,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(chars, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(chars, animationProps);
      }

      return () => {
        splitRef.current.forEach((split) => {
          if (split) {
            split.revert();
          }
        });
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, staggerAmount] }
  );

return (
  <div ref={containerRef} data-copy-wrapper="true">
    {children}
  </div>
);

}