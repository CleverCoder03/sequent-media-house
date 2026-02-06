import React, { forwardRef } from "react";
import { HyperText } from "./ui/hyper-text";
import Image from "next/image";

const About = forwardRef((props, ref) => {
  return (
    <div ref={ref} className="w-full  bg-black z-50">
      <div className="flex flex-col items-center py-[30vh]">
        <HyperText
          startOnView={true}
          duration={1500}
          animateOnHover={false}
          className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
        >
          ▀ A MODEL FOR THE↘
        </HyperText>
        <HyperText
          startOnView={true}
          duration={1500}
          animateOnHover={false}
          className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
        >
          INTELLIGENCE AGE
        </HyperText>
      </div>
      <div>
        <div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <Image src={"/0-about-1.jpeg"} alt="About us" fill />
            </div>
          </div>
          <div className="w-1/2 text-neutral-100">
            <h1>Our UAE Ad-tech powerhouse</h1>
            <div>
              <p>Together, we operate as one integrated ecosystem:</p>
              <ul>
                <li>Premium DOOH networks</li>
                <li>Large-format outdoor advertising</li>
                <li>Indoor retail &amp; mall screen networks</li>
                <li>
                  Centralised Screen Management (CSM) for multi-location brands
                </li>
                <li>Real-time content scheduling &amp; automation</li>
                <li>Proof-of-play &amp; analytics dashboards</li>
                <li>Programmatic-ready DOOH</li>
                <li>Monetisation-ready retail media</li>
                <li>Rapid deployment across the UAE &amp; India</li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div className="w-1/2">
            <div className="relative w-full ">
              <Image src={"/0-about-1.jpeg"} alt="About us" fill />
            </div>
          </div>
          <div className="w-1/2 text-neutral-100">
            <h1>Our UAE Ad-tech powerhouse</h1>
            <div>
              <p>Together, we operate as one integrated ecosystem:</p>
              <ul>
                <li>Premium DOOH networks</li>
                <li>Large-format outdoor advertising</li>
                <li>Indoor retail &amp; mall screen networks</li>
                <li>
                  Centralised Screen Management (CSM) for multi-location brands
                </li>
                <li>Real-time content scheduling &amp; automation</li>
                <li>Proof-of-play &amp; analytics dashboards</li>
                <li>Programmatic-ready DOOH</li>
                <li>Monetisation-ready retail media</li>
                <li>Rapid deployment across the UAE &amp; India</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

About.displayName = "About";

export default About;
