import React from "react";
import Marquee from "react-fast-marquee";
import Button from "./Button";
import { InstagramIcon } from "lucide-react";
import { FacebookIcon } from "lucide-react";
import { LinkedinIcon } from "lucide-react";
import Logo from "./LogoSvg";
import Image from "next/image";
import Link from "next/link";

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
          LET’S DISCUSS LET’S DISCUSS LET’S DISCUSS LET’S DISCUSS LET’S
          DISCUSS LET’S DISCUSS
        </Marquee>
        <div className="px-8 md:px-12 lg:px-20 mt-15 pb-5 lg:pb-10">
          <div className="text-neutral-100 uppercase font-figtree-medium text-xl leading-[1.2] flex flex-col md:flex-row justify-between items-start lg:items-center gap-20">
            <div>
              <p>Bangluru,</p>
              <p>India</p>
              <div className="mt-5">
                <Button />
              </div>
            </div>

            {/* Follow US */}
            <div className="text-neutral-100 uppercase font-figtree-medium text-xl leading-[1.2]">
              <p>&#8600; &nbsp; Follow Us</p>
              <div className="flex gap-2 mt-2 md:mt-5 [&_div]:hover:border-black [&_div]:hover:bg-lime-theme [&_div]:hover:text-black [&_div]:hover:transition [&_div]:hover:duration-300">
                <a href="https://www.instagram.com/sequentmediahouse?igsh=emE4amhtYWl0bmxy" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full border border-white size-12 flex items-center justify-center">
                  <InstagramIcon className="w-5 h-5" />
                </div>
                </a>
                <a href="http://" target="_blank" rel="noopener noreferrer">
                <div className="rounded-full border border-white size-12 flex items-center justify-center">
                  <FacebookIcon className="w-5 h-5" />
                </div></a>
                <a href="https://www.linkedin.com/company/sequent-media-house/" target="_blank" rel="noopener noreferrer">
                  <div className="rounded-full border border-white size-12 flex items-center justify-center">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-20">
            <div className="flex flex-col gap-8 md:flex-row md:justify-between md:items-center">
              <div className="w-1/2">
                <Link href={"/"}>
                  <Logo className="h-8 lg:h-12 w-auto text-neutral-100" />
                </Link>
              </div>
              <div className="flex gap-4 [&_a]:text-neutral-100 [&_a]:uppercase [&_a]:font-figtree-semibold [&_a]:lg:text-xl">
                <Link href={"/about"}>About</Link>
                <Link href={"/services"}>Services</Link>
                <Link href={"/work"}>Work</Link>
                <a href="mailto:hello@sequentmediahouse.com">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
