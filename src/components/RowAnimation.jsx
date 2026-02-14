"use client";

import { forwardRef } from "react";
import RowAnimImg from "./RowAnimImg";
import { TextRoll } from "./ui/skiper-ui/skiper58";

const RowAnimation = forwardRef(({ rowsRef, rowsContentRef }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 z-30 flex flex-col justify-center"
    >
      <div className="flex flex-col w-[200%] h-dvh [&>div]:h-1/6 [&>div]:bg-neutral-100">
        {" "}
        {/* Extra width for the speed variation */}
        {/* Row 0: Empty Space */}
        <div ref={(el) => (rowsRef.current[0] = el)}></div>
        {/* Row 1: Branding */}
        <div
          ref={(el) => (rowsRef.current[1] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[1] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                FORM
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 2: Social */}
        <div
          ref={(el) => (rowsRef.current[2] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[2] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                FRAME
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 3: Campaigns */}
        <div
          ref={(el) => (rowsRef.current[3] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[3] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                STAGE
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 4: Motion */}
        <div
          ref={(el) => (rowsRef.current[4] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[4] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                VOW
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 5: Experiential */}
        <div
          ref={(el) => (rowsRef.current[5] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[5] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[70vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                GESTURE
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 6: Interactive */}
        <div
          ref={(el) => (rowsRef.current[6] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[6] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[70vw]"
          >
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <RowAnimImg src="/0-about-1.jpeg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-4xl md:text-6xl lg:text-7xl font-bold uppercase italic">
              <TextRoll>
                VOICE
              </TextRoll>
            </span>
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
            <RowAnimImg src="/0-about-1.jpeg" />
          </div>
        </div>
        {/* Row 7: Empty Space */}
        <div ref={(el) => (rowsRef.current[7] = el)}></div>
      </div>
    </div>
  );
});

RowAnimation.displayName = "RowAnimation";

export default RowAnimation;
