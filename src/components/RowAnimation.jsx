"use client";

import { forwardRef } from "react";
import RowAnimImg from "./RowAnimImg";
import { TextRoll } from "./ui/skiper-ui/skiper58";

const RowAnimation = forwardRef(({ rowsRef, rowsContentRef }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 z-40 flex flex-col justify-center"
    >
      <div className="flex flex-col w-[200%] h-dvh [&>div]:h-1/6 [&>div>div]:lg:gap-5 [&>div>div>span]:font-montserrat-semibold [&>div>div>span]:lg:mx-4 [&>div]:bg-neutral-200">
        {" "}
        {/* Extra width for the speed variation */}
        {/* Row 0: Empty Space */}
        <div ref={(el) => (rowsRef.current[0] = el)} className="pointer-events-none"></div>
        {/* Row 1: Branding */}
        <div
          ref={(el) => (rowsRef.current[1] = el)}
          className="overflow-hidden flex items-center"
        >
          <div
            ref={(el) => (rowsContentRef.current[1] = el)}
            className="flex items-center gap-10 whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/form/1.jpg" />
            <RowAnimImg src="/form/2.jpg" />
            <RowAnimImg src="/form/3.jpg" />
            <RowAnimImg src="/form/4.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/form/5.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/form/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl font-bold uppercase ">
              <TextRoll>
                FORM
              </TextRoll>
            </span>
            <RowAnimImg src="/form/2.jpg" />
            <RowAnimImg src="/form/3.jpg" />
            <RowAnimImg src="/form/4.jpg" />
            <RowAnimImg src="/form/5.jpg" />
            <RowAnimImg src="/form/1.jpg" />
            <RowAnimImg src="/form/2.jpg" />
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
            <RowAnimImg src="/frame/1.jpg" />
            <RowAnimImg src="/frame/2.jpg" />
            <RowAnimImg src="/frame/3.jpg" />
            <RowAnimImg src="/frame/4.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/frame/5.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/frame/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl font-bold uppercase ">
              <TextRoll>
                FRAME
              </TextRoll>
            </span>
            <RowAnimImg src="/frame/2.jpg" />
            <RowAnimImg src="/frame/3.jpg" />
            <RowAnimImg src="/frame/4.jpg" />
            <RowAnimImg src="/frame/5.jpg" />
            <RowAnimImg src="/frame/1.jpg" />
            <RowAnimImg src="/frame/2.jpg" />
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
            <RowAnimImg src="/stage/1.jpg" />
            <RowAnimImg src="/stage/2.jpg" />
            <RowAnimImg src="/stage/3.jpg" />
            <RowAnimImg src="/stage/4.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/stage/5.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/stage/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl uppercase">
              <TextRoll>
                STAGE
              </TextRoll>
            </span>
            <RowAnimImg src="/stage/2.jpg" />
            <RowAnimImg src="/stage/3.jpg" />
            <RowAnimImg src="/stage/4.jpg" />
            <RowAnimImg src="/stage/5.jpg" />
            <RowAnimImg src="/stage/1.jpg" />
            <RowAnimImg src="/stage/2.jpg" />
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
            <RowAnimImg src="/vow/1.jpg" />
            <RowAnimImg src="/vow/2.jpg" />
            <RowAnimImg src="/vow/3.jpg" />
            <RowAnimImg src="/vow/4.jpg" className="hidden xl:block" />
            <RowAnimImg src="/vow/5.jpg" className="md:hidden xl:block"/>
            <RowAnimImg src="/vow/6.jpg" className="md:hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                VOW
              </TextRoll>
            </span>
            <RowAnimImg src="/vow/1.jpg" />
            <RowAnimImg src="/vow/2.jpg" />
            <RowAnimImg src="/vow/3.jpg" />
            <RowAnimImg src="/vow/4.jpg" />
            <RowAnimImg src="/vow/5.jpg" />
            <RowAnimImg src="/vow/6.jpg" />
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
            <RowAnimImg src="/gesture/1.jpg" />
            <RowAnimImg src="/gesture/2.jpg" />
            <RowAnimImg src="/gesture/3.jpg" />
            <RowAnimImg src="/gesture/4.jpg" />
            <RowAnimImg src="/gesture/1.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/gesture/2.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/gesture/3.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                GESTURE
              </TextRoll>
            </span>
            <RowAnimImg src="/gesture/4.jpg" />
            <RowAnimImg src="/gesture/1.jpg" />
            <RowAnimImg src="/gesture/2.jpg" />
            <RowAnimImg src="/gesture/3.jpg" />
            <RowAnimImg src="/gesture/4.jpg" />
            <RowAnimImg src="/gesture/1.jpg" />
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
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/voice/1.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/voice/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-6xl lg:text-7xl font-bold uppercase">
              <TextRoll>
                VOICE
              </TextRoll>
            </span>
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
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
