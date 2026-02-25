"use client";
import React, { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { EffectCoverflow, Navigation, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const teamMembers = [
  { src: "/0-about-1.jpeg", name: "JAMES", role: "Creative Lead" },
  { src: "/0-about-1.jpeg", name: "MARK", role: "Art Director" },
  { src: "/0-about-1.jpeg", name: "ANNABELLE", lastName: "WILSON", role: "Client Services Director" },
  { src: "/0-about-1.jpeg", name: "RACHEL", role: "Account Manager" },
  { src: "/0-about-1.jpeg", name: "MATT", role: "Developer" },
  { src: "/0-about-1.jpeg", name: "CHARLIE", role: "Strategist" },
];

const TeamCarousel = () => {
  return (
    <div className="w-full bg-[#FF5F00] py-16 overflow-hidden" style={{ fontFamily: "'Arial Black', 'Helvetica Neue', sans-serif" }}>
      <style>{`
        .team-swiper {
          overflow: visible !important;
          padding: 40px 0 80px !important;
        }

        .team-swiper .swiper-slide {
          transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
          opacity: 0.35;
          filter: blur(0px);
          transform: scale(0.78);
        }

        .team-swiper .swiper-slide-active {
          opacity: 1 !important;
          filter: blur(0px) !important;
          transform: scale(1) !important;
        }

        .team-swiper .swiper-slide-prev,
        .team-swiper .swiper-slide-next {
          opacity: 0.6 !important;
          transform: scale(0.85) !important;
        }

        /* hide default swiper navigation */
        .team-swiper .swiper-button-next,
        .team-swiper .swiper-button-prev {
          display: none;
        }

        .nav-btn {
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px;
          transition: transform 0.2s ease;
          line-height: 0;
        }
        .nav-btn:hover { transform: scale(1.2); }
        .nav-btn:active { transform: scale(0.9); }

        .slide-name {
          font-family: 'Arial Black', 'Impact', sans-serif;
          font-weight: 900;
          font-size: clamp(18px, 2.2vw, 28px);
          letter-spacing: -0.03em;
          line-height: 1;
          color: #000;
          text-transform: uppercase;
        }

        .slide-role {
          font-family: 'Arial', sans-serif;
          font-size: clamp(9px, 0.9vw, 12px);
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #000;
          opacity: 0.75;
          margin-top: 8px;
          margin-left: 28px;
          font-style: italic;
        }

        /* Ticket notch */
        .notch-top {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 28px;
          background: #FF5F00;
          border-radius: 50%;
          z-index: 10;
        }

        .notch-bottom {
          position: absolute;
          bottom: -14px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 28px;
          background: #FF5F00;
          border-radius: 50%;
          z-index: 10;
        }
      `}</style>

      <div className="max-w-[1600px] mx-auto relative" style={{ padding: "0 60px" }}>
        
        {/* Left Nav */}
        <button
          className="custom-prev nav-btn"
          style={{
            position: "absolute",
            left: "8px",
            top: "42%",
            transform: "translateY(-50%)",
            zIndex: 50,
          }}
        >
          <ChevronLeft size={72} strokeWidth={2.5} color="#000" />
        </button>

        {/* Right Nav */}
        <button
          className="custom-next nav-btn"
          style={{
            position: "absolute",
            right: "8px",
            top: "42%",
            transform: "translateY(-50%)",
            zIndex: 50,
          }}
        >
          <ChevronRight size={72} strokeWidth={2.5} color="#000" />
        </button>

        <Swiper
          modules={[EffectCoverflow, Navigation, A11y]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1.6}
          breakpoints={{
            480:  { slidesPerView: 2.2 },
            768:  { slidesPerView: 3 },
            1024: { slidesPerView: 3.8 },
            1280: { slidesPerView: 4.5 },
            1536: { slidesPerView: 5.2 },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 80,
            modifier: 1,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="team-swiper"
        >
          {teamMembers.map((member, index) => (
            <SwiperSlide key={index} style={{ paddingBottom: "10px" }}>
              {({ isActive }) => (
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                  
                  {/* Image */}
                  <div style={{ position: "relative", width: "100%", aspectRatio: "3/4", marginBottom: isActive ? "20px" : "12px" }}>
                    <div className="notch-top" />
                    <img
                      src={member.src}
                      alt={member.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "top center",
                        filter: "grayscale(100%) contrast(1.15)",
                        borderRadius: "4px",
                        boxShadow: isActive ? "0 25px 60px rgba(0,0,0,0.35)" : "0 10px 30px rgba(0,0,0,0.2)",
                        display: "block",
                      }}
                    />
                    <div className="notch-bottom" />
                  </div>

                  {/* Name + Role — only styled prominently for active */}
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                      {/* Dash marker */}
                      <div style={{
                        width: isActive ? "22px" : "14px",
                        height: "3px",
                        background: "#000",
                        flexShrink: 0,
                        transition: "width 0.4s ease",
                      }} />
                      <span className="slide-name">
                        {member.name}
                        {member.lastName && (
                          <span style={{ fontWeight: 400, opacity: 0.55 }}> / {member.lastName}</span>
                        )}
                      </span>
                    </div>
                    {isActive && (
                      <p className="slide-role">{member.role}</p>
                    )}
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TeamCarousel;