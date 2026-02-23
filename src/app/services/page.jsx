"use client"

import React, { useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

gsap.registerPlugin(ScrollTrigger);

const stickyCardsData = [
  { index: 1, title: "Branding", image: "/0-about-1.jpeg", description: "First description", id: "branding" },
  { index: 2, title: "Photography", image: "/0-about-2.jpeg", description: "Second description", id: "photography" },
  { index: 3, title: "Event Management", image: "/0-about-3.jpeg", description: "Third description", id: "event-management" },
  { index: 4, title: "Weddings", image: "/0-about-1.jpeg", description: "First description", id: "weddings" },
  { index: 5, title: "Corporate gifting", image: "/0-about-2.jpeg", description: "Second description", id: "complete-gifting" },
  { index: 6, title: "Consulting & Digital PR", image: "/0-about-3.jpeg", description: "Third description", id: "consulting-&-digital-pr" }
];

const ServicesPage = () => {
  const container = useRef(null);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.sticky-card');
    
    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;

      // 1. Pinning Logic
      ScrollTrigger.create({
        trigger: card,
        start: "top top",
        endTrigger: cards[cards.length - 1],
        end: "top top",
        pin: true,
        pinSpacing: false,
      });

      // 2. Animation Logic 
      const nextCard = cards[i + 1];
      ScrollTrigger.create({
        trigger: nextCard,
        start: "top bottom",
        end: "top top",
        onUpdate: (self) => {
          const progress = self.progress;
          
          gsap.set(card, {
            scale: 1 - (progress * 0.25), 
            rotation: i % 2 === 0 ? progress * 5 : -(progress * 5), 
            "--overlay-opacity": progress 
          });
        }
      });
    });
  }, { scope: container });

  return (
    <>
    <main className="min-h-screen text-white font-sans overflow-hidden">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center text-center px-4">
        {/* Optional background glow/gradient to make it pop */}
        <div className="absolute inset-0 bg-linear-to-b from-zinc-900 to-black z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-6">
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight">
            Our Services
          </h1>
          <p className="text-lg md:text-2xl text-gray-400 max-w-2xl">
            Discover how our tailored solutions can help you build, scale, and transform your vision into reality. Scroll to explore.
          </p>
          
          {/* Scroll Indicator (Optional) */}
          {/* <div className="mt-12 animate-bounce">
            <svg className="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div> */}
        </div>
      </section>
      {/* --- END HERO SECTION --- */}

      {/* GSAP Animation Container */}
      <div ref={container} className="w-full relative">
        {stickyCardsData.map((card, i) => (
          <div 
            key={card.index}
            style={{ '--overlay-opacity': 0 }}
            className="sticky-card bg-black relative h-screen flex justify-between max-[1000px]:flex-col will-change-transform after:content-[''] after:absolute after:inset-0 after:bg-black after:opacity-(--overlay-opacity,0) after:z-10 after:pointer-events-none after:transition-opacity after:duration-100 after:ease-out"
            id={card.id}
          >
            {/* Index Section */}
            <div className="flex-1 p-6 md:p-12"> 
              <h1 className="text-4xl md:text-6xl font-bold text-lime-theme">0{card.index}</h1>
            </div>
            
            {/* Content Section */}
            <div className="flex-3 pt-[10vh] flex flex-col p-6 md:p-12 z-20">
              <div className="flex flex-col w-full h-full max-w-5xl mx-auto">
                <h1 className="text-4xl md:text-6xl mb-6 font-bold">{card.title}</h1>
                
                {/* Image Container with Next.js Image */}
                <div className="aspect-5/3 w-full mb-8 relative">
                  <Image 
                    src={card.image} 
                    alt={card.title}
                    fill
                    sizes="(max-width: 1000px) 100vw, 75vw"
                    className="object-cover rounded-lg shadow-2xl" 
                  />
                </div>
                
                <div className="flex max-[1000px]:flex-col gap-4 text-lg">
                  <div className="uppercase font-bold text-gray-400 flex-1 tracking-widest">
                    <p>Service Label</p>
                  </div>
                  <div className="flex-2 text-gray-200">
                    <p>{card.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </main>
    </>
  );
}

export default ServicesPage;