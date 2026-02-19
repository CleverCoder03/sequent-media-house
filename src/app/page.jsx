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

gsap.registerPlugin(ScrollTrigger);

export default function Page() {
  const [loaded, setLoaded] = useState(false);

  const mainContainer = useRef(null);
  const HeroH1Ref = useRef(null);
  const HeroH2Ref = useRef(null);
  const blueLayer = useRef(null);
  const logoRef = useRef(null);
  const svgLogoRef = useRef(null);
  const svgTextRef = useRef(null);
  const descRef = useRef(null);
  const blackLayer = useRef(null);
  const subServicesLayer = useRef(null);
  const rowsRef = useRef([]);
  const rowsContentRef = useRef([]);
  const layer5Ref = useRef(null);

  const isMobile = useMediaQuery({ maxWidth: 770 });

  useGSAP(
    () => {
      if (!loaded) return;

      const ctx = gsap.context(() => {
        // ---- INITIAL STATES ----
        

        gsap.set(HeroH1Ref.current, { scale: 1, yPercent: 0 });
        gsap.set(HeroH2Ref.current, { scale: 1, yPercent: 0 });
        // gsap.set([logoRef.current, descRef.current], { opacity: 0 });
        // gsap.set(logoRef.current, { y: 100 });
        // gsap.set(logoRef.current, {
        //   yPercent: 50,
        //   opacity: 0,
        //   scale: 0.8,
        //   transformOrigin: "center center",
        // });
        gsap.set([svgLogoRef.current, svgTextRef.current], {transformOrigin: "center center"})
        gsap.set(logoRef.current, { xPercent: 40})
        gsap.set(svgTextRef.current, { opacity: 0})
        // gsap.set(logoRef.current, { x: 550 });
        gsap.set(descRef.current, { y: 0, opacity: 0 });

        gsap.set(blackLayer.current, { yPercent: 100 });
        gsap.set(subServicesLayer.current, { yPercent: 0, xPercent: 100 });
        gsap.set(layer5Ref.current, { yPercent: 100 });

        rowsRef.current.forEach(
          (row) => row && gsap.set(row, { xPercent: 10 }),
        );
        rowsContentRef.current.forEach(
          (row) => row && gsap.set(row, { xPercent: 0 }),
        );

        // --- Logo Independent Timeline ---
        const logoTl = gsap.timeline({ paused: true });

        // logoTl.to(logoRef.current, {
        //   y: 0,
        //   opacity: 1,
        //   scale: 1,
        //   duration: 1,
        //   ease: "power3.out",
        // });
        logoTl.to(logoRef.current, {xPercent: 0}).to(svgTextRef.current, {opacity: 1, scale: 1, duration: 0.4})

        const width = window.innerWidth;

        const getX = (m, t, l, d, xl) => {
          if (width < 480) return m;
          if (width < 768) return t;
          if (width < 1024) return l;
          if (width < 1440) return d;
          return xl;
        };

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: mainContainer.current,
            start: "top top",
            end: "bottom+=600% center+=200px",
            pin: true,
            scrub: 1,
            onUpdate: (self) => {
              const progress = self.progress;
              const direction = self.direction;

              // FIRE logo animation when timeline passes the logoStart point
              const logoPoint = tl.labels["logoStart"] / tl.duration();

              if (progress >= logoPoint && direction === 1) {
                logoTl.play(); // forward
              }
              if (progress <= logoPoint && direction === -1) {
                logoTl.reverse(); // backward
              }
            },
          },
        });

        // ---- MAIN SEQUENCE ----
        tl.to(HeroH1Ref.current, {
          scale: isMobile? 2: 4,
          yPercent: -500,
          duration: 1,
          ease: "power2.inOut",
        });
        tl.to(
          HeroH2Ref.current,
          {
            scale: isMobile? 2: 4,
            yPercent: 500,
            duration: 1,
            ease: "power2.inOut",
          },
          "<",
        )
          .to(
            blueLayer.current,
            {
              height: "100dvh",
  duration: 0.5,
            },
            "0.15",
          )
          .addLabel("logoStart", "-=0.3")
          .to(logoRef.current, {
            // THIS defines the state at end of logoStart
            yPercent: isMobile ? 0 : 0,
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "power4.in",
          })
          .to(logoRef.current, {
            // THIS runs AFTER logoStart ends
            scale: isMobile ? 1 : 0.6,
            yPercent:  -60,
            duration: 1.2,
            ease: "power2.out",
          })
          .to(descRef.current, {
            opacity: 1,
            y: isMobile ? 0 : -80,
            duration: 1,
            ease: "power2.out",
          })
          .to(
            blackLayer.current,
            {
              yPercent: 0,
              duration: 1.2,
              ease: "power1.inOut",
            },
            "+=0.5",
          )
          .to(subServicesLayer.current, {
            xPercent: 0,
            duration: 3.5,
            ease: "easeInOut",
            delay: 0.5,
          });

        // ---- ROWS ANIMATION ----
        const rowSpeeds = [-40, -35, -25, -35, -50, -40, -30, -45];

        rowsRef.current.forEach((row, i) => {
          if (!row) return;
          tl.to(
            row,
            {
              xPercent: rowSpeeds[i],
              ease: "none",
              duration: 4,
            },
            "<",
          );
        });

        const contentSpeeds = [
          getX(-40, -30, 20, 35, 40),
          getX(-35, -25, 15, 25, 30),
          getX(-45, -30, 20, 30, 35),
          getX(-55, -35, 25, 35, 45),
          getX(-50, -30, 20, 30, 40),
          getX(-45, -30, 20, 30, 40),
        ];

        rowsContentRef.current.forEach((row, i) => {
          if (!row || i === 0) return;
          tl.to(
            row,
            {
              xPercent: contentSpeeds[i - 1],
              ease: "none",
              duration: 4,
            },
            "<",
          );
        });

        // ---- LAYER 5 ----
        tl.to(
          layer5Ref.current,
          {
            yPercent: 0,
            duration: 1.5,
            ease: "power1.inOut",
          },
          "-=1.6",
        );
      }, mainContainer);

      return () => ctx.revert();
    },
    { dependencies: [loaded], scope: mainContainer, revertOnUpdate: true },
  );

  useEffect(() => {
    if (!loaded) return;
    const timer = setTimeout(() => ScrollTrigger.refresh(), 100);
    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <>
      {!loaded && <Loader onFinish={() => setLoaded(true)} />}
      {loaded && (
        <main>
          <Navbar />

          <div
            ref={mainContainer}
            className="relative h-screen w-full overflow-hidden bg-neutral-900"
          >
            <Hero ref={HeroH1Ref} HeroH2Ref={HeroH2Ref} />

            <ExpandingSection
              blueLayer={blueLayer}
              logoRef={logoRef}
              descRef={descRef}
              svgLogoRef={svgLogoRef}
              svgTextRef={svgTextRef}
            />

            <BlackSection ref={blackLayer} />

            <RowAnimation
              ref={subServicesLayer}
              rowsRef={rowsRef}
              rowsContentRef={rowsContentRef}
            />

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
