"use client";

import { forwardRef, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Logo from "./LogoSvg";

gsap.registerPlugin(ScrollTrigger);

const ExpandingSection = forwardRef(({ blueLayer, logoRef, descRef }, ref) => {

  useGSAP(() => {
  if (!logoRef?.current) return;

  const ctx = gsap.context(() => {

    // Initial state only
    gsap.set(logoRef.current, {
      y: 100,
      opacity: 0,
      scale: 0.8
    });

    gsap.set(descRef.current, {
      y: 50,
      opacity: 0
    });

  }, ref);

  return () => ctx.revert();
}, []);



  return (
    <div
      ref={ref}
      className="absolute inset-0 flex flex-col items-center overflow-hidden justify-center z-10"
    >
      {/* Background that animates */}
      {/* bg-[#4106b9] */}
      <div
        ref={blueLayer}
        className="absolute inset-0 bg-lime-theme -z-10"
        style={{ transformOrigin: "center center" }}
      />

      {/* Content that doesn't get squeezed */}
      <div ref={logoRef} className="text-center px-6 mt-40 md:mt-20">
        <Logo className="h-[16vw] w-auto text-neutral-900" />
      </div>
      <p
        ref={descRef}
        className="text-neutral-900 font-montserrat-medium text-lg mt-25 md:mt-0 lg:text-xl md:text-base max-w-2xl md:max-w-3xl mx-auto text-center leading-[1.3]"
      >
        We are not just a company, We’re a collective of curious minds fluent in
        culture, design, and human emotion. We design for those who dare —
        brands, people, and stories that transcend borders. Born in India,
        rooted in the UAE, connected across continents — we merge art and
        intellect to craft creativity that moves.
      </p>
    </div>
  );
});

ExpandingSection.displayName = "ExpandingSection";

export default ExpandingSection;
