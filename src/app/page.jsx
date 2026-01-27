"use client";
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function BoulderAnimation() {
  const mainContainer = useRef(null);
  const blueLayer = useRef(null);
  const boulderText = useRef(null);
  const blackLayer = useRef(null);

  useGSAP(() => {
    // Create the master timeline linked to scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: mainContainer.current,
        start: "top top",
        end: "+=400%", // Length of the scroll-animation
        pin: true,      // "Sticks" the container to the screen
        scrub: 1,       // Smoothly ties animation to scroll progress
      }
    });

    // 1. Initial State: Scale the blue background down to a line
    gsap.set(blueLayer.current, { scaleY: 0 });
    gsap.set(blackLayer.current, { yPercent: 100 });

    // 2. ANIMATION SEQUENCE
    tl.to(blueLayer.current, { 
      scaleY: 1, 
      duration: 1.5, 
      ease: "power2.inOut" 
    })
    .from(boulderText.current, { 
      y: 100, 
      opacity: 0, 
      duration: 1 
    }, "-=0.5") // Start slightly before blue finishes
    .to(boulderText.current, { 
      scale: 0.4, 
      y: -150, 
      duration: 1.5, 
      ease: "power2.inOut" 
    })
    .to(blackLayer.current, { 
      yPercent: 0, 
      duration: 1.5, 
      ease: "power2.inOut" 
    }, "-=1"); // Overlap with the text moving up

  }, { scope: mainContainer });

  return (
    <main className="bg-white">
      {/* Spacer for top content */}
      <div className="h-[50vh] flex items-center justify-center text-gray-400">
        Scroll Down to Start Animation
      </div>

      {/* THE ANIMATION SECTION */}
      <div ref={mainContainer} className="relative h-screen w-full overflow-hidden bg-[#222]">
        
        {/* Layer 1: Background Content (White/Gray Text) */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
          <h2 className="text-white text-4xl md:text-6xl font-light uppercase tracking-tighter">
            The Creative <span className="inline-block rotate-45">→</span> Studio for <br />
            <span className="font-bold">Science + Tech Brands</span>
          </h2>
        </div>

        {/* Layer 2: Blue Expanding Section */}
        <div 
          ref={blueLayer} 
          className="absolute inset-0 bg-[#4F46E5] flex flex-col items-center justify-center z-10 origin-center"
        >
          <div ref={boulderText} className="text-center px-6">
            <h1 className="text-white text-7xl md:text-[12rem] font-bold tracking-tighter">
              Bôulder
            </h1>
            <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl mx-auto font-light">
              Creative Studios ©
            </p>
            <p className="text-white/80 text-sm md:text-base mt-8 max-w-xl mx-auto leading-relaxed">
               The companies we work with push the boundaries in Science + Technology. 
               Together, we transform complex brands into compelling stories.
            </p>
          </div>
        </div>

        {/* Layer 3: Black "Complex Made Compelling" Section */}
        <div 
          ref={blackLayer} 
          className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20"
        >
          <div className="text-center space-y-2">
            <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tight uppercase">
              Complex <span className="inline-block scale-x-125">▶</span>
            </h2>
            <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tight uppercase">
              Made <span className="inline-block -rotate-45">↘</span>
            </h2>
            <h2 className="text-white text-5xl md:text-8xl font-bold tracking-tight uppercase">
              Compelling
            </h2>
          </div>
        </div>
      </div>

      {/* Spacer for bottom content */}
      <div className="h-screen bg-black flex items-center justify-center">
        <p className="text-white">The rest of your website continues here...</p>
      </div>
    </main>
  );
}