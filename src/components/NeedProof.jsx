import React, { useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const NeedProof = () => {
  const containerRef = useRef(null);
  const needRef = useRef(null);
  const moreRef = useRef(null);
  const proofRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // 1. Force initial state immediately to avoid CSS race conditions
      // This ensures they are hidden even if CSS loads late
      gsap.set([needRef.current, moreRef.current, proofRef.current], { 
        opacity: 0, 
        scale: 20, 
        zIndex: (i) => (i + 1) * 10 // 10, 20, 30
      });

      const PIN_DURATION = 2500;
      const START_OFFSET = window.innerHeight * 0.5;
      const totalAnimationDistance = PIN_DURATION + START_OFFSET;

      // ------------------------------------------------
      // SINGLE TRIGGER STRATEGY (More Robust)
      // ------------------------------------------------
      // Attempting to separate "Pin" and "Animate" triggers on the same element
      // often breaks because pinning changes the DOM structure (adds a wrapper).
      // Ideally, we sync them. But to keep your "Start Early" effect:
      
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // Animation starts early
          end: `+=${totalAnimationDistance}`,
          scrub: 1,
          id: "animating",
          // IMPORTANT: Recalculate positions if the DOM shifts
          invalidateOnRefresh: true, 
          markers: true
        },
      });

      // SEPARATE PIN TRIGGER
      // We give this a refreshPriority of -1 so it calculates AFTER the animation trigger
      // OR we just ensure the animation handles the visual logic independent of the pin.
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${PIN_DURATION}`,
        pin: true,
        id: "pinning",
        refreshPriority: 1 // Ensure this pinning logic settles before others
      });

      // --- Animation Sequence ---
      tl.to(needRef.current, { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" })
        .to(needRef.current, { scale: 0, duration: 0.5 })

        .to(moreRef.current, { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" })
        .to(moreRef.current, { scale: 0, duration: 0.5 })

        .to(proofRef.current, { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" })
        .to({}, { duration: 0.5 }); // Pause
        
    }, containerRef);

    // 2. CRITICAL FIX FOR PRODUCTION:
    // Force a refresh after a small delay to ensure fonts/layout are stable.
    // In strict production, fonts might shift layout after GSAP init.
    const timer = setTimeout(() => {
        ScrollTrigger.refresh();
    }, 100);

    return () => {
        ctx.revert();
        clearTimeout(timer);
    };
  }, []); // Dependencies empty is fine, but be careful with window resize

  return (
    <div
      ref={containerRef}
      className="relative bg-lime-300 h-dvh overflow-hidden"
    >
      <div
        ref={needRef}
        className="absolute inset-0 flex justify-center items-center text-3xl lg:text-9xl font-figtree-medium uppercase opacity-0"
      >
        Need
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
        {/* ADDED opacity-0 here to match the others */}
        <span
          ref={moreRef}
          className="lg:text-9xl font-figtree-medium text-black px-6 lg:px-12 py-2 text-3xl border-3 lg:border-10 border-black rounded-[90px] uppercase opacity-0"
        >
          MORE
        </span>
      </div>
      <div
        ref={proofRef}
        className="absolute inset-0 flex justify-center items-center text-3xl lg:text-9xl font-figtree-medium uppercase opacity-0"
      >
        Proof?
      </div>
    </div>
  );
};

export default NeedProof;