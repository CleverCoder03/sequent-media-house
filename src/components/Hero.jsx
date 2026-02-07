"use client";

import { forwardRef } from "react";
import { HyperText } from "./ui/hyper-text";

const Hero = forwardRef((props, ref) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Text Content */}
      <div ref={ref} className="relative z-10 lg:w-2/3">
        <HyperText
          duration={1500}
          animateOnHover={false}
          className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]"
        >
          Where Ideas Travel,
        </HyperText>
        <HyperText
          duration={1500}
          animateOnHover={false}
          className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]"
        >
          And Stories live forever.
        </HyperText>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
