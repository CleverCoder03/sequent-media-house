"use client";

import { forwardRef } from "react";
import RowAnimImg from "./RowAnimImg";
import { ManualTextRoll } from "./ManualTextRoll";
import Link from "next/link";
import RowAnimVid from "./RowAnimVid";

const RowAnimation = forwardRef(({ rowsRef, rowsContentRef }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 z-40 flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center w-[200%] h-dvh [&>div>div]:lg:gap-5 [&>div>div]:align-middle [&>div>div]:py-1.5 [&>div>div_span]:font-figtree-semibold [&>div>div_span]:tracking-tighter [&>div>div_span]:text-8xl [&>div>div_span]:lg:text-[115px] [&>div>div_span]:px-1.5 [&>div>div_span]:align-middle [&>div]:bg-neutral-200">
        {" "}
        {/* Extra width for the speed variation */}
        {/* Row 0: Empty Space */}
        <div ref={(el) => (rowsRef.current[0] = el)} className="pointer-events-none flex-1">
        </div>
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
            <RowAnimImg src="/form/form-serv-1.gif" />
            {/* <RowAnimVid src="/form/form-1.mp4" /> */}
            <RowAnimImg src="/form/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/form/1.jpg" className="hidden xl:block"/>
            <Link href={"/services/#form"}>

              <ManualTextRoll>
                FORM
              </ManualTextRoll>
            </Link>
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
            <RowAnimImg src="/frame/4.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/frame/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/frame/frame-serv-1.gif" className="hidden xl:block"/>
            {/* <RowAnimVid src="/frame/frame-1.mp4" /> */}
            <Link href={"/services/#frame"}>
              <ManualTextRoll>
                FRAME
              </ManualTextRoll>
            </Link>
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
            <RowAnimImg src="/stage/4.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/stage/stage-serv-1.gif" className="hidden lg:block"/>
            {/* <RowAnimVid src="/stage/stage-1.mp4" /> */}
            <RowAnimImg src="/stage/1.jpg" className="hidden xl:block"/>
            <Link href={"/services/#stage"}>
              <ManualTextRoll>
                STAGE
              </ManualTextRoll>
            </Link>
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
            <RowAnimImg src="/vow/4.jpg" />
            <RowAnimImg src="/vow/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/vow/6.jpg" className="md:hidden xl:block"/>
            <Link href={"/services/#vow"}>
              <ManualTextRoll>
                VOW
              </ManualTextRoll>
            </Link>
            <RowAnimImg src="/vow/vow-serv-1.gif" />
            {/* <RowAnimVid src="/vow/vow-1.mp4" /> */}
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
            <RowAnimImg src="/gesture/1.jpg" />
            <RowAnimImg src="/gesture/2.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/gesture/gesture-serv-1.gif" className="hidden xl:block"/>
            {/* <RowAnimVid src="/gesture/gesture-1.mp4" /> */}
            <RowAnimImg src="/gesture/4.jpg" className="hidden xl:block"/>
            <Link href={"/services/#gesture"}>
              <ManualTextRoll>
                GESTURE
              </ManualTextRoll>
            </Link>
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
            <RowAnimImg src="/voice/serv-1.jpg" />
            <RowAnimImg src="/voice/serv-2.jpg" />
            <RowAnimImg src="/voice/1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/voice/serv-1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/voice/serv-2.jpg" className="hidden xl:block"/>
            <Link href={"/services/#voice"}>
              <ManualTextRoll>
                VOICE
              </ManualTextRoll>
            </Link>
            <RowAnimImg src="/voice/voice-serv-1.gif" />
            {/* <RowAnimVid src="/voice/voice-1.mp4" /> */}
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/serv-1.jpg" />
            <RowAnimImg src="/voice/serv-2.jpg" />
            <RowAnimImg src="/voice/serv-1.jpg" />
          </div>
        </div>
        {/* Row 7: Empty Space */}
        <div ref={(el) => (rowsRef.current[7] = el)} className="pointer-events-none flex-1"></div>
      </div>
    </div>
  );
});

RowAnimation.displayName = "RowAnimation";

export default RowAnimation;