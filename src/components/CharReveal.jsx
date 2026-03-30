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
  staggerAmount = 0.05,
}) {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      // Determine elements to split
      const elements = containerRef.current.hasAttribute("data-copy-wrapper")
        ? Array.from(containerRef.current.children)
        : [containerRef.current];

      // OPTIMIZATION 1: SplitText can accept an array of elements directly.
      // No need to map/forEach over them and store multiple instances.
      const split = new SplitText(elements, {
        type: "words, chars",
        charsClass: "char-reveal",
      });

      // --- THE FIX FOR ITALIC CLIPPING ---
      // We expand the bounding box with padding so the italic overhang 
      // isn't clipped, then pull the spacing back to normal with negative margin.
      gsap.set(split.chars, {
        paddingRight: "0.15em",
        marginRight: "-0.15em",
        paddingLeft: "0.05em",
        marginLeft: "-0.05em",
        yPercent: 100,
        opacity: 0,
      });

      const animationProps = {
        yPercent: 0,
        opacity: 1,
        duration: 0.8,
        stagger: staggerAmount,
        ease: "power4.out",
        delay: delay,
      };

      if (animateOnScroll) {
        gsap.to(split.chars, {
          ...animationProps,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            once: true,
          },
        });
      } else {
        gsap.to(split.chars, animationProps);
      }

      // Cleanup function
      return () => {
        split.revert();
      };
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay, staggerAmount] }
  );

  return (
    <div 
      ref={containerRef} 
      data-copy-wrapper="true" 
      // OPTIMIZATION 2: Removed the arbitrary [&_span_div]:px-[0.5] class
      // Added py-1 to ensure top/bottom of tall italic fonts don't clip against the container
      className="overflow-hidden py-1 [&_span]:leading-[1.3]"
    >
      {children}
    </div>
  );
}