import * as React from "react"

import { cn } from "@/lib/utils"

const Badge = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & {
    variant?: "default" | "success" | "warning" | "error" | "info"
  }
>(({ className, variant = "default", ...props }, ref) => {
  const variants = {
    default: "bg-surface-container-highest text-on-surface",
    success: "bg-tertiary/10 text-tertiary border border-tertiary/20",
    warning: "bg-primary/10 text-primary border border-primary/20",
    error: "bg-error/10 text-error border border-error/20",
    info: "bg-secondary/10 text-secondary border border-secondary/20",
  }

  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-tighter",
        variants[variant],
        className
      )}
      {...props}
    />
  )
})
Badge.displayName = "Badge"

export { Badge }
