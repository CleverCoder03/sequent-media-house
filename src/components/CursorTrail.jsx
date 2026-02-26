"use client";

import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";

export default function CursorTrail({ 
  imagePaths = [],
  imageWidth = 150,
  imageHeight = 200,
  mobileImageWidth = 100,
  mobileImageHeight = 150,
  distanceThreshold = 150,
  mobileDistanceThreshold = 50
}) {
  const containerRef = useRef(null);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const imageIndexRef = useRef(0);
  
  // Optimization: Pre-calculate threshold and use a fixed pool size
  const POOL_SIZE = 20; 

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // 1. Create a pool of images upfront to avoid DOM creation/deletion lag
    const imagePool = Array.from({ length: POOL_SIZE }).map(() => {
      const img = document.createElement('img');
      img.className = 'cursor-trail-image';
      img.style.visibility = 'hidden'; // Hide initially
      img.style.willChange = 'transform, opacity'; // Hint to browser for GPU acceleration
      container.appendChild(img);
      return img;
    });

    let poolIndex = 0;

    const animateImage = (x, y) => {
      const img = imagePool[poolIndex];
      
      // Update source and reset visibility
      img.src = imagePaths[imageIndexRef.current];
      img.style.visibility = 'visible';

      // GSAP Animation
      const tl = gsap.timeline();
      
      // Reset state immediately before animating
      tl.set(img, {
        x: x,
        y: y,
        scale: 0.5,
        opacity: 0,
        xPercent: -50,
        yPercent: -50,
        rotation: Math.random() * 20 - 10, // Optional: subtle rotation adds "life"
      });

      tl.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out"
      })
      .to(img, {
        scale: 1.2,
        opacity: 0,
        duration: 0.6,
        ease: "power2.in",
        onComplete: () => {
          img.style.visibility = 'hidden';
        }
      }, "+=0.1");

      // Cycle indices
      poolIndex = (poolIndex + 1) % POOL_SIZE;
      imageIndexRef.current = (imageIndexRef.current + 1) % imagePaths.length;
    };

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      const threshold = window.innerWidth < 768 ? mobileDistanceThreshold : distanceThreshold;
      
      const distance = Math.hypot(
        clientX - lastMousePosRef.current.x,
        clientY - lastMousePosRef.current.y
      );

      if (distance > threshold) {
        animateImage(clientX, clientY);
        lastMousePosRef.current = { x: clientX, y: clientY };
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (container) container.innerHTML = ''; // Cleanup pool
    };
  }, [imagePaths, distanceThreshold, mobileDistanceThreshold]);

  return (
    <>
      <div ref={containerRef} className="pointer-events-none fixed inset-0 z-5" />
      <style jsx global>{`
        .cursor-trail-image {
          position: fixed;
          top: 0;
          left: 0;
          width: ${imageWidth}px;
          height: ${imageHeight}px;
          object-fit: cover;
          pointer-events: none;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .cursor-trail-image {
            width: ${mobileImageWidth}px;
            height: ${mobileImageHeight}px;
          }
        }
      `}</style>
    </>
  );
}