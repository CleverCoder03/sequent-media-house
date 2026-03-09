import React, { forwardRef } from "react";

const AboutIntro = forwardRef(({ exLyFi, whyContainerRef }, ref) => {
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
          className="lg:w-[68vw] flex flex-col items-center text-center font-figtree-medium text-white"
        >
          {/* Mask 1 */}
          <div className="overflow-hidden py-1">
            <span className="intro-line block text-2xl md:text-4xl lg:text-5xl">
              We are a team of
            </span>
          </div>

          {/* Mask 2 */}
          <div className="overflow-hidden pb-1">
            <span className="intro-line block font-playfair-semibold-italic lowercase tracking-wider text-lime-theme text-xl md:text-3xl lg:text-4xl">
              storytellers, strategists, filmmakers, planners, dreamers
            </span>
          </div>

          {/* Mask 3 */}
          <div className="overflow-hidden mt-4">
            <span className="intro-line block tracking-normal bg-white text-black px-2 text-lg md:text-2xl lg:text-3xl">
              Each fluent in both logic and imagination.
            </span>
          </div>

          {/* WHY? Masking Container */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
           <div ref={whyContainerRef} className="overflow-hidden">
              <h1 className="why-text font-montserrat-semibold text-7xl lg:text-[15vw] leading-none">
                WHY US?
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