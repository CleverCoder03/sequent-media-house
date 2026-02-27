import Image from "next/image";
import React, { forwardRef } from "react";

const MediaSection = forwardRef(
  ({ exLySe, enImg, enImg2, scText, bgImgsRef }, ref) => {
    // We only need an array of a specific length to map over
    const bgImageCount = 6;

    return (
      <div
        ref={ref}
        className="absolute inset-0 flex items-center justify-center z-15 pointer-events-none overflow-hidden"
      >
        <div
          ref={exLySe}
          className="relative bg-neutral-100 z-5 flex justify-center items-center w-full h-0 overflow-hidden px-4"
        >
          {/* Background Converging Images Container */}
          <div className="absolute inset-0 size-full flex items-center justify-center">
            {[...Array(bgImageCount)].map((_, i) => (
              <div
                key={i}
                ref={(el) => (bgImgsRef.current[i] = el)}
                className="absolute w-[25vw] aspect-square rounded-2xl overflow-hidden shadow-xl z-0"
              >
                <Image
                  src={`/media-img-${i + 1}.jpg`}
                  alt={`Background asset ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
            ))}
          </div>

          {/* Main Content (Reveal 1) */}
          <div
            ref={enImg}
            className="relative w-[70vw] md:w-[50vw] aspect-video overflow-hidden rounded-xl shadow-2xl z-10"
          >
            <Image
              src="/0-about-1.jpeg"
              alt="Reveal 1"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Main Content (Reveal 2) */}
          <div className="absolute inset-0 flex justify-center items-center z-20">
            <div
              ref={enImg2}
              className="relative w-[70vw] md:w-[50vw] aspect-video overflow-hidden rounded-xl shadow-2xl"
              style={{ height: 0 }}
            >
              <Image
                src="/0-about-2.jpeg"
                alt="Reveal 2"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <h1
            ref={scText}
            className="absolute text-6xl lg:text-9xl uppercase font-montserrat-semibold whitespace-nowrap mix-blend-difference text-white z-30 pointer-events-none"
          >
            Our Partnerships are our Passport
          </h1>
        </div>
      </div>
    );
  }
);

MediaSection.displayName = "MediaSection";
export default MediaSection;