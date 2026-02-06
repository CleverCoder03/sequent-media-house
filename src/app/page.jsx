"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { HyperText } from "@/components/ui/hyper-text";
import Logo from "@/components/LogoSvg";
import Hero from "@/components/Hero";
import ExpandingSection from "@/components/ExpandingSection";
import BlackSection from "@/components/BlackSection";
import Image from "next/image";
import About from "@/components/About";
import NeedProof from "@/components/NeedProof";

// Register OUTSIDE component
gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  const mainContainer = useRef(null);
  const videoRef = useRef(null);
  const blueLayer = useRef(null);
  const logoRef = useRef(null);
  const descRef = useRef(null);
  const blackLayer = useRef(null);
  const subServicesLayer = useRef(null);
  const rowsRef = useRef([]); // Use an array ref for 6 rows
  const layer5Ref = useRef(null);

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

        // --- INITIAL STATE ---
        gsap.set(logoRef.current, { y: 100, opacity: 0 });
        gsap.set(descRef.current, { y: -150, opacity: 0 });
        gsap.set(blackLayer.current, { yPercent: 100 });
        gsap.set(subServicesLayer.current, { yPercent: 0, xPercent: 100 });
        gsap.set(layer5Ref.current, { yPercent: 100 });
        // Set all rows to start slightly offset to the right
        rowsRef.current.forEach((row) => {
          if (row) gsap.set(row, { xPercent: 10 });
        });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "bottom+=200% center",
            pin: true,
            scrub: 2,
            anticipatePin: 1,
            // markers: true, // Uncomment for debugging
          },
        });

        // Build animation sequence
        tl.to(videoRef.current, {
          scale: 1.25,
          duration: 1,
          ease: "power2.inOut",
        })
          .to(
            blueLayer.current,
            {
              scaleY: 1,
              duration: 0.5,
              ease: "power2.inOut",
            },
            0.15,
          )
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
          )
          .to(subServicesLayer.current, {
            xPercent: 0,
            duration: 3.5,
            ease: "easeInOut",
          })
          // Animate all 6 rows at different speeds simultaneously
          // .addLabel("rowStart", "<")
          .to(
            rowsRef.current[0],
            { xPercent: -40, ease: "none", duration: 6 },
            "<",
          )
          .to(
            rowsRef.current[1],
            { xPercent: -20, ease: "none", duration: 6 },
            "<",
          )
          .to(
            rowsRef.current[2],
            { xPercent: -55, ease: "none", duration: 6 },
            "<",
          )
          .to(
            rowsRef.current[3],
            { xPercent: -35, ease: "none", duration: 6 },
            "<",
          )
          .to(
            rowsRef.current[4],
            { xPercent: -15, ease: "none", duration: 6 },
            "<",
          )
          .to(
            rowsRef.current[5],
            { xPercent: -45, ease: "none", duration: 6 },
            "<",
          )

          // TRIGGER LAYER 5:
          // "rowStart+=1.5" starts exactly at 40% of the 3s duration
          .to(
            layer5Ref.current,
            {
              yPercent: 0,
              duration: 1,
              ease: "easeIn",
            },
            "-=1.5",
          );
      }, mainContainer);

      return () => ctx.revert(); // Cleanup
    },
    { dependencies: [loaded] },
  );

  useGSAP(() => {});

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
          <Navbar />
          {/* THE ANIMATION SECTION */}
          <div
            ref={mainContainer}
            className="relative h-screen w-full overflow-hidden bg-neutral-900"
          >
            {/* Layer 1: Background Content */}
            <Hero ref={videoRef} />

            {/* Layer 2: Blue Expanding Section */}
            <ExpandingSection
              blueLayer={blueLayer}
              logoRef={logoRef}
              descRef={descRef}
            />

            {/* Layer 3: Black Section */}
            <BlackSection ref={blackLayer} />

            {/* Layer 4: 6-Row Sub-services Ticker */}
            <div
              ref={subServicesLayer}
              className="absolute inset-0 z-30 flex flex-col justify-center"
            >
              <div className="flex flex-col w-[200%] h-dvh [&>div]:h-1/6 [&>div]:bg-neutral-100">
                {" "}
                {/* Extra width for the speed variation */}
                {/* Row 1: Branding */}
                <div
                  ref={(el) => (rowsRef.current[0] = el)}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                    Branding
                  </span>
                  <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Websites
                  </span>
                </div>
                {/* Row 2: Social */}
                <div
                  ref={(el) => (rowsRef.current[1] = el)}
                  className="flex items-center gap-10 whitespace-nowrap ml-20"
                >
                  <div className="w-56 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Social
                  </span>
                  <div className="w-96 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                </div>
                {/* Row 3: Campaigns */}
                <div
                  ref={(el) => (rowsRef.current[2] = el)}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Campaigns
                  </span>
                  <div className="w-80 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                    Global
                  </span>
                </div>
                {/* Row 4: Motion */}
                <div
                  ref={(el) => (rowsRef.current[3] = el)}
                  className="flex items-center gap-10 whitespace-nowrap ml-40"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Motion
                  </span>
                  <div className="w-64 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Design
                  </span>
                </div>
                {/* Row 5: Experiential */}
                <div
                  ref={(el) => (rowsRef.current[4] = el)}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  <div className="w-[30rem] h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Experiential
                  </span>
                </div>
                {/* Row 6: Interactive */}
                <div
                  ref={(el) => (rowsRef.current[5] = el)}
                  className="flex items-center gap-10 whitespace-nowrap ml-10"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                    Interactive
                  </span>
                  <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Future
                  </span>
                </div>
              </div>
            </div>

            {/* Layer 5: Next Chapter Overlay */}
            <div
              ref={layer5Ref}
              className="absolute inset-0 bg-black z-50 flex h-dvh items-center justify-center"
            >
              <div className="flex flex-col items-center py-[30vh]">
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
                >
                  ▀ A MODEL FOR THE↘
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
                >
                  INTELLIGENCE AGE
                </HyperText>
              </div>
            </div>
          </div>
          <About />
          <NeedProof />
        </main>
      )}
    </>
  );
}
