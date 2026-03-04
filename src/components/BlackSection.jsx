import { forwardRef } from "react"
import { HyperText } from "./ui/hyper-text"

const BlackSection = forwardRef((props, ref) => {
  return (
    <div
              ref={ref}
              className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20"
            >
              <div className="text-center font-figtree-semibold flex flex-col gap-3">
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-5xl md:text-7xl leading-[1.1]"
                >
                  Purpose
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-5xl md:text-7xl tracking-tight leading-[1.1] font-playfair-semibold-italic text-lime-theme"
                >
                  Meets
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-white text-5xl md:text-7xl leading-[1.1]"
                >
                  Precision
                </HyperText>
              </div>
            </div>
  )
})

BlackSection.displayName = "BlackSection"

export default BlackSection