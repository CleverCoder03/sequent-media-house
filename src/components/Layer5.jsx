import React, { forwardRef } from "react";
import { HyperText } from "./ui/hyper-text";
import { WavyBackground } from "./ui/wavy-background";
import CursorTrail from "./CursorTrail";
import { Vortex } from "./ui/vortex";

const Layer5 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-black z-50 flex h-dvh items-center justify-center"
    >
      {/* <CursorTrail
        imagePaths={["0-about-1.jpeg", "0-about-2.jpeg"]}
        imageWidth={150}
        imageHeight={200}
        mobileImageWidth={100}
        mobileImageHeight={150}
        distanceThreshold={100}
        mobileDistanceThreshold={50}
      /> */}
      {/* <Vortex
      rangeY={200}
      baseHue={120}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      > */}
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
            className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            Cannon
          </HyperText>
        </div>
      {/* </Vortex> */}
    </div>
  );
});

Layer5.displayName = "Layer5";

export default Layer5;
