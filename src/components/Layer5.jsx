import React, { forwardRef } from "react";
import { HyperText } from "./ui/hyper-text";
import { TextMask } from "./TextMask";

const Layer5 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-black z-50 flex h-dvh items-center justify-center"
    >
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        >
          <source src="/bg-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Optional: Overlay to improve text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      <div className="flex flex-col items-center py-[30vh]">
        <HyperText
          startOnView={true}
          duration={1500}
          animateOnHover={false}
          className="text-neutral-100 text-5xl md:text-6xl font-bold text-center tracking-tight uppercase"
        >
          Sequent
        </HyperText>
        <HyperText
          startOnView={true}
          duration={1500}
          animateOnHover={false}
          className="text-5xl md:text-7xl tracking-tight font-playfair-semibold-italic text-lime-theme"
        >
          Nexus
        </HyperText>

        {/* Added Responsive Tagline Here */}
        {/* <p className="mt-4 md:mt-6 text-neutral-300 text-base md:text-lg lg:text-xl text-center tracking-wide font-medium px-4">
          Intelligent Screens. Unified Control.
        </p> */}
        <TextMask
          text="Intelligent Screens. Unified Control"
          delay={0.1}
          stagger="0.12"
          once={false}
          className="mt-4 md:mt-6 text-neutral-300 text-base md:text-lg lg:text-xl text-center tracking-wide font-medium px-4"
        />
      </div>
    </div>
  );
});

Layer5.displayName = "Layer5";

export default Layer5;
