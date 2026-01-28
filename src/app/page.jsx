"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import DecryptedText from "../components/DecryptedText";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";

// Register OUTSIDE component
gsap.registerPlugin(ScrollTrigger);

export default function BoulderAnimation() {
  const [loaded, setLoaded] = useState(false);

  const mainContainer = useRef(null);
  const blueLayer = useRef(null);
  const boulderText = useRef(null);
  const blackLayer = useRef(null);

  useGSAP(
    () => {
      if (!loaded) return;

      // CRITICAL: Use context for proper cleanup
      const ctx = gsap.context(() => {
        // Set initial states INSIDE the context
        gsap.set(blueLayer.current, {
          scaleY: 0,
          transformOrigin: "center center",
        });
        gsap.set(boulderText.current, { y: 100, opacity: 0 });
        gsap.set(blackLayer.current, { yPercent: 100 });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "+=400%",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            // markers: true, // Uncomment for debugging
          },
        });

        // Build animation sequence
        tl.to(blueLayer.current, {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.inOut",
        })
          .to(
            boulderText.current,
            {
              y: 0,
              opacity: 1,
              duration: 1,
            },
            "-=0.5",
          )
          .to(boulderText.current, {
            scale: 0.4,
            y: -150,
            duration: 1.5,
            ease: "power2.inOut",
          })
          .to(
            blackLayer.current,
            {
              yPercent: 0,
              duration: 1.5,
              ease: "power2.inOut",
            },
            "-=1",
          );
      }, mainContainer);

      return () => ctx.revert(); // Cleanup
    },
    { dependencies: [loaded] },
  );

  // Force ScrollTrigger refresh after load
  useEffect(() => {
    if (loaded) {
      const timer = setTimeout(() => {
        ScrollTrigger.refresh();
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main>
          {/* THE ANIMATION SECTION */}
          <Navbar />
          <div
            ref={mainContainer}
            className="relative h-screen w-full overflow-hidden bg-[#222]"
          >
            {/* Layer 1: Background Content */}
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
              <div className="relative z-10 lg:w-2/3">
                <DecryptedText
                  text="The creative studio for Science + Tech Brands"
                  animateOn="view"
                  revealDirection="start"
                  sequential
                  useOriginalCharsOnly={false}
                  className="text-white text-5xl lg:text-6xl uppercase font-ppneune-medium"
                  encryptedClassName="text-white/90 text-5xl lg:text-6xl font-ppneune-medium"
                />
              </div>
            </div>

            {/* Layer 2: Blue Expanding Section */}
            <div
              ref={blueLayer}
              className="absolute inset-0 bg-[#4F46E5] flex flex-col items-center justify-center z-10"
              style={{ transformOrigin: "center center" }}
            >
              <div ref={boulderText} className="text-center px-6">
                <h1 className="text-white text-7xl md:text-[12rem] font-bold tracking-tighter">
                  Sequent
                </h1>
                <p className="text-white text-lg md:text-2xl mt-4 max-w-2xl mx-auto font-light">
                  Media House ©
                </p>
                <p className="text-white/80 text-sm md:text-base mt-8 max-w-xl mx-auto leading-relaxed">
                  The companies we work with push the boundaries in Science +
                  Technology. Together, we transform complex brands into
                  compelling stories.
                </p>
              </div>
            </div>

            {/* Layer 3: Black Section */}
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
            <p className="text-white">
              The rest of your website continues here...
            </p>
          </div>
        </main>
      )}
    </>
  );
}
