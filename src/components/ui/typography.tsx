import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children?: ReactNode
  className?: string
  gradient?: boolean
  animate?: boolean
}

export const H1 = ({ children, className, gradient = true, animate = false, ...props }: TypographyProps) => {
  // Remove gradient and animate from props to avoid passing them to the DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h1
      className={cn(
        "font-['Lora',_serif] text-4xl md:text-5xl lg:text-8xl font-extralight leading-tight",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-red-500",
        animate && "relative",
        className,
      )}
      {...domProps}
    >
      {children}
      {animate && (
        <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-orange-500/30 rounded-full animate-spin" />
      )}
    </h1>
  )
}

export const H2 = ({ children, className, gradient = true, ...props }: TypographyProps) => {
  // Remove gradient from props to avoid passing it to the DOM element
  const { gradient: _, ...domProps } = props as any

  return (
    <h2
      className={cn(
        "font-['Lora',_serif] text-3xl md:text-4xl lg:text-7xl font-extralight leading-tight mb-12",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-purple-500",
        "relative",
        className,
      )}
      {...domProps}
    >
      {children}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
    </h2>
  )
}

export const H3 = ({ children, className, gradient = true, ...props }: TypographyProps) => {
  // Remove gradient from props to avoid passing it to the DOM element
  const { gradient: _, ...domProps } = props as any

  return (
    <h3
      className={cn(
        "font-['Lora',_serif] text-2xl md:text-3xl lg:text-5xl font-extralight leading-tight mb-12",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500",
        className,
      )}
      {...domProps}
    >
      {children}
    </h3>
  )
}

export const H4 = ({ children, className, ...props }: TypographyProps) => (
  <h4
    className={cn("font-['Lora',_serif] text-xl md:text-2xl font-normal leading-relaxed text-orange-500", className)}
    {...props}
  >
    {children}
  </h4>
)

export const H5 = ({ children, className, ...props }: TypographyProps) => (
  <h5 className={cn("font-['Lora',_serif] text-xl md:text-2xl font-normal leading-relaxed", className)} {...props}>
    {children}
  </h5>
)

export const H6 = ({ children, className, ...props }: TypographyProps) => (
  <h6 className={cn("font-['Lora',_serif] text-base md:text-lg font-semibold leading-snug", className)} {...props}>
    {children}
  </h6>
)

export const P = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={cn("font-['Noto_Serif',_serif] text-base md:text-xl font-medium leading-relaxed", className)}
    {...props}
  >
    {children}
  </p>
)

export const P16 = ({ children, className, ...props }: TypographyProps) => (
  <p
    className={cn("font-['Noto_Serif',_serif] text-sm md:text-base font-medium leading-relaxed", className)}
    {...props}
  >
    {children}
  </p>
)

export const S18 = ({ children, className, ...props }: TypographyProps) => (
  <span
    className={cn(
      "font-['Lora',_serif] text-sm md:text-lg italic font-normal leading-relaxed text-orange-500",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

export const S20 = ({ children, className, ...props }: TypographyProps) => (
  <span
    className={cn(
      "font-['Lora',_serif] text-sm md:text-xl italic font-normal leading-relaxed text-orange-500",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

// New artistic components based on our portfolio design
export const GradientText = ({ children, className, ...props }: TypographyProps) => (
  <span
    className={cn(
      "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

export const AnimatedText = ({ children, className, ...props }: TypographyProps) => (
  <span className={cn("relative inline-block", className)} {...props}>
    {children}
    <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
  </span>
)

export const HeroTitle = ({ children, className, ...props }: TypographyProps) => {
  // Remove any custom props to avoid passing them to the DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <div className="space-y-6">
      <div className="relative">
        <h1
          className={cn(
            "font-['Lora',_serif] text-6xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-red-500 leading-tight",
            className,
          )}
          {...domProps}
        >
          {children}
        </h1>
        <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-orange-500/30 rounded-full animate-spin" />
      </div>
    </div>
  )
}

export const SectionTitle = ({ children, className, ...props }: TypographyProps) => {
  // Remove any custom props to avoid passing them to the DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h2
      className={cn(
        "font-['Lora',_serif] text-5xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-4 relative",
        className,
      )}
      {...domProps}
    >
      {children}
      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
    </h2>
  )
}
