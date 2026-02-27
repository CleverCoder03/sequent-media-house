"use client"
import CharReveal from "@/components/CharReveal";
import MarqueeIcon from "@/components/MarqueeIcon";
import React, { forwardRef } from "react";

const Hero = forwardRef(({HeroH2Ref, overlayRef}, ref) => {
  return (
    <div className="h-dvh w-full flex justify-center items-center">
      {/* Text Content */}
      <div className="relative z-10 lg:w-2/3 pointer-events-none text-center">
        <CharReveal>
          <h1 ref={ref} className="text-neutral-100 text-4xl lg:text-6xl font-montserrat-semibold uppercase leading-[1.1] ">
            Our <span className="font-playfair-semibold-italic text-lime-theme lowercase">team</span> is a{" "}
            {/* <MarqueeIcon variant={1} className="mx-5" width={2.5} /> */}
          </h1>
          <h1 ref={HeroH2Ref} className="text-neutral-100 text-4xl lg:text-6xl font-montserrat-semibold uppercase leading-[1.1]">
            creative <span className="font-playfair-semibold-italic text-lime-theme lowercase">mixtape</span>{" "}
            {/* <MarqueeIcon variant={4} className="mx-5" width={2.5} /> */}
          </h1>
        </CharReveal>
      </div>
        <div ref={overlayRef} className="absolute inset-0"></div>
    </div>
  );
})

Hero.displayName = "Hero"

export default Hero;
