import { forwardRef } from "react"
import { HyperText } from "./ui/hyper-text"

const BlackSection = forwardRef((props, ref) => {
  return (
    <div
              ref={ref}
              className="absolute inset-0 bg-black flex flex-col items-center justify-center z-20"
            >
              <div className="text-center font-montserrat-semibold flex flex-col gap-3">
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-7xl tracking-tight uppercase"
                >
                  Purpose
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-5xl md:text-7xl tracking-tight -mt-2 font-playfair-semibold-italic text-lime-theme"
                >
                  Meets
                </HyperText>
                <HyperText
                  startOnView={true}
                  duration={1500}
                  animateOnHover={false}
                  className="text-neutral-100 text-5xl md:text-7xl tracking-tight uppercase"
                >
                  Precision
                </HyperText>
              </div>
            </div>
  )
})

BlackSection.displayName = "BlackSection"

export default BlackSection