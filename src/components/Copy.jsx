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

  useGSAP(
    () => {
      if (!containerRef.current) return;

      splitRef.current = [];
      elementRef.current = [];
      lines.current = [];

      let elements = [];
      if (containerRef.current.hasAttribute("data-copy-wrapper")) {
        elements = Array.from(containerRef.current.children);
      } else {
        elements = [containerRef.current];
      }

      elements.forEach((element) => {
        elementRef.current.push(element);

        const split = SplitText.create(element, {
  type: "lines",
  linesClass: "line",
});

splitRef.current.push(split);

// Manually create mask effect (stable version)
split.lines.forEach((line) => {
  line.style.overflow = "hidden";
  line.style.display = "block";
});

// Push lines
lines.current.push(...split.lines);

// 🔥 SET INITIAL STATE HERE
gsap.set(split.lines, { yPercent: 100 });


        splitRef.current.push(split);

        const computedStyle = window.getComputedStyle(element);
        const textIndent = computedStyle.textIndent;

        if (textIndent && textIndent !== "0px") {
          if (split.lines.length > 0) {
            split.lines[0].computedStyleMap.paddingLeft = textIndent;
          }
          element.style.textIndent = "0";
        }
        lines.current.push(...split.lines);
      });

      const animationProps = {
        y: "0%",
        duration: 1,
        stagger: 0.1,
        ease: "power4.out",
        delay: delay
      }

      if (animateOnScroll) {
        gsap.to(lines.current, {
            ...animationProps,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top 75%",
                once: true
            }
        })
      } else {
        gsap.to(lines.current, animationProps)
      }

      return () => {
        splitRef.current.forEach((split) => {
            if (split) {
                split.revert()
            }
        })
      }
    },
    { scope: containerRef, dependencies: [animateOnScroll, delay] }
  );

  return (
  <div ref={containerRef} data-copy-wrapper="true">
    {children}
  </div>
);

}