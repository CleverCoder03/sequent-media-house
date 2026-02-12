"use client";

import { forwardRef } from "react";

const RowAnimation = forwardRef(
  ({ subServicesLayer, rowsRef, rowsContentRef }, ref) => {
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
          <div ref={(el) => (rowsRef.current[1] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[1] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                Branding
              </span>
              <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Websites
              </span>
            </div>
          </div>
          {/* Row 2: Social */}
          <div ref={(el) => (rowsRef.current[2] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[2] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <div className="w-56 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Social
              </span>
              <div className="w-96 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
            </div>
          </div>
          {/* Row 3: Campaigns */}
          <div ref={(el) => (rowsRef.current[3] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[3] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Campaigns
              </span>
              <div className="w-80 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                Global
              </span>
            </div>
          </div>
          {/* Row 4: Motion */}
          <div ref={(el) => (rowsRef.current[4] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[4] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Motion
              </span>
              <div className="w-64 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Design
              </span>
            </div>
          </div>
          {/* Row 5: Experiential */}
          <div ref={(el) => (rowsRef.current[5] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[5] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <div className="w-120 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Experiential
              </span>
            </div>
          </div>
          {/* Row 6: Interactive */}
          <div ref={(el) => (rowsRef.current[6] = el)}>
            <div
              ref={(el) => (rowsContentRef.current[6] = el)}
              className="flex items-center gap-10 whitespace-nowrap"
            >
              <span className="text-neutral-900 text-7xl font-bold uppercase italic">
                Interactive
              </span>
              <div className="w-72 h-32 bg-gray-300 rounded-xl overflow-hidden"></div>
              <span className="text-neutral-900 text-7xl font-bold uppercase">
                Future
              </span>
            </div>
          </div>
          {/* Row 7: Empty Space */}
          <div ref={(el) => (rowsRef.current[7] = el)}></div>
        </div>
      </div>
    );
  },
);

RowAnimation.displayName = "RowAnimation";

export default RowAnimation;
