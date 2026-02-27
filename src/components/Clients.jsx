"use client"; // Required if you are using Next.js App Router for IntersectionObserver

import React, { useState, useEffect, useRef, memo } from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import clsx from "clsx";

const clientsLogo1 = [
  { id: 1, name: "bubblelit", src: "/clients/bubblelit.png" },
  { id: 2, name: "ccd", src: "/clients/ccd.png" },
  { id: 3, name: "dhash", src: "/clients/dhash.png" },
  { id: 4, name: "digpu", src: "/clients/digpu.png" },
  { id: 5, name: "dnk", src: "/clients/dnk.png" },
  { id: 6, name: "elesta", src: "/clients/elesta.png" },
  { id: 7, name: "hygear", src: "/clients/hygear.png" },
  { id: 8, name: "ies", src: "/clients/ies.png" },
];

const clientsLogo2 = [
  { id: 9, name: "kurlon", src: "/clients/kurlon.png" },
  { id: 10, name: "paramount", src: "/clients/paramount.png" },
  { id: 11, name: "ramaiah", src: "/clients/ramaiah.png" },
  { id: 12, name: "swaadishtaa", src: "/clients/swaadishtaa.png" },
  { id: 13, name: "triumph", src: "/clients/triumph.png" },
  { id: 14, name: "vodafone", src: "/clients/vodafone.png" },
  { id: 15, name: "world-of-lockers", src: "/clients/world-of-lockers.png" },
  { id: 16, name: "Tambuli", src: "/clients/tambuli.png" }
];

// 1. Memoize the component to prevent unnecessary re-renders during scroll
const ClientLogo = memo(({ src, name }) => {
  return (
    // 2. Fixed Tailwind classes: used standard w-36 and arbitrary aspect-[3/1]
    <div className="relative mx-8 md:mx-12 w-36 md:w-40 lg:w-44 aspect-[3/1.8] group">
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 176px"
        quality={80}
        // Next.js lazy loads by default, so we don't need to explicitly declare it
        className={clsx(
          "object-contain brightness-0 invert mix-blend-screen",
          "transition-all duration-500 ease-out"
        )}
      />
    </div>
  );
});

ClientLogo.displayName = "ClientLogo";

const Clients = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const sectionRef = useRef(null);

  // 3. Section-level Lazy Loading using Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.disconnect(); // Stop observing once loaded
        }
      },
      { rootMargin: "300px" } // Trigger load 300px before it enters the viewport
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    // 4. Added a min-height to prevent layout shifts when the marquee finally renders
    <section 
      ref={sectionRef} 
      className="flex flex-col py-12 md:py-16 lg:py-20 gap-12 md:gap-16 lg:gap-24 min-h-100"
    >
      <h2 className="text-sm md:text-base lg:text-lg font-figtree-semibold uppercase text-neutral-100 px-8 md:px-16 lg:px-24 tracking-wider">
        ↘ &nbsp; Our Clientele
      </h2>

      {/* Only render the heavy Marquee components if the section is near the viewport */}
      {isIntersecting && (
        <div className="flex flex-col gap-12 md:gap-16 lg:gap-24">
          <Marquee speed={70} gradient={false}>
            {clientsLogo1.map((client) => (
              <ClientLogo key={client.id} src={client.src} name={client.name} />
            ))}
          </Marquee>

          <Marquee speed={70} gradient={false} direction="right">
            {clientsLogo2.map((client) => (
              <ClientLogo key={client.id} src={client.src} name={client.name} />
            ))}
          </Marquee>
        </div>
      )}
    </section>
  );
};

export default Clients;