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
  const videoRef = useRef(null);
  const blueLayer = useRef(null);
  const logoRef = useRef(null);
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
        gsap.set(blueLayer.current, {
          scaleY: 0,
          transformOrigin: "center center",
        });

        gsap.set([logoRef.current, descRef.current], { opacity: 0 });
        gsap.set(logoRef.current, { y: 100 });
        gsap.set(descRef.current, { y: -150 });

        gsap.set(blackLayer.current, { yPercent: 100 });
        gsap.set(subServicesLayer.current, { yPercent: 0, xPercent: 100 });
        gsap.set(layer5Ref.current, { yPercent: 100 });

        rowsRef.current.forEach((row) => row && gsap.set(row, { xPercent: 10 }));
        rowsContentRef.current.forEach(
          (row) => row && gsap.set(row, { xPercent: 0 })
        );

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
            end: "bottom+=400% center+=200px",
            pin: true,
            scrub: 1,
            refreshPriority: 1,
            invalidateOnRefresh: true,
          },
        });

        // ---- MAIN SEQUENCE ----
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
            "0.15"
          )
          .to(
            logoRef.current,
            {
              y: 0,
              opacity: 1,
            },
            "-=0.5"
          )
          .to(logoRef.current, {
            scale: isMobile ? 1 : 0.6,
            y: isMobile ? -100 : -150,
            ease: "power2.inOut",
          })
          .to(descRef.current, {
            opacity: 1,
          })
          .to(
            blackLayer.current,
            {
              yPercent: 0,
              duration: 1.2,
              ease: "power1.inOut",
            },
            "+=0.5"
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
            "<"
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
            "<"
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
          "-=1.6"
        );
      }, mainContainer);

      return () => ctx.revert();
    },
    { dependencies: [loaded], scope: mainContainer, revertOnUpdate: true }
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
            <Hero ref={videoRef} />

            <ExpandingSection
              blueLayer={blueLayer}
              logoRef={logoRef}
              descRef={descRef}
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
