"use client";
import React, {
  forwardRef,
  useImperativeHandle,
  useRef,
  useCallback,
} from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { slides } from "@/constant/slides";

gsap.registerPlugin(SplitText);

const SliderSection = forwardRef(({ exLyTh }, ref) => {
  const imagesRef = useRef(null);
  const descRef = useRef(null);
  const labelRef = useRef(null);
  const tagRef = useRef(null);
  const progressRef = useRef(null);
  const titlesRef = useRef(null);
  const activeIndex = useRef(-1);

  const animateNewSlide = useCallback((index) => {
    if (!imagesRef.current) return;

    // --- Image crossfade ---
    const newImg = document.createElement("img");
    newImg.src = slides[index].img;
    newImg.alt = slides[index].title;
    newImg.className = "absolute inset-0 w-full h-full object-cover";
    gsap.set(newImg, { opacity: 0, scale: 1.08 });
    imagesRef.current.appendChild(newImg);
    gsap.to(newImg, { opacity: 1, scale: 1, duration: 1.6, ease: "power2.out" });

    // Cleanup old images
    while (imagesRef.current.children.length > 2) {
      imagesRef.current.removeChild(imagesRef.current.children[0]);
    }

    // --- Label ---
    if (labelRef.current) {
      gsap.to(labelRef.current, { opacity: 0, y: -6, duration: 0.25, ease: "power2.in", onComplete: () => {
        labelRef.current.textContent = slides[index].label;
        gsap.fromTo(labelRef.current, { opacity: 0, y: 6 }, { opacity: 1, y: 0, duration: 0.4, ease: "power2.out" });
      }});
    }

    // --- Tag ---
    if (tagRef.current) {
      gsap.to(tagRef.current, { opacity: 0, duration: 0.2, onComplete: () => {
        tagRef.current.textContent = slides[index].tag;
        gsap.to(tagRef.current, { opacity: 0.5, duration: 0.4 });
      }});
    }

    // --- Description ---
    if (descRef.current) {
      gsap.to(descRef.current, { opacity: 0, y: 10, duration: 0.3, ease: "power2.in", onComplete: () => {
        descRef.current.textContent = slides[index].description;
        gsap.fromTo(descRef.current, { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
      }});
    }

    // --- Title list highlight ---
    const titleEls = titlesRef.current?.querySelectorAll(".slide-title-item");
    titleEls?.forEach((el, i) => {
      const isActive = i === index;
      const arrow = el.querySelector(".arrow-icon");
      gsap.to(el, {
        opacity: isActive ? 1 : 0.25,
        scale: isActive ? 1.5 : 0.95,
        duration: 0.5,
        ease: "power2.out",
        transformOrigin: "left center",
      });
      if (arrow) {
        gsap.to(arrow, { opacity: isActive ? 1 : 0, x: isActive ? 0 : -4, duration: 0.4 });
      }
    });
  }, []);

  useImperativeHandle(ref, () => ({
    goToSlide(index) {
      if (index !== activeIndex.current && index >= 0 && index < slides.length) {
        activeIndex.current = index;
        animateNewSlide(index);
      }
    },
    updateProgress(progress) {
      if (progressRef.current) {
        gsap.set(progressRef.current, { scaleY: progress });
      }
    },
  }), [animateNewSlide]);

  return (
    <div className="absolute inset-0 flex items-center justify-center z-[15] pointer-events-none">
      <div
        ref={exLyTh}
        className="relative bg-black flex w-full h-0 overflow-hidden pointer-events-auto"
      >
        {/* Background images */}
        <div ref={imagesRef} className="absolute inset-0 overflow-hidden" />

        {/* Dark gradient overlay — heavier on left for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20 z-10" />

        {/* Top-left label */}
        {/* <div className="absolute top-6 left-6 md:top-10 md:left-10 z-20 flex items-center gap-2">
          <svg width="12" height="12" viewBox="0 0 12 12" className="text-orange-500 flex-shrink-0" fill="currentColor">
            <path d="M0 0 L12 12 M12 0 L12 12" stroke="currentColor" strokeWidth="1.5" fill="none"/>
            <path d="M2 10 L12 10 L12 0" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          </svg>
          <span
            ref={labelRef}
            className="text-white/80 text-[10px] md:text-xs font-mono tracking-[0.2em] uppercase"
          >
            {slides[0].label}
          </span>
        </div> */}

        {/* Main content grid */}
        <div className="relative z-20 w-full h-full flex flex-col md:flex-row items-end md:items-center px-6 md:px-10 pb-10 md:pb-0 pt-20 md:pt-0">

          {/* LEFT — stacked slide titles */}
          <div ref={titlesRef} className="flex flex-col justify-center gap-1 md:gap-2 w-full md:w-1/2 lg:w-[55%]">
            {/* Tag above titles */}
            {/* <p
              ref={tagRef}
              className="text-white/50 text-[10px] md:text-xs font-mono tracking-[0.15em] uppercase mb-2 md:mb-4"
            >
              {slides[0].tag}
            </p> */}

            {slides.map((slide, i) => (
              <div
                key={i}
                className={`slide-title-item flex items-center gap-2 md:gap-4 cursor-default ${
                  i === 0 ? "opacity-100" : "opacity-25"
                }`}
                style={{ transformOrigin: "left center" }}
              >
                {/* Arrow indicator — only visible on active */}
                <svg
                  className="arrow-icon flex-shrink-0 text-lime-themee- w-4 h-4 md:w-5 md:h-5"
                  style={{ opacity: i === 0 ? 1 : 0 }}
                  viewBox="0 0 20 20"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M3 3 L17 17 M17 5 L17 17 L5 17" />
                </svg>

                <h2
                  className={`font-black uppercase leading-none tracking-tight text-white transition-none
                    text-base sm:text-lg md:text-xl lg:text-2xl
                  `}
                >
                  {slide.title}
                </h2>
              </div>
            ))}
          </div>

          {/* RIGHT — description + progress */}
          <div className="hidden md:flex flex-col justify-center items-start w-1/2 lg:w-[45%] pl-8 lg:pl-16 gap-8">
            <p
              ref={descRef}
              className="text-white/85 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm"
            >
              {slides[0].description}
            </p>

            {/* Progress bar */}
            {/* <div className="flex items-center gap-3">
              <div className="h-[1px] w-24 bg-white/20 relative overflow-hidden">
                <div
                  ref={progressRef}
                  className="absolute top-0 left-0 h-full bg-white origin-left w-full scale-x-0"
                />
              </div>
              <span className="text-white/40 text-[10px] font-mono tracking-widest uppercase">
                Scroll to explore
              </span>
            </div> */}
          </div>
        </div>

        {/* Mobile description — shown below on small screens */}
        <div className="absolute bottom-6 left-6 right-6 z-20 md:hidden">
          <p
            className="text-white/75 text-xs leading-relaxed"
          >
            {slides[0].description}
          </p>
        </div>
      </div>
    </div>
  );
});

SliderSection.displayName = "SliderSection";

export default SliderSection;