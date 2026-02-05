"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { HyperText } from "@/components/ui/hyper-text"
import Logo from "@/components/LogoSvg";

// Register OUTSIDE component
gsap.registerPlugin(ScrollTrigger);

export default function BoulderAnimation() {
  const [loaded, setLoaded] = useState(false);

  const mainContainer = useRef(null);
  const videoRef = useRef(null);
  const blueLayer = useRef(null);
  const logoRef = useRef(null);
  const descRef = useRef(null);
  const blackLayer = useRef(null);

  useGSAP(
    () => {
      if (!loaded) return;

      // CRITICAL: Use context for proper cleanup
      const ctx = gsap.context(() => {
        // Get SVG elements by ID after component mounts
        const eqPath = document.getElementById("eq-path");
        const mediaHouse = document.getElementById("media-house");

        // Set initial states INSIDE the context
        gsap.set(blueLayer.current, {
          scaleY: 0,
          transformOrigin: "center center",
        });
        
        gsap.set(logoRef.current, { y: 100, opacity: 0 });
        gsap.set(descRef.current, { y: -150, opacity: 0 });
        gsap.set(blackLayer.current, { yPercent: 100 });
        
        // Hide E-Q and MEDIA HOUSE initially
        if (eqPath) gsap.set(eqPath, { opacity: 0, scale: 0.8, transformOrigin: "center" });
        if (mediaHouse) gsap.set(mediaHouse, { opacity: 0, y: 20 });

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
        tl.to(videoRef.current, {
          scale: 1.15,
          duration: 1,
          ease: "power2.inOut",
        })
        .to(blueLayer.current, {
          scaleY: 1,
          ease: "power2.inOut",
        }, 0.15)
        .to(
          logoRef.current,
          {
            y: 0,
            opacity: 1,
          },
          "-=0.5",
        )
        .to(logoRef.current, {
          scale: 0.6,
          y: -150,
          ease: "power2.inOut",
        })
        .to(
          descRef.current,
          {
            // y: -150,
            opacity: 1,
          }, 
          // "-=0.5"
        )
        .to(
          blackLayer.current,
          {
            yPercent: 0,
            duration: 1.5,
            ease: "power2.inOut",
          },
          // "-=1",
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
            <div ref={videoRef} className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center">
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
                <HyperText duration={1500} animateOnHover={false} className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]">Where Ideas Travel,</HyperText>
                <HyperText duration={1500} animateOnHover={false} className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]">And Stories live forever.</HyperText>
              </div>
            </div>

            {/* Layer 2: Blue Expanding Section */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center z-10"
            >
              {/* Background that animates */}
              <div
                ref={blueLayer}
                className="absolute inset-0 bg-purple-theme -z-10"
                style={{ transformOrigin: "center center" }}
              />
              
              {/* Content that doesn't get squeezed */}
              <div ref={logoRef} className="text-center px-6">
                <Logo
                  className="h-[15vw] w-auto text-white"
                />
              </div>
                <p
                  ref={descRef}
                  className="text-white/80 text-sm lg:text-xl md:text-base max-w-2xl mx-auto text-center leading-relaxed"
                >
                  We are not just a company, We’re a collective of curious minds fluent in culture, design, and human emotion.
We design for those who dare — brands, people, and stories that transcend borders.
Born in India, rooted in the UAE, connected across continents — we merge art and intellect to craft creativity that moves.

                </p>
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