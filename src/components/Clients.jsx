import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const clientsLogo1 = [
  { id: 1, name: "bubblelit", src: "/clients/bubblelit.png" },
  { id: 2, name: "ccd", src: "/clients/ccd.png" },
  { id: 3, name: "dhash", src: "/clients/dhash.png" },
  { id: 4, name: "digpu", src: "/clients/digpu.png" },
  { id: 5, name: "dnk", src: "/clients/dnk.png" },
  { id: 6, name: "elesta", src: "/clients/elesta.png" },
];

const clientsLogo2 = [
  { id: 7, name: "hygear", src: "/clients/hygear.png" },
  //   { id: 8, name: "ies", src: "/clients/ies.png" },
  { id: 9, name: "kurlon", src: "/clients/kurlon.png" },
  { id: 10, name: "paramount", src: "/clients/paramount.png" },
  { id: 11, name: "ramaiah", src: "/clients/ramaiah.png" },
  { id: 12, name: "swaadishtaa", src: "/clients/swaadishtaa.png" },
  { id: 13, name: "triumph", src: "/clients/triumph.png" },
  { id: 14, name: "vodafone", src: "/clients/vodafone.png" },
  { id: 15, name: "world-of-lockers", src: "/clients/world-of-lockers.png" },
];

const Clients = () => {
  return (
    <div className="flex flex-col py-10 md:py-15 lg:py-20 gap-10 md:gap-16 lg:gap-25 pb-12 md:pb-15 lg:pb-18">
      <h1 className="text-base lg:text-xl font-figtree-semibold uppercase text-neutral-100 px-8 md:px-18 lg:px-30">
        &#8600; &nbsp; Name Drops
      </h1>

      <Marquee speed={80} gradient={false} className="overflow-hidden">
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
      </Marquee>

      <Marquee
        speed={80}
        gradient={false}
        direction="right"
        className="overflow-hidden"
      >
        {clientsLogo2.map((client) => (
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
      </Marquee>
    </div>
  );
};

export default Clients;
