"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ExpandingSection from "@/components/ExpandingSection";
import BlackSection from "@/components/BlackSection";
import { useMediaQuery } from "react-responsive";
import About from "@/components/About";
import NeedProof from "@/components/NeedProof";
import Testimonial from "@/components/Testimonial";
import Clients from "@/components/Clients";
import Awards from "@/components/Awards";
import Footer from "@/components/Footer";
import Layer5 from "@/components/Layer5";
import RowAnimation from "@/components/RowAnimation";

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
  const rowsContentRef = useRef([]); // Use an array ref for 6 rows
  const layer5Ref = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 770 });

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
        rowsContentRef.current.forEach((row) => {
          if (row) gsap.set(row, { xPercent: 0 });
        });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: isMobile ? "bottom+=400% center" : "bottom+=300% center+=200px",
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            // markers: true, // Uncomment for debugging

            // --- CRITICAL FIX 1: PRIORITY ---
            // Calculate this BEFORE downstream pins (NeedProof)
            refreshPriority: 1,

            // Ensure values are recalculated if screen resizes
            invalidateOnRefresh: true,
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
              duration: 0.3,
              ease: "power2.inOut",
            },
            "0.15",
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
              duration: 1.2,
              ease: "power1.inOut",
            },
            // "-=1",
          )
          .to(subServicesLayer.current, {
            xPercent: 0,
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.5,
          })
          // Animate all 6 rows at different speeds simultaneously
          // .addLabel("rowStart", "<")
          .to(
            rowsRef.current[0],
            { xPercent: -40, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[1],
            { xPercent: -35, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[2],
            { xPercent: -25, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[3],
            { xPercent: -35, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[4],
            { xPercent: -50, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[5],
            { xPercent: -40, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[6],
            { xPercent: -30, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsRef.current[7],
            { xPercent: -45, ease: "none", duration: 4 },
            "<",
          )
          .to(
            rowsContentRef.current[1],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -40
                  : window.innerWidth < 768
                    ? -30
                    : window.innerWidth < 1024
                      ? 20
                      : window.innerWidth < 1440
                        ? 35
                        : 40,
              ease: "none",
              duration: 4,
            },
            "<",
          )
          .to(
            rowsContentRef.current[2],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -35
                  : window.innerWidth < 768
                    ? -25
                    : window.innerWidth < 1024
                      ? 15
                      : window.innerWidth < 1440
                        ? 25
                        : 30,
              ease: "none",
              duration: 4,
            },
            "<",
          )
          .to(
            rowsContentRef.current[3],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -45
                  : window.innerWidth < 768
                    ? -30
                    : window.innerWidth < 1024
                      ? 20
                      : window.innerWidth < 1440
                        ? 30
                        : 35,
              ease: "none",
              duration: 4,
            },
            "<",
          )
          .to(
            rowsContentRef.current[4],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -55
                  : window.innerWidth < 768
                    ? -35
                    : window.innerWidth < 1024
                      ? 25
                      : window.innerWidth < 1440
                        ? 35
                        : 45,
              ease: "none",
              duration: 4,
            },
            "<",
          )
          .to(
            rowsContentRef.current[5],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -50
                  : window.innerWidth < 768
                    ? -30
                    : window.innerWidth < 1024
                      ? 20
                      : window.innerWidth < 1440
                        ? 30
                        : 40,
              ease: "none",
              duration: 4,
            },
            "<",
          )
          .to(
            rowsContentRef.current[6],
            {
              xPercent: () =>
                window.innerWidth < 480
                  ? -45
                  : window.innerWidth < 768
                    ? -30
                    : window.innerWidth < 1024
                      ? 20
                      : window.innerWidth < 1440
                        ? 30
                        : 40,
              ease: "none",
              duration: 4,
            },
            "<",
          )

          // TRIGGER LAYER 5:
          // "rowStart+=1.5" starts exactly at 40% of the 6s duration
          .to(
            layer5Ref.current,
            {
              yPercent: 0,
              duration: 1.5,
              ease: "power1.inOut",
            },
            "-=1.6",
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
            <RowAnimation
              ref={subServicesLayer}
              rowsRef={rowsRef}
              rowsContentRef={rowsContentRef}
            />

            {/* Layer 5: Overlay that appears after rows */}
            <Layer5 ref={layer5Ref} />
          </div>
          <About />
          <NeedProof />
          <Clients />
          <Testimonial />
          <Awards />
          <Footer />
        </main>
      )}
    </>
  );
}
