"use client";
import React, { useRef, useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import { HyperText } from "@/components/ui/hyper-text";
import Logo from "@/components/LogoSvg";

// Register OUTSIDE component
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
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
        // --- INITIAL STATE ---
        gsap.set(subServicesLayer.current, { yPercent: 0, xPercent: 100 });
        gsap.set(layer5Ref.current, { yPercent: 100 });
        // Set all rows to start slightly offset to the right
        rowsRef.current.forEach((row) => {
          if (row) gsap.set(row, { xPercent: 10 });
        });

        // Hide E-Q and MEDIA HOUSE initially
        if (eqPath)
          gsap.set(eqPath, {
            opacity: 0,
            scale: 0.8,
            transformOrigin: "center",
          });
        if (mediaHouse) gsap.set(mediaHouse, { opacity: 0, y: 20 });

        // Create timeline
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "+=450%",
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
          .to(
            blueLayer.current,
            {
              scaleY: 1,
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
            yPercent: 0,
            xPercent: 0,
            duration: 1.5,
            ease: "power2.inOut",
          })
          // Animate all 6 rows at different speeds simultaneously
          .addLabel("rowStart", "<")
          .to(
            rowsRef.current[0],
            { xPercent: -40, ease: "none", duration: 3 },
            "<",
          )
          .to(
            rowsRef.current[1],
            { xPercent: -20, ease: "none", duration: 3 },
            "<",
          )
          .to(
            rowsRef.current[2],
            { xPercent: -55, ease: "none", duration: 3 },
            "<",
          )
          .to(
            rowsRef.current[3],
            { xPercent: -35, ease: "none", duration: 3 },
            "<",
          )
          .to(
            rowsRef.current[4],
            { xPercent: -15, ease: "none", duration: 3 },
            "<",
          )
          .to(
            rowsRef.current[5],
            { xPercent: -45, ease: "none", duration: 3 },
            "<",
          )

          // TRIGGER LAYER 5:
          // "rowStart+=1.5" starts exactly at 40% of the 3s duration
          .to(
            layer5Ref.current,
            {
              yPercent: 0,
              duration: 1.5,
              ease: "power4.out",
            },
            "rowStart+=1.5",
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
          <Navbar />
          {/* THE ANIMATION SECTION */}
          <div
            ref={mainContainer}
            className="relative h-screen w-full overflow-hidden bg-neutral-900"
          >
            {/* Layer 1: Background Content */}
            <div
              ref={videoRef}
              className="absolute inset-0 flex flex-col items-center justify-center px-10 text-center"
            >
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
                <HyperText
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]"
                >
                  Where Ideas Travel,
                </HyperText>
                <HyperText
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-4xl lg:text-6xl uppercase font-ppneune-medium leading-[1.3]"
                >
                  And Stories live forever.
                </HyperText>
              </div>
            </div>

            {/* Layer 2: Blue Expanding Section */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              {/* Background that animates */}
              <div
                ref={blueLayer}
                className="absolute inset-0 bg-purple-theme -z-10"
                style={{ transformOrigin: "center center" }}
              />

              {/* Content that doesn't get squeezed */}
              <div ref={logoRef} className="text-center px-6">
                <Logo className="h-[15vw] w-auto text-white" />
              </div>
              <p
                ref={descRef}
                className="text-white/80 text-sm lg:text-xl md:text-base max-w-2xl mx-auto text-center leading-relaxed"
              >
                We are not just a company, We’re a collective of curious minds
                fluent in culture, design, and human emotion. We design for
                those who dare — brands, people, and stories that transcend
                borders. Born in India, rooted in the UAE, connected across
                continents — we merge art and intellect to craft creativity that
                moves.
              </p>
            </div>

            {/* Layer 3: Black Section */}
            <div
              ref={blackLayer}
              className="absolute inset-0 bg-neutral-900 flex flex-col items-center justify-center z-20"
            >
              <div className="text-center">
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Complex
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Made
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Compelling
                </HyperText>
              </div>
            </div>

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
                    Branding ↘
                  </span>
                  <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=1"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Websites ●
                  </span>
                </div>
                {/* Row 2: Social */}
                <div
                  ref={(el) => (rowsRef.current[1] = el)}
                  className="flex items-center gap-10 whitespace-nowrap ml-20"
                >
                  <div className="w-56 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Social ■
                  </span>
                  <div className="w-96 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                {/* Row 3: Campaigns */}
                <div
                  ref={(el) => (rowsRef.current[2] = el)}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Campaigns
                  </span>
                  <div className="w-80 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=4"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                    Global ↗
                  </span>
                </div>
                {/* Row 4: Motion */}
                <div
                  ref={(el) => (rowsRef.current[3] = el)}
                  className="flex items-center gap-10 whitespace-nowrap ml-40"
                >
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Motion ▶
                  </span>
                  <div className="w-64 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=5"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Design
                  </span>
                </div>
                {/* Row 5: Experiential */}
                <div
                  ref={(el) => (rowsRef.current[4] = el)}
                  className="flex items-center gap-10 whitespace-nowrap"
                >
                  <div className="w-[30rem] h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=6"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Experiential ✦
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
                  <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden">
                    <img
                      src="https://picsum.photos/400/200?v=7"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-neutral-900 text-7xl font-bold uppercase">
                    Future ↘
                  </span>
                </div>
              </div>
            </div>

            <div
              ref={layer5Ref}
              className="absolute inset-0 bg-neutral-900 z-50 flex h-dvh items-center justify-center"
            >
              <h2 className="text-neutral-100 text-9xl font-bold italic">
                NEXT CHAPTER
              </h2>
            </div>
          </div>
          <div className="h-screen bg-white">hello world</div>
        </main>
      )}
    </>
  );
}
