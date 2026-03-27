"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const services = [
  {
    title: "The Design Studio",
    description: "Bespoke wedding design reflecting your story with elegance and detail. From luxurious invitations to curated visual aesthetics, we craft every element.",
    includes: ["Wedding Invitations", "Customised Invites", "Digital Invitations", "Costume Design", "Event Design", "Mood Boards"],
    image: "/weddings/weddings-2.jpg",
  },
  {
    title: "Planning & Management",
    description: "Seamless planning with precision and sophistication. We ensure every detail is thoughtfully curated for a beautifully orchestrated celebration.",
    includes: ["Budgeting", "Timelines & Checklists", "Bridal Consultation", "Destination Planning", "Guest Experience", "Venue Scouting"],
    image: "/weddings/weddings-10.jpg",
  },
  {
    title: "Location & Venue",
    description: "Discover spaces that match the grandeur of your celebration. From intimate settings to luxurious destinations, we help find the perfect backdrop.",
    includes: ["Venue Selection", "Resorts", "Farmhouses", "Destination Locations", "Banquet Halls"],
    image: "/weddings/weddings-8.jpg",
  },
  {
    title: "Florals & Décor",
    description: "Transforming spaces into breathtaking experiences. Our décor concepts blend floral artistry, lighting, and design for stunning celebrations.",
    includes: ["Engagement", "Mehendi & Haldi", "Sangeet Decor", "Reception", "Luxury Destination Décor"],
    image: "/weddings/weddings-4.jpg",
  },
  {
    title: "Bridal & Groom Styling",
    description: "A complete styling experience designed to elevate your wedding presence with grace and confidence.",
    includes: ["Makeup & Hair", "Jewellery & Accessories", "Wardrobe Rentals", "Groom Styling", "Fitness Guidance"],
    image: "/weddings/weddings-1.jpg",
  },
  {
    title: "Food & Beverage",
    description: "Curated culinary experiences designed to delight every guest. From traditional spreads to global cuisines, we ensure impeccable taste.",
    includes: ["Catering Services", "Custom Menus", "Live Counters", "Dessert Stations", "Bar Services"],
    image: "/weddings/weddings-5.jpg",
  },
  {
    title: "Hospitality & Logistics",
    description: "Effortless guest experiences with seamless coordination. We take care of every detail so your guests feel welcomed and cared for.",
    includes: ["Guest Management", "Travel Coordination", "Accommodation", "Welcome Kits", "On-Ground Assistance"],
    image: "/weddings/weddings-7.jpg",
  },
  {
    title: "Entertainment",
    description: "Creating unforgettable moments through immersive experiences. From traditional performances to modern celebrations.",
    includes: ["Live Music & DJs", "Cultural Performances", "Celebrity Artists", "Sangeet Choreography", "Event Hosting"],
    image: "/weddings/weddings-3.jpg",
  },
  {
    title: "Photography & Videography",
    description: "Capturing your wedding as a timeless cinematic story. Every emotion, detail, and celebration is preserved with artistic excellence.",
    includes: ["Wedding Photography", "Cinematic Films", "Drone Coverage", "Pre-Wedding Shoots", "Social Media Reels"],
    image: "/weddings/weddings-9.jpg",
  },
  {
    title: "Honeymoon Experiences",
    description: "Begin your new journey with a beautifully curated escape. We design personalised honeymoon experiences that reflect your style.",
    includes: ["Destination Planning", "Travel Itineraries", "Luxury Stays", "Exclusive Experiences"],
    image: "/weddings/weddings-6.jpg",
  },
];

const WeddingServices = () => {
  return (
    <section className="bg-white pb-16 lg:pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-12 lg:mb-18">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-figtree-medium uppercase tracking-[0.4em] text-[10px] mb-4 block"
          >
            Our Ecosystem
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-neutral-900 text-4xl md:text-6xl font-figtree-semibold tracking-tight leading-tight"
          >
            The <span className="font-playfair-semibold-italic italic text-neutral-400">Art</span> of <br />
            Celebration.
          </motion.h2>
        </div>

        {/* --- SERVICES ALTERNATING GRID --- */}
        <div className="space-y-20 lg:space-y-32">
          {services.map((service, index) => {
            const isEven = index % 2 === 0;

            return (
              <div 
                key={index} 
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 lg:gap-16`}
              >
                {/* Image Section - Reduced Height (aspect-video) */}
                <motion.div 
                  initial={{ opacity: 0, x: isEven ? -60 : 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.8, ease: [0.25, 1, 0.5, 1] }}
                  className="w-full lg:w-[55%] aspect-4/3 md:aspect-video relative rounded-lg overflow-hidden shadow-sm"
                >
                  <Image 
                    src={service.image} 
                    alt={service.title} 
                    fill 
                    className="object-cover transition-transform duration-700 hover:scale-105" 
                  />
                </motion.div>

                {/* Content Section */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3, margin: "0px 0px -100px 0px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="w-full lg:w-[45%] flex flex-col"
                >
                  <span className="text-orange-500 font-figtree-bold text-[10px] tracking-[0.3em] mb-3">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-neutral-900 text-2xl md:text-3xl lg:text-4xl font-montserrat-semibold mb-4">
                    {service.title}
                  </h3>
                  <p className="text-neutral-600 font-montserrat-regular text-sm md:text-base leading-relaxed mb-6">
                    {service.description}
                  </p>
                  
                  {/* Features List - More Compact */}
                  <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                    {service.includes.map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1 h-1 bg-orange-500 rounded-full shrink-0" />
                        <span className="text-neutral-500 text-[10px] uppercase tracking-wider font-montserrat-medium truncate">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WeddingServices;