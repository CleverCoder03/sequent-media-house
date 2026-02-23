"use client";

import { forwardRef } from "react";
import CursorTrail from "./CursorTrail";
import CharReveal from "./CharReveal";

const Hero = forwardRef(({HeroH2Ref}, ref) => {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
      {/* Cursor Trail Effect */}
      <CursorTrail
        imagePaths={["/home/branding.jpg", "0-about-1.jpeg", "0-about-2.jpeg"]}
        imageWidth={150}
        imageHeight={200}
        mobileImageWidth={100}
        mobileImageHeight={150}
        distanceThreshold={150}
        mobileDistanceThreshold={50}
      />
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
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Text Content */}
      <div className="relative z-10 lg:w-2/3 pointer-events-none">
        <CharReveal>
          <h1 ref={ref} className="text-white text-4xl lg:text-6xl font-figtree-semibold uppercase leading-[1.1]">
            Where Ideas Travel,
          </h1>
          <h1 ref={HeroH2Ref} className="text-white text-4xl lg:text-6xl font-figtree-semibold uppercase leading-[1.1]">
            And Stories live forever.
          </h1>
        </CharReveal>
      </div>
    </div>
  );
});

Hero.displayName = "Hero";

export default Hero;
