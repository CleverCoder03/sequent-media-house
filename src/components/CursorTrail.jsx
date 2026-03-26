"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";

// Helper functions from the original script
const lerp = (a, b, n) => (1 - n) * a + n * b;
const getDistance = (x1, y1, x2, y2) => Math.hypot(x2 - x1, y2 - y1);

// A curated list of Unsplash images to replace the Cloudinary ones
const unsplashImages = [
  "/home/trail-1.jpg",
  "/home/trail-2.jpg",
  "/home/trail-5.jpg",
  "/home/trail-6.jpg",
  "/home/trail-7.jpg",
  "/home/trail-9.jpg",
];

export default function CursorTrail({
  images = unsplashImages,
  trailDistance = 100,
  className = "",
}) {
  // We use refs to manipulate DOM elements directly for high-performance animation
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  // State refs to track animation values without triggering React re-renders
  const state = useRef({
    mousePos: { x: 0, y: 0 },
    cacheMousePos: { x: 0, y: 0 },
    lastMousePos: { x: 0, y: 0 },
    imgPosition: 0,
    zIndexVal: 1,
  });

  useEffect(() => {
    // 1. Setup Event Listeners
    const handleMouseMove = (ev) => {
      state.current.mousePos = { x: ev.clientX, y: ev.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    // 2. Animation Loop
    let frameId;

    const render = () => {
      const { mousePos, cacheMousePos, lastMousePos } = state.current;

      // Calculate distance from last active position
      const distance = getDistance(
        mousePos.x,
        mousePos.y,
        lastMousePos.x,
        lastMousePos.y,
      );

      // Smooth out the "current" drawing position (lerp)
      state.current.cacheMousePos.x = lerp(cacheMousePos.x, mousePos.x, 0.1);
      state.current.cacheMousePos.y = lerp(cacheMousePos.y, mousePos.y, 0.1);

      // Threshold: only trigger a new image if moved trailDistance px
      if (distance > trailDistance) {
        showNextImage();
        state.current.lastMousePos = { ...mousePos };
      }

      // Check if animations are idle to reset z-index (optional optimization)
      // In the GSAP 3 version, we can just keep incrementing zIndex safely
      // or reset if needed, but the original logic's reset was a bit aggressive.
      // We will increment zIndex to ensure correct stacking order.

      frameId = requestAnimationFrame(render);
    };

    const showNextImage = () => {
      const { imgPosition, zIndexVal, cacheMousePos, mousePos } = state.current;

      // Get the current image DOM element
      const img = itemsRef.current[imgPosition];
      if (!img) return;

      // Kill any running animations on this specific image
      gsap.killTweensOf(img);

      // Calculation for centering the image
      const rect = img.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      // GSAP Timeline (GSAP 3 Syntax)
      const tl = gsap.timeline();

      // 1. Set initial state (visible, centered on cached mouse pos)
      tl.set(img, {
        opacity: 1,
        scale: 1,
        zIndex: zIndexVal,
        x: cacheMousePos.x - w / 2,
        y: cacheMousePos.y - h / 2,
      })
        // 2. Move to actual mouse pos slightly
        .to(
          img,
          {
            duration: 0.9,
            ease: "expo.out",
            x: mousePos.x - w / 2,
            y: mousePos.y - h / 2,
          },
          0,
        )
        // 3. Fade out and scale down
        .to(
          img,
          {
            duration: 1,
            ease: "power1.out",
            opacity: 0,
          },
          0.4,
        )
        .to(
          img,
          {
            duration: 1,
            ease: "quint.out",
            scale: 0.2,
          },
          0.4,
        );

      // Update state for next cycle
      state.current.zIndexVal++;
      state.current.imgPosition =
        imgPosition < itemsRef.current.length - 1 ? imgPosition + 1 : 0;
    };

    // Start the loop
    render();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <main
      className={`w-full h-full bg-black text-black pointer-events-none fixed inset-0 z-5 ${className}`}
    >
      <div
        ref={containerRef}
        className="relative flex justify-center items-center h-[300px] md:h-screen w-full overflow-hidden"
      >
        {images.map((url, index) => (
          <Image
            key={index}
            ref={(el) => {
              if (itemsRef.current) {
                itemsRef.current[index] = el;
              }
            }}
            className="absolute top-0 left-0 opacity-0 w-[180px] aspect-[2/3] object-cover block shadow-2xl rounded-sm pointer-events-none"
            src={url}
            alt={`trail-image-${index}`}
            // Next.js Image requires width and height to prevent layout shift.
            // Based on your w-[200px] and aspect-[2/3], the dimensions are 200x300
            width={200}
            height={300}
            // Optional: uncomment the line below if you want the first few images
            // to preload immediately so the trail doesn't lag on the first mouse move
            priority={index < 5}
          />
        ))}
      </div>
    </main>
  );
}
