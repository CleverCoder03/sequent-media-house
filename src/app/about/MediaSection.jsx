import Image from "next/image";
import React, { forwardRef } from "react";

const MediaSection = forwardRef(({exLySe, enImg, scText}, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none overflow-hidden"
    >
      <div
        ref={exLySe}
        className="relative bg-neutral-100 z-5 flex justify-center items-center w-full h-0 overflow-hidden px-4"
      >
        {/* Optimized Image Container */}
        <div ref={enImg} className="relative w-[70vw] md:w-[50vw] aspect-video overflow-hidden rounded-xl shadow-2xl">
          <Image
            src="/0-about-1.jpeg"
            alt="Media Section Reveal"
            fill
            sizes="(max-width: 768px) 70vw, 50vw"
            className="object-cover"
            priority // Since this is part of a complex scroll animation
          />
        </div>

        {/* Text Container */}
        <h1 ref={scText} className="absolute text-9xl uppercase font-montserrat-semibold whitespace-nowrap mix-blend-difference text-white">Our Partnerships are our Passport</h1>
      </div>
    </div>
  );
});

// Because what you do matters

MediaSection.displayName = "MediaSection";

export default MediaSection;
