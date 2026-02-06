import React, { useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const NeedProof = () => {
  const containerRef = useRef(null);
  const needRef = useRef(null);
  const moreRef = useRef(null);
  const proofRef = useRef(null);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      
      // CONFIGURATION
      // How long the container stays pinned (in pixels of scroll)
      const PIN_DURATION = 2500; 
      // How much earlier the animation starts (half viewport height)
      const START_OFFSET = window.innerHeight * 0.5; 

      // ------------------------------------------------
      // TRIGGER 1: THE PINNER (Locks the box)
      // ------------------------------------------------
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",      // Lock when top hits top
        end: `+=${PIN_DURATION}`,
        pin: true,             // Activate pinning
        // markers: true,      // Debug markers (Red/Green)
        id: "pinning"
      });

      // ------------------------------------------------
      // TRIGGER 2: THE ANIMATOR (Moves the text)
      // ------------------------------------------------
      // We calculate the total scroll distance for the animation:
      // Pin Duration + The distance covered before pinning (START_OFFSET)
      const totalAnimationDistance = PIN_DURATION + START_OFFSET;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center", // <--- STARTS EARLY (while scrolling up)
          end: `+=${totalAnimationDistance}`, // Syncs end with the pinner
          scrub: 1,
          // markers: true,    // Debug markers (Blue/Red)
          id: "animating"
        }
      });

      // --- The Animation Sequence ---
      
      // 1. "Need" starts flying in immediately (while scrolling up)
      tl.fromTo(needRef.current, 
        { scale: 20, opacity: 0, zIndex: 10 }, 
        { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .to(needRef.current, { scale: 0, duration: 0.5 })

      // 2. "More"
      .fromTo(moreRef.current, 
        { scale: 20, opacity: 0, zIndex: 20 }, 
        { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .to(moreRef.current, { scale: 0, duration: 0.5 })

      // 3. "Proof?"
      .fromTo(proofRef.current, 
        { scale: 20, opacity: 0, zIndex: 30 }, 
        { scale: 2.5, opacity: 1, duration: 1, ease: "power2.out" }
      )
      .to({}, { duration: 0.5 }); // Pause at end

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className='relative bg-lime-300 h-dvh overflow-hidden'>
      <div ref={needRef} className="absolute inset-0 flex justify-center items-center text-9xl font-figtree-medium uppercase opacity-0">
        Need
      </div>
      <div className="absolute inset-0 flex justify-center items-center">
  <span ref={moreRef} className='text-9xl font-figtree-medium text-black px-12 py-2 border-8 border-black rounded-[90px] uppercase'>
    MORE
  </span>
</div>
      <div ref={proofRef} className="absolute inset-0 flex justify-center items-center text-9xl font-figtree-medium uppercase opacity-0">
        Proof?
      </div>
    </div>
  );
}

export default NeedProof;