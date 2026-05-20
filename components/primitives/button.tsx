import * as React from "react"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

type ButtonVariant = "solid" | "outline" | "ghost"
type ButtonSize = "sm" | "md" | "lg"

type ButtonProps = React.ComponentPropsWithoutRef<"button"> & {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

const variants: Record<ButtonVariant, string> = {
  solid:
    "bg-primary text-primary-foreground shadow-[0_12px_40px_rgba(76,63,194,0.18)] hover:bg-primary/90 active:bg-primary/85",
  outline:
    "border border-foreground/20 bg-background/20 text-foreground hover:border-primary/50 hover:bg-primary/5",
  ghost: "text-foreground hover:bg-foreground/5",
}

const sizes: Record<ButtonSize, string> = {
  sm: "h-9 px-4 text-xs",
  md: "h-11 px-6 text-sm",
  lg: "h-14 px-8 text-base",
}

export function Button({
  asChild = false,
  variant = "solid",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,border-color,color,box-shadow,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  )
}
