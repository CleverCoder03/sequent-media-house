"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CharReveal from "@/components/CharReveal";
import { AutoMedia } from "@/components/AutoMedia";

const projects = [
  {
    id: 1,
    name: (
      <>
        Creative{" "}
        <span className="font-playfair-semibold-italic text-lime-theme lowercase">
          Design
        </span>{" "}
        & Campaigns
      </>
    ),
    category: "brand identity",
    description:
      "We help brands find their voice and express it with clarity and confidence. From identity design to full-scale campaigns, our work is shaped by both instinct and strategy. The goal is simple — create ideas that people notice, remember, and respond to.",
    media: [
      { type: "image", url: "/work/project-1/image-1.jpg" },
      { type: "image", url: "/work/project-1/image-2.jpg" },
      { type: "image", url: "/work/project-1/image-3.jpg" },
      { type: "image", url: "/work/project-1/image-4.jpg" },
      { type: "image", url: "/work/project-1/image-5.png" },
      { type: "image", url: "/work/project-1/image-6.png" },
      { type: "image", url: "/work/project-1/image-7.png" },
      { type: "image", url: "/work/project-1/image-8.jpg" },
      // { type: "video", url: "/work/project-1/video-1.mp4" },
    ],
  },
  {
    id: 2,
    name: (
      <>
        Event{" "}
        <span className="font-playfair-semibold-italic text-lime-theme lowercase">
          Design
        </span>{" "}
        & Management
      </>
    ),
    category: "experiences",
    description:
      "Great events are about how people feel in the moment. We design and manage experiences that bring brands and audiences together in meaningful ways. From the first idea to the final applause, every detail is carefully considered.",
    media: [
      { type: "image", url: "/work/project-2/image-1.JPG" },
      { type: "image", url: "/work/project-2/image-2.JPG" },
      { type: "image", url: "/work/project-2/image-3.JPG" },
      { type: "image", url: "/work/project-2/image-4.JPG" },
      { type: "image", url: "/work/project-2/image-5.JPG" },
      { type: "image", url: "/work/project-2/image-6.JPG" },
      { type: "image", url: "/work/project-2/image-7.JPG" },
      { type: "image", url: "/work/project-2/image-8.JPG" },
      { type: "image", url: "/work/project-2/image-9.JPG" },
      { type: "image", url: "/work/project-2/image-10.JPG" },
      { type: "video", url: "/work/project-2/video-1.mp4" },
      { type: "video", url: "/work/project-2/video-2.mp4" }
    ],
  },
  {
    id: 3,
    name: (
      <>
        Luxury{" "}
        <span className="font-playfair-semibold-italic text-lime-theme lowercase">
          Weddings
        </span>{" "}
        & Films
      </>
    ),
    category: "timeless stories",
    description:
      "Weddings are deeply personal, and we approach them with the same care and emotion. We capture the moments, details, and atmosphere that make each celebration unique. The result is a timeless story that couples and families can relive for years to come.",
    media: [
      { type: "image", url: "/work/project-3/image-1.JPG" },
      { type: "image", url: "/work/project-3/image-2.JPG" },
      { type: "image", url: "/work/project-3/image-3.JPG" },
      { type: "image", url: "/work/project-3/image-4.JPG" },
      { type: "image", url: "/work/project-3/image-5.JPG" },
      { type: "image", url: "/work/project-3/image-6.JPG" },
      { type: "image", url: "/work/project-3/image-7.JPG" },
      { type: "image", url: "/work/project-3/image-8.JPG" },
      { type: "image", url: "/work/project-3/image-9.JPG" },
      { type: "image", url: "/work/project-3/image-10.JPG" },
      { type: "video", url: "/work/project-3/video-1.mp4" },
      { type: "image", url: "/work/project-3/image-11.JPG" },
      { type: "image", url: "/work/project-3/image-12.JPG" },
      { type: "image", url: "/work/project-3/image-13.JPG" },
      { type: "image", url: "/work/project-3/image-14.JPG" },
      { type: "image", url: "/work/project-3/image-15.JPG" },
      { type: "image", url: "/work/project-3/image-16.jpg" },
      { type: "image", url: "/work/project-3/image-17.jpg" },
      { type: "image", url: "/work/project-3/image-18.JPG" },
      { type: "image", url: "/work/project-3/image-19.JPG" },
    ],
  },
  {
    id: 4,
    name: (
      <>
        Product{" "}
        <span className="font-playfair-semibold-italic text-lime-theme lowercase">
          Photography
        </span>{" "}
        & Films
      </>
    ),
    category: "visual storytelling",
    description:
      "Every product has a story, and our job is to bring it to life visually. Through thoughtful lighting, composition, and motion, we create images and films that feel authentic and engaging. The result is content that doesn’t just look beautiful, it connects with people.",
    media: [
      { type: "image", url: "/work/project-4/image-1.jpg" },
      { type: "image", url: "/work/project-4/image-2.jpg" },
      { type: "image", url: "/work/project-4/image-3.jpg" },
      { type: "image", url: "/work/project-4/image-4.JPG" },
      { type: "image", url: "/work/project-4/image-5.JPG" },
      { type: "image", url: "/work/project-4/image-6.JPG" },
      { type: "image", url: "/work/project-4/image-7.JPG" },
      { type: "image", url: "/work/project-4/image-8.JPG" },
      // { type: "video", url: "/work/project-4/video-1.mp4" },
    ],
  },
];

const WorkPage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP Animation Logic for the rows
    const rows = gsap.utils.toArray(".project-row");

    rows.forEach((row) => {
      const cards = row.querySelectorAll(".work-item");

      // Set initial state (tilted and down)
      gsap.set(cards, {
        y: 200,
        opacity: 0,
      });

      cards.forEach((card, index) => {
        gsap.set(card, {
          rotation: index === 0 ? -4 : 4,
        });
      });

      // Animation triggered when row enters viewport
      gsap.to(cards, {
        y: 0,
        opacity: 1,
        rotation: 0,
        ease: "power3.out",
        duration: 1.2,
        stagger: 0.15,
        scrollTrigger: {
          trigger: row,
          start: "top 90%", // Trigger when the top of the row is 80% down the screen
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Helper to chunk projects into pairs
  const projectRows = [];
  for (let i = 0; i < projects.length; i += 2) {
    projectRows.push(projects.slice(i, i + 2));
  }

  return (
    <div
      className="text-white selection:bg-white selection:text-black overflow-x-hidden"
      ref={containerRef}
    >
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Optional background glow/gradient to make it pop */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-zinc-900 to-black z-0"></div> */}
        <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
          >
            <source src="/footer-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center justify-center gap-6">
          {/* The Heading */}
          <CharReveal>
            <h1 className="text-white text-4xl lg:text-6xl font-figtree-semibold leading-[1.1]">
              Where{" "}
              <span className="font-playfair-semibold-italic leading-[1.4] text-lime-theme">
                strategy
              </span>{" "}
              meets{" "}
              <span className="font-playfair-semibold-italic leading-[1.4] text-lime-theme">
                story
              </span>{" "}
            </h1>
            <h1 className="text-white text-4xl lg:text-6xl font-figtree-semibold leading-[1.1] -mt-2">
              and design moves with{" "}
              <span className="font-playfair-semibold-italic leading-[1.4] text-lime-theme">
                purpose.
              </span>
            </h1>
          </CharReveal>
        </div>
      </section>
      {/* --- END HERO SECTION --- */}

      {/* --- PROJECT GRID SECTION --- */}
      <main className="px-6 md:px-12 py-24 flex flex-col gap-24 md:gap-40 max-w-350 mx-auto">
        {projectRows.map((pair, rowIndex) => (
          <div
            key={rowIndex}
            className="project-row flex flex-col md:flex-row gap-12 md:gap-20"
          >
            {pair.map((project) => (
              <div
                key={project.id}
                className="work-item flex-1 flex flex-col gap-6"
              >
                {/* THE MEDIA CONTAINER */}
                <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-zinc-900">
                  <AutoMedia media={project.media} />
                </div>

                {/* TEXT CONTENT */}
                <div className="flex flex-col gap-4 mt-6">
                  {/* PROJECT TITLE - Rendered directly to support JSX mixed fonts */}
                  <h3 className="text-3xl uppercase font-figtree-semibold leading-[0.98] lg:text-4xl text-neutral-100">
                    {project.name}
                  </h3>

                  {/* PROJECT DESCRIPTION - Animation removed */}
                  <div className="font-figtree-regular text-neutral-300 text-base md:text-lg max-w-2xl">
                    <p className="text-neutral-400 leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </main>

      <Footer />
    </div>
  );
};

export default WorkPage;
