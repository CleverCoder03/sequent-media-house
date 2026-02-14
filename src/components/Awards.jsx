import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

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

const awardsData = [
  {
    id: 1,
    title: "The International Prime Awards Asia 2023",
    description:
      "Honoured at the International Prime Awards Asia 2023 held at the Sheraton Grand Sukhumvit, Bangkok, Thailand. Our Founder & CEO Sharath Kumar Basavaraju shared the stage with dignitaries including HRH Princess Isabelle Lafforgue and Mr. Kanok Abhiradee, Former President of Thai Airways. The event celebrated top businesses demonstrating exceptional excellence and leadership.",
    image: "/awards/award-1.svg",
  },
  {
    id: 2,
    title: "The International Prime Awards Dubai 2022",
    description:
      "Received the prestigious International Prime Award for excellence in Media & Communications in Dubai, United Arab Emirates.",
    image: "/awards/award-2.svg",
  },
  {
    id: 3,
    title: "Sustainable Development Summit Sri Lanka 2022",
    description:
      "Invited to the Sustainable Development Summit – Sri Lanka 2022, attended by the Hon. Prime Minister of Sri Lanka Dinesh Gunawardena and several national leaders. The event focused on sustainable development and global economic progress.",
    image: "/awards/award-3.svg",
  },
  {
    id: 4,
    title: "Event Partner – Indo–Thai International Economic Summit 2022",
    description:
      "Served as the proud event partner for the Indo–Thai International Economic Summit 2022 hosted by the Institute of Economic Studies (IES) in Bangkok. The conference was attended by distinguished leaders from Thailand and across Asia.",
    image: "/awards/award-4.svg",
  },
  {
    id: 5,
    title: "International Economic Summit 2020 – Bangalore, India",
    description:
      "Awarded the Certificate of Excellence in the Events & Marketing Industry by Hon. Minister of Large & Medium Scale Industries, Former CM of Karnataka Shri Jagadish Shettar, and K.B. Arasappa, Vice President of the Karnataka Small Scale Industries Association.",
    image: "/awards/award-5.svg",
  },
  {
    id: 6,
    title: "Certificate of Honor & Patronage 2019",
    description:
      "Honored by His Excellency Suhail Mohammad Al Zarooni for conceptualizing and executing WINPSIRE 2019 – An International Women Summit.",
    image: "/awards/award-6.svg",
  },
  {
    id: 7,
    title: "Success Stories – Special Magazine Feature 2018",
    description:
      "Featured in a special international edition recognizing outstanding achievements in business across the globe, presented in Bangkok by Former Deputy Prime Minister of Thailand, H.E. Korn Dabbaransi.",
    image: "/awards/award-7.svg",
  },
  {
    id: 8,
    title: "The Outstanding Global Leadership Award 2018",
    description:
      "Recognized for ideating, strategizing, conceptualizing, and developing the ‘Mumma Me-Ya’ social awareness campaign. Awarded at Swissotel Al Ghurair, Dubai, by leaders from Dubai Government and international organizations.",
    image: "/awards/award-8.svg",
  },
  {
    id: 9,
    title: "Udyog Rattan Award 2017 & Leadership Innovation Excellence Award 2017",
    description:
      "Conferred by the Institute of Economic Studies (IES) for outstanding performance in the fields of advertising, branding, and event management services.",
    image: "/awards/award-9.svg",
  },
];

const Awards = () => {
  return (
    <>
      <div className="my-20 lg:my-10">
        <Marquee
          speed={120}
          className="font-figtree-semibold text-[14vw] lg:text-[8vw] text-neutral-100 my-10 lg:my-20"
        >
          AWARDS+MENTIONS ▼ AWARDS+MENTIONS ▲ AWARDS+MENTIONS ▀ AWARDS+MENTIONS
          ◄ AWARDS+MENTIONS ► AWARDS+MENTIONS ∞
        </Marquee>
      </div>
      <div className="mb-20 lg:mb-0 lg:my-10 px-4 md:px-18 lg:px-25">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-15 lg:gap-0 [&>div]:lg:w-1/2 [&>div]:lg:py-20">
          {/* LEFT */}
          <div className="lg:sticky top-0  [&>h2]:text-neutral-100 [&>h2]:uppercase [&>h2]:text-[10vw] [&>h2]:lg:text-[5vw]">
            <h2 className="font-figtree-semibold text-3xl lg:text-4xl">
              Our Proud
            </h2>
            <h2 className="font-figtree-semibold text-3xl lg:text-4xl text-transparent! [-webkit-text-stroke:2px_white]">
              Moments
            </h2>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col gap-10">
            {awardsData.map((award) => (
              // Added 'group' here to control children on hover
              <div key={award.id} className="group flex items-start gap-8 cursor-pointer">
                {/* ICON */}
                <div className="hidden lg:w-12 lg:h-12 lg:flex items-center justify-center shrink-0">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  {/* Added group-hover color change for better interactivity */}
                  <h1 className="font-figtree-semibold text-lg lg:text-2xl text-neutral-100 uppercase transition-colors duration-300 group-hover:text-blue-500">
                    {award.title}
                  </h1>
                  
                  {/* ANIMATION WRAPPER */}
                  {/* 1. We use grid with 0fr height by default */}
                  {/* 2. On group-hover, we switch to 1fr (full height) */}
                  <div className="grid grid-rows-[1fr] lg:grid-rows-[0fr] lg:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="font-figtree-regular mt-2 text-base text-neutral-500 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {award.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Awards;