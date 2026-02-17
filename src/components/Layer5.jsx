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
      <Vortex
      rangeY={200}
      baseHue={120}
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full"
      >
        <div className="flex flex-col items-center py-[30vh]">
          <HyperText
            startOnView={true}
            duration={1500}
            animateOnHover={false}
            className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            Sequent Cannon
          </HyperText>
          {/* <HyperText
            startOnView={true}
            duration={1500}
            animateOnHover={false}
            className="text-neutral-100 text-5xl md:text-6xl font-bold tracking-tight uppercase"
          >
            INTELLIGENCE AGE
          </HyperText> */}
        </div>
      </Vortex>
    </div>
  );
});

Layer5.displayName = "Layer5";

export default Layer5;
