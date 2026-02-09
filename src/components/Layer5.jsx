import React, { forwardRef } from "react";
import { HyperText } from "./ui/hyper-text";
import { WavyBackground } from "./ui/wavy-background";

const Layer5 = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 bg-black z-50 flex h-dvh items-center justify-center"
    >
      <WavyBackground>
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
      </WavyBackground>
      
    </div>
  );
});

Layer5.displayName = "Layer5";

export default Layer5;
