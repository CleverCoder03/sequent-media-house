"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextMask } from "@/components/TextMask";
import CharReveal from "@/components/CharReveal";
import { TextMask2 } from "@/components/TextMask2";
import { AutoMedia } from "@/components/AutoMedia";

const projects = [
  {
    id: 1,
    name: "Creative Design and Campaigns",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium magni veniam officia quisquam quidem consequatur, repudiandae et earum ipsam atque quos accusantium in beatae suscipit, perferendis recusandae omnis aspernatur minima quis sint rem, odit ad nostrum. Expedita tempora voluptas reiciendis rem corporis! Deserunt sapiente eveniet similique minus fugiat et molestiae vel ratione? Pariatur sed qui odit aspernatur,",
    media: [
      { type: 'image', url: '/work/project-1/image-1.jpg' },
      { type: 'image', url: '/work/project-1/image-2.jpg' },
      { type: 'image', url: '/work/project-1/image-3.jpg' },
      { type: 'image', url: '/work/project-1/image-4.jpg' },
      { type: 'image', url: '/work/project-1/image-5.png' },
      { type: 'image', url: '/work/project-1/image-6.png' },
      { type: 'image', url: '/work/project-1/image-7.png' },
      { type: 'image', url: '/work/project-1/image-8.jpg' },
      { type: 'video', url: '/work/project-1/video-1.mp4' },
    ]
  },
  {
    id: 2,
    name: "Event Design & Management",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium magni veniam officia quisquam quidem consequatur, repudiandae et earum ipsam atque quos accusantium in beatae suscipit, perferendis recusandae omnis aspernatur minima quis sint rem, odit ad nostrum. Expedita tempora voluptas reiciendis rem corporis! Deserunt sapiente eveniet similique minus fugiat et molestiae vel ratione? Pariatur sed qui odit aspernatur,",
    media: [
      { type: 'video', url: '/work/project-2/video-1.mp4' },
      { type: 'image', url: '/work/project-2/image-1.jpg' },
    ]
  },
  {
    id: 3,
    name: "Luxury Weddings and Films",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium magni veniam officia quisquam quidem consequatur, repudiandae et earum ipsam atque quos accusantium in beatae suscipit, perferendis recusandae omnis aspernatur minima quis sint rem, odit ad nostrum. Expedita tempora voluptas reiciendis rem corporis! Deserunt sapiente eveniet similique minus fugiat et molestiae vel ratione? Pariatur sed qui odit aspernatur,",
    media: [
      { type: 'image', url: 'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=1000&q=80' },
      { type: 'image', url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1000&q=80' },
      { type: 'video', url: '/work/project-3/video-1.mp4' },
    ]
  },
  {
    id: 4,
    name: "Product Photography and Films",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic laudantium magni veniam officia quisquam quidem consequatur, repudiandae et earum ipsam atque quos accusantium in beatae suscipit, perferendis recusandae omnis aspernatur minima quis sint rem, odit ad nostrum. Expedita tempora voluptas reiciendis rem corporis! Deserunt sapiente eveniet similique minus fugiat et molestiae vel ratione? Pariatur sed qui odit aspernatur,",
    media: [
      { type: 'image', url: '/work/project-4/image-1.jpg' },
      { type: 'image', url: '/work/project-4/image-2.jpg' },
      { type: 'image', url: '/work/project-4/image-3.jpg' },
      { type: 'image', url: '/work/project-4/image-4.jpg' },
      { type: 'image', url: '/work/project-4/image-5.jpg' },
      { type: 'image', url: '/work/project-4/image-6.jpg' },
      { type: 'image', url: '/work/project-4/image-7.jpg' },
      { type: 'image', url: '/work/project-4/image-8.jpg' },
      { type: 'video', url: '/work/project-4/video-1.mp4' },
    ]
  }
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
    <div key={rowIndex} className="project-row flex flex-col md:flex-row gap-12 md:gap-20">
      {pair.map((project) => (
        <div key={project.id} className="work-item flex-1 flex flex-col gap-6">
          
          {/* THE MEDIA CONTAINER */}
          <div className="relative aspect-4/3 overflow-hidden rounded-sm bg-zinc-900">
             <AutoMedia media={project.media} />
          </div>

          {/* TEXT CONTENT */}
          <div className="flex flex-col gap-2">
            <h3 className="text-2xl font-bold tracking-tight uppercase leading-none">
              {project.name}
            </h3>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-zinc-700" />
              <p className="text-zinc-500 font-medium tracking-widest uppercase text-[10px]">
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
