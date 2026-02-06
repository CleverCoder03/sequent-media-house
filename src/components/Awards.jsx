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

const Awards = () => {
  return (
    <div className="my-20 lg:my-10">
      <Marquee
        speed={120}
        className="font-figtree-semibold text-[14vw] lg:text-[8vw] text-neutral-100 my-10 lg:my-20"
      >
        AWARDS+MENTIONS ▼ AWARDS+MENTIONS ▲ AWARDS+MENTIONS ▀ AWARDS+MENTIONS ◄
        AWARDS+MENTIONS ► AWARDS+MENTIONS ∞
      </Marquee>
      <div className="grid grid-cols-2 lg:grid-cols-4  gap-y-20 my-25 lg:my-30 px-8 md:px-18 lg:px-25">
        {clientsLogo1.map((client) => (
          <div
            key={client.id}
            className="relative mx-10 w-35 h-15 md:w-40 md:h-17.5 lg:w-45 lg:h-20"
          >
            <Image
              src={client.src}
              alt={client.name}
              fill
              className="object-contain brightness-0 invert mix-blend-screen"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Awards;
