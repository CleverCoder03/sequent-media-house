"use client";

import { forwardRef } from "react";
import RowAnimImg from "./RowAnimImg";
import { ManualTextRoll } from "./ManualTextRoll";
import Link from "next/link";

const RowAnimation = forwardRef(({ rowsRef, rowsContentRef }, ref) => {
  return (
    <div
      ref={ref}
      className="absolute inset-0 z-40 flex flex-col justify-center"
    >
      <div className="flex flex-col justify-center w-[200%] h-dvh [&>div>div]:lg:gap-5 [&>div>div_span]:font-figtree-semibold [&>div>div_span]:tracking-tighter [&>div>div_span]:lg:text-[115px] [&>div>div_span]:mt-px [&>div]:bg-neutral-200">
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
            className="flex items-center whitespace-nowrap md:-ml-[60vw]"
          >
            <RowAnimImg src="/form/1.jpg" />
            <RowAnimImg src="/form/2.jpg" />
            <RowAnimImg src="/form/3.jpg" />
            <RowAnimImg src="/form/4.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/form/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/form/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-7xl uppercase leading-none">
              <ManualTextRoll>
                FORM
              </ManualTextRoll>
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
            <RowAnimImg src="/frame/4.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/frame/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/frame/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-7xl lg:text-8xl font-bold uppercase ">
              <ManualTextRoll>
                FRAME
              </ManualTextRoll>
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
            <RowAnimImg src="/stage/4.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/stage/5.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/stage/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-7xl lg:text-8xl uppercase">
              <ManualTextRoll>
                STAGE
              </ManualTextRoll>
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
            <RowAnimImg src="/vow/4.jpg" className="hidden lg:block" />
            <RowAnimImg src="/vow/5.jpg" className="md:hidden lg:block"/>
            <RowAnimImg src="/vow/6.jpg" className="md:hidden xl:block"/>
            <Link href={"/services/#weddings"}>
              <span className="text-neutral-900 text-6xl md:text-7xl uppercase">
              <ManualTextRoll>
                VOW
              </ManualTextRoll>
            </span>
            </Link>
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
            <RowAnimImg src="/gesture/1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/gesture/1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/gesture/2.jpg" className="hidden xl:block"/>
            <RowAnimImg src="/gesture/3.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
              <ManualTextRoll>
                GESTURE
              </ManualTextRoll>
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
            <RowAnimImg src="/voice/1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/voice/1.jpg" className="hidden lg:block"/>
            <RowAnimImg src="/voice/1.jpg" className="hidden xl:block"/>
            <span className="text-neutral-900 text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
              <ManualTextRoll>
                VOICE
              </ManualTextRoll>
            </span>
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
            <RowAnimImg src="/voice/1.jpg" />
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