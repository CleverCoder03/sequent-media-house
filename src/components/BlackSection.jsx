"use client"

import { forwardRef } from "react"
import { HyperText } from "./ui/hyper-text"

const BlackSection = forwardRef((props, ref) => {
  return (
    <div
              ref={ref}
              className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20"
            >
              <div className="text-center">
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Complex
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Made
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-7xl font-bold tracking-tight uppercase"
                >
                  Compelling
                </HyperText>
              </div>
            </div>
  )
})

BlackSection.displayName = "BlackSection"

export default BlackSection