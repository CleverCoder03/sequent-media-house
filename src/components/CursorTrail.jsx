"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function CursorTrail({ 
  imagePaths = [
    '/images/trail1.jpg',
    '/images/trail2.jpg',
    '/images/trail3.jpg',
    '/images/trail4.jpg',
    '/images/trail5.jpg'
  ],
  imageWidth = 150,
  imageHeight = 200,
  mobileImageWidth = 100,
  mobileImageHeight = 150,
  distanceThreshold = 100,
  mobileDistanceThreshold = 50
}) {
  const containerRef = useRef(null);
  const imageIndexRef = useRef(0);
  const lastMousePosRef = useRef({ x: 0, y: 0 });
  const distanceThresholdRef = useRef(distanceThreshold);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Set initial threshold based on screen size
    const updateThreshold = () => {
      distanceThresholdRef.current = window.innerWidth < 768 
        ? mobileDistanceThreshold 
        : distanceThreshold;
    };

    updateThreshold();
    window.addEventListener('resize', updateThreshold);

    const createImage = (x, y) => {
      // Create new image element
      const img = document.createElement('img');
      img.classList.add('cursor-trail-image');
      img.src = imagePaths[imageIndexRef.current];
      
      // Add image to container
      container.appendChild(img);

      // Update index to show next image (loop back to first)
      imageIndexRef.current = (imageIndexRef.current + 1) % imagePaths.length;

      // Set starting position with GSAP
      gsap.set(img, {
        x: x,
        y: y,
        scale: 0,
        opacity: 0,
        // rotation: Math.random() * 30 - 15,
        xPercent: -50,
        yPercent: -50
      });

      // Create timeline animation
      const tl = gsap.timeline({
        onComplete: () => {
          img.remove();
        }
      });

      tl.to(img, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
      })
      .to(img, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        delay: 0.2
      });
    };

    const handleMouseMove = (e) => {
      // Calculate distance from last position
      const distance = Math.hypot(
        e.clientX - lastMousePosRef.current.x,
        e.clientY - lastMousePosRef.current.y
      );

      // If distance is bigger than threshold, create new image
      if (distance > distanceThresholdRef.current) {
        createImage(e.clientX, e.clientY);
        
        // Update last position
        lastMousePosRef.current.x = e.clientX;
        lastMousePosRef.current.y = e.clientY;
      }
    };

    // Add mousemove event listener to window for full coverage
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', updateThreshold);
    };
  }, [imagePaths, distanceThreshold, mobileDistanceThreshold]);

  return (
    <>
      {/* Hidden container for appending trail images */}
      <div ref={containerRef} className="pointer-events-none fixed inset-0 z-[5]" />

      {/* Styles for trail images */}
      <style jsx global>{`
        .cursor-trail-image {
          position: fixed;
          width: ${imageWidth}px;
          height: ${imageHeight}px;
          object-fit: cover;
          pointer-events: none;
          border-radius: 8px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
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