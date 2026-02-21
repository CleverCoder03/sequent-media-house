"use client";

import React, { useLayoutEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const projects = [
  { id: 1, name: "Project One", description: "Brand Identity", image: "https://images.unsplash.com/photo-1522542550221-31fd19575a2d" },
  { id: 2, name: "Project Two", description: "Web Design", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f" },
  { id: 3, name: "Project Three", description: "UI/UX Motion", image: "https://images.unsplash.com/photo-1558655146-d09347e92766" },
  { id: 4, name: "Project Four", description: "Digital Strategy", image: "https://images.unsplash.com/photo-1547658719-da2b51169166" },
  { id: 5, name: "Project Five", description: "Mobile App", image: "https://images.unsplash.com/photo-1551650975-87deedd944c3" },
  { id: 6, name: "Project Six", description: "E-commerce", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30" },
  { id: 7, name: "Project Seven", description: "Visual Arts", image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f" },
  { id: 8, name: "Project Eight", description: "Packaging", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f" },
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
    <div className="text-white selection:bg-white selection:text-black overflow-x-hidden" ref={containerRef}>
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="h-screen w-full flex flex-col justify-center items-center px-6 text-center">
        <h1 className="text-6xl md:text-[9rem] font-bold tracking-tighter leading-none mb-6">
          SELECTED <br /> <span className="text-zinc-700 italic">WORKS</span>
        </h1>
        <p className="max-w-md text-zinc-400 text-lg md:text-xl font-medium">
          A collection of digital experiences built at the intersection of design and motion.
        </p>
        <div className="mt-16 animate-bounce opacity-50">
          {/* <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-400">Scroll Down</p> */}
        </div>
      </section>

      {/* --- PROJECT GRID SECTION --- */}
      <main className="px-6 md:px-12 py-24 flex flex-col gap-24 md:gap-40 max-w-350 mx-auto">
        {projectRows.map((pair, rowIndex) => (
          <div key={rowIndex} className="project-row flex flex-col md:flex-row gap-12 md:gap-20">
            {pair.map((project) => (
              <div key={project.id} className="work-item flex-1 flex flex-col gap-6">
                <div className="relative aspect-4/3 overflow-hidden group rounded-sm bg-zinc-900">
                  <Image
                    src={`${project.image}?auto=format&fit=crop&w=1000&q=80`}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out"
                    // className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 grayscale hover:grayscale-0"
                    priority={project.id <= 2}
                  />
                </div>
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