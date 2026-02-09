"use client"

import { forwardRef } from "react"
import Logo from "./LogoSvg"

const ExpandingSection = forwardRef(({blueLayer, logoRef, descRef}, ref) => {
  return (
    <div ref={ref} className="absolute inset-0 flex flex-col items-center overflow-hidden justify-center z-10">
                  {/* Background that animates */}
                  <div
                    ref={blueLayer}
                    className="absolute inset-0 bg-[#4106b9] -z-10"
                    style={{ transformOrigin: "center center" }}
                  />
    
                  {/* Content that doesn't get squeezed */}
                  <div ref={logoRef} className="text-center px-6 mt-20">
                    <Logo className="h-[16vw] w-auto text-white" />
                  </div>
                  <p
                    ref={descRef}
                    className="text-white/80 text-sm lg:text-xl md:text-base max-w-2xl mx-auto text-center leading-relaxed"
                  >
                    We are not just a company, We’re a collective of curious minds
                    fluent in culture, design, and human emotion. We design for
                    those who dare — brands, people, and stories that transcend
                    borders. Born in India, rooted in the UAE, connected across
                    continents — we merge art and intellect to craft creativity that
                    moves.
                  </p>
                </div>
  )
})

ExpandingSection.displayName = "ExpandingSection"

export default ExpandingSection