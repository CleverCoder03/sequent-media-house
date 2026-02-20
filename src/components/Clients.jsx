import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import clsx from "clsx";

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
  { id: 8, name: "ies", src: "/clients/ies.png" },
  { id: 9, name: "kurlon", src: "/clients/kurlon.png" },
  { id: 10, name: "paramount", src: "/clients/paramount.png" },
  { id: 11, name: "ramaiah", src: "/clients/ramaiah.png" },
  { id: 12, name: "swaadishtaa", src: "/clients/swaadishtaa.png" },
  { id: 13, name: "triumph", src: "/clients/triumph.png" },
  { id: 14, name: "vodafone", src: "/clients/vodafone.png" },
  { id: 15, name: "world-of-lockers", src: "/clients/world-of-lockers.png" },
];

const ClientLogo = ({ src, name }) => {
  return (
    <div className="relative mx-8 md:mx-12 w-35 md:w-40 lg:w-45 aspect-3/1 group">
      <Image
        src={src}
        alt={`${name} logo`}
        fill
        sizes="(max-width: 768px) 140px, (max-width: 1024px) 160px, 180px"
        quality={80}
        className={clsx(
          "object-contain brightness-0 invert mix-blend-screen",
          "transition-all duration-500 ease-out",
        )}
      />
    </div>
  );
};

const Clients = () => {
  return (
    <section className="flex flex-col py-12 md:py-16 lg:py-20 gap-12 md:gap-16 lg:gap-24">
      
      <h2 className="text-sm md:text-base lg:text-lg font-figtree-semibold uppercase text-neutral-100 px-8 md:px-16 lg:px-24 tracking-wider">
        ↘ &nbsp; Our Clientele
      </h2>

      <Marquee speed={70} gradient={false}>
        {clientsLogo1.map((client) => (
          <ClientLogo
            key={client.id}
            src={client.src}
            name={client.name}
          />
        ))}
      </Marquee>

      {/* <Marquee
        speed={70}
        gradient={false}
        direction="right"
      >
        {clientsLogo2.map((client) => (
          <ClientLogo
            key={client.id}
            src={client.src}
            name={client.name}
          />
        ))}
      </Marquee> */}
    </section>
  );
};

export default Clients;
