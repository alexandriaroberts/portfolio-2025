import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface TypographyProps {
  children?: ReactNode
  className?: string
  gradient?: boolean
  animate?: boolean
}

export const H1 = ({ children, className, gradient = true, animate = false, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h1
      className={cn(
        "font-['Lora',_serif] text-5xl md:text-7xl lg:text-9xl font-light leading-[0.9] tracking-tight",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-white via-orange-500 to-red-500",
        animate && "relative",
        className,
      )}
      {...domProps}
    >
      {children}
      {animate && (
        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-dashed border-orange-500/20 rounded-full animate-spin" />
      )}
    </h1>
  )
}

export const H2 = ({ children, className, gradient = true, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h2
      className={cn(
        "font-['Lora',_serif] text-4xl md:text-6xl lg:text-8xl font-light leading-[0.9] tracking-tight mb-16",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 via-red-500 to-purple-500",
        "relative",
        className,
      )}
      {...domProps}
    >
      {children}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
    </h2>
  )
}

export const H3 = ({ children, className, gradient = true, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h3
      className={cn(
        "font-['Lora',_serif] text-3xl md:text-4xl lg:text-6xl font-light leading-tight tracking-tight mb-8",
        gradient && "bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500",
        className,
      )}
      {...domProps}
    >
      {children}
    </h3>
  )
}

export const H4 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h4
      className={cn(
        "font-['Lora',_serif] text-xl md:text-3xl font-normal leading-relaxed text-orange-500 mb-4",
        className,
      )}
      {...domProps}
    >
      {children}
    </h4>
  )
}

export const H5 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h5
      className={cn("font-['Lora',_serif] text-xl md:text-2xl font-normal leading-relaxed mb-4", className)}
      {...domProps}
    >
      {children}
    </h5>
  )
}

export const H6 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h6
      className={cn("font-['Lora',_serif] text-lg md:text-xl font-medium leading-relaxed mb-3", className)}
      {...domProps}
    >
      {children}
    </h6>
  )
}

export const P = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <p
      className={cn("font-['Noto_Serif',_serif] text-lg md:text-xl font-normal leading-relaxed mb-6", className)}
      {...domProps}
    >
      {children}
    </p>
  )
}

export const P16 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <p
      className={cn("font-['Noto_Serif',_serif] text-base md:text-lg font-normal leading-relaxed mb-4", className)}
      {...domProps}
    >
      {children}
    </p>
  )
}

export const S18 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <span
      className={cn(
        "font-['Lora',_serif] text-base md:text-lg italic font-normal leading-relaxed text-orange-500",
        className,
      )}
      {...domProps}
    >
      {children}
    </span>
  )
}

export const S20 = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <span
      className={cn(
        "font-['Lora',_serif] text-lg md:text-xl italic font-normal leading-relaxed text-orange-500",
        className,
      )}
      {...domProps}
    >
      {children}
    </span>
  )
}

// New artistic components based on our portfolio design
export const GradientText = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <span
      className={cn(
        "bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-medium",
        className,
      )}
      {...domProps}
    >
      {children}
    </span>
  )
}

export const AnimatedText = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <span className={cn("relative inline-block", className)} {...domProps}>
      {children}
      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
    </span>
  )
}

export const HeroTitle = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <div className="space-y-8">
      <div className="relative">
        <h1
          className={cn(
            "font-['Lora',_serif] text-6xl lg:text-9xl font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-orange-500 to-red-500 leading-[0.9] tracking-tight",
            className,
          )}
          {...domProps}
        >
          {children}
        </h1>
        <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-dashed border-orange-500/20 rounded-full animate-spin" />
      </div>
    </div>
  )
}

export const SectionTitle = ({ children, className, gradient, animate, ...props }: TypographyProps) => {
  // Remove custom props before passing to DOM element
  const { gradient: _, animate: __, ...domProps } = props as any

  return (
    <h2
      className={cn(
        "font-['Lora',_serif] text-4xl md:text-6xl font-light bg-gradient-to-r from-orange-500 via-red-500 to-purple-500 bg-clip-text text-transparent mb-8 relative leading-tight tracking-tight",
        className,
      )}
      {...domProps}
    >
      {children}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />
    </h2>
  )
}
