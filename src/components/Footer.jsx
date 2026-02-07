import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./Button";

const Footer = () => {
  return (
    <div className="relative inset-0">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/gradient.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* CONTENT */}
      <div className="py-10">
        <Marquee
          speed={120}
          className="font-figtree-medium text-[10vw] lg:text-[8vw] text-neutral-100 my-5 lg:my-20"
        >
          LET’S TALK █ LET’S TALK ► LET’S TALK ▲ LET’S TALK □ LET’S TALK ◄ LET’S
          TALK ▀
        </Marquee>
        <div className="px-6 text-neutral-100 uppercase font-figtree-medium text-xl leading-[1.2]">
            <div>
                <p>Sequent Media House</p>
                <p>Floor 4, 141-145</p>
                <p>Curtain road</p>
                <p>London,</p>
                <p>EC2A 3BX</p>
                <div className="mt-5">
                    <Button />
                </div>
            </div>
            <div className="text-neutral-100 uppercase font-figtree-medium text-xl leading-[1.2]">
                <p>&#8600; &nbsp; Follow Us</p>
                <div>
                    
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
