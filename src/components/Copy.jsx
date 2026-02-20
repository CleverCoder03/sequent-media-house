"use client";

import React, { useRef } from "react";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Copy({ children, animateOnScroll = true, delay = 0 }) {
  const containerRef = useRef(null);
  const elementRef = useRef([]);
  const splitRef = useRef([]);
  const lines = useRef([]);

 useGSAP(() => {
  if (!containerRef.current) return;

  // 🔥 Wait for font load in production (CRITICAL)
  document.fonts.ready.then(() => {

    splitRef.current = [];
    elementRef.current = [];
    lines.current = [];

    let elements = [];
    if (containerRef.current.hasAttribute("data-copy-wrapper")) {
      elements = [...containerRef.current.children];
    } else {
      elements = [containerRef.current];
    }

    elements.forEach((element) => {
      elementRef.current.push(element);

      const split = SplitText.create(element, {
        type: "lines",
        linesClass: "line"
      });

      splitRef.current.push(split);

      split.lines.forEach((line) => {
        line.style.overflow = "hidden";
        line.style.display = "block";
      });

      gsap.set(split.lines, { yPercent: 100 });
      lines.current.push(...split.lines);
    });

    gsap.to(lines.current, {
      yPercent: 0,
      duration: 1,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        once: true,
      }
    });

  });
  
  return () => {
    splitRef.current.forEach((split) => split?.revert());
  };
});

  return (
  <div ref={containerRef} data-copy-wrapper="true">
    {children}
  </div>
);

}