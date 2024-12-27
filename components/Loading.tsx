import React from "react"
import cn from "classnames"
import {Triangle} from "react-loader-spinner"

interface Props {
  size?: "s" | "m" | "l" | "xl"
  over?: boolean
}

export default function Loading({
  size = "m",
  over
}: Props) {
  return (
    <div className={cn("z-10 flex items-center justify-center pointer-events-none select-none", {
      "absolute top-0 left-0 w-full h-full": over
    })}>
      <div className={cn("relative", {
        "w-5 h-5": size === "s",
        "w-6 h-6": size === "m",
        "w-8 h-8": size === "l",
        "w-10 h-10": size === "xl"
      })}>
        <Triangle width="100%" height="100%" color="black" ariaLabel="triangle-loading"/>
      </div>
    </div>
  )
}
