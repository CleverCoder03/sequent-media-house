"use client";
import React, { forwardRef } from "react";

const AboutIntro = forwardRef(({ exLyFi }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden"
    >
      <div
        ref={exLyFi}
        className="relative z-5 bg-black flex flex-col justify-center items-center w-full h-0 overflow-hidden px-4"
      >
        <div 
          className="lg:w-[68vw] flex flex-col items-center text-center uppercase font-montserrat-medium text-white leading-tight tracking-tighter"
          style={{ fontSize: 'clamp(1.5rem, 4vw, 2vw)' }}
        >
          {/* Mask 1 */}
          <div className="overflow-hidden py-1">
            <span className="intro-line block">
              We are a team of storytellers, strategists, filmmakers,
            </span>
          </div>

          {/* Mask 2 */}
          <div className="overflow-hidden py-1">
            <span className="intro-line block">
               planners, dreamers
            </span>
          </div>

          {/* Mask 3 */}
          <div className="overflow-hidden mt-2">
            <span className="intro-line block bg-white text-black px-2">
              each fluent in both logic and imagination.
            </span>
          </div>

          {/* WHY? Masking Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
           <div className="overflow-hidden">
              <h1 className="why-text font-montserrat-semibold text-[16vw] leading-none">
                WHY?
              </h1>
           </div>
        </div>
        </div>
      </div>
      
    </div>
  );
});

AboutIntro.displayName = "AboutIntro";
export default AboutIntro;