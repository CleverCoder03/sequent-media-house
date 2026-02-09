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
        {/* <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-20 my-25 sm:px-4 lg:my-30  md:px-18 lg:px-25 justify-center items-center">
          {clientsLogo1.map((client) => (
            <div key={client.id} className="flex items-center justify-center">
              <div className="relative w-35 h-15 md:w-40 md:h-17.5 lg:w-45 lg:h-20">
                <Image
                  src={client.src}
                  alt={client.name}
                  fill
                  className="object-contain brightness-0 invert mix-blend-screen"
                  priority
                />
              </div>
            </div>
          ))}
        </div> */}
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
              <div key={award.id} className="flex items-start gap-10">
                {/* ICON */}
                <div className="hidden w-20 h-20 lg:flex items-center justify-center shrink-0">
                  <Image
                    src={award.image}
                    alt={award.title}
                    width={64}
                    height={64}
                    className="object-contain"
                  />
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <h1 className="font-figtree-semibold text-lg lg:text-2xl text-neutral-100 uppercase">
                    {award.title}
                  </h1>
                  <p className="font-figtree-regular mt-2 text-lg lg:text-xl text-neutral-500">
                    {award.description}
                  </p>
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
