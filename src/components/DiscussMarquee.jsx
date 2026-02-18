"use client";

import React from "react";
import Marquee from "react-fast-marquee";
import MarqueeIcon from "./MarqueeIcon";

// ✅ Move this OUTSIDE the main component
const Item = ({ icon }) => (
  <div className="flex items-center gap-[0.4em] ">
    <span>LET’S DISCUSS</span>
    <MarqueeIcon variant={icon} />
  </div>
);

const DiscussMarquee = () => {
  const icons = [1, 2, 3, 4, 5];

  return (
    <Marquee
  speed={120}
  className="font-figtree-medium text-[10vw] lg:text-[8vw] text-neutral-100 leading-none"
>
  {[1,2,3,4,5].map((icon, i) => (
    <div
      key={i}
      className="flex items-center gap-[0.4em] mx-[0.2em]"
    >
      <span>LET’S DISCUSS</span>
      <MarqueeIcon variant={icon} />
    </div>
  ))}
</Marquee>

  );
};

export default DiscussMarquee;
