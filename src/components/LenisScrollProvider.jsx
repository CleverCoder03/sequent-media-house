"use client"
import {ReactLenis} from "lenis/react"

const LenisScrollProvider = ({children}) => {
  return (
    <ReactLenis root>
        {children}
    </ReactLenis>
  )
}

export default LenisScrollProvider