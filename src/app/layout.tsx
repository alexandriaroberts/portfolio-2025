import type React from "react"
import "@/app/globals.css"
// import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Alexandria Roberts - Frontend Developer & Blockchain Expert",
  description: "Portfolio of Alexandria Roberts, Frontend Developer specializing in Bitcoin & Blockchain technologies",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,900;1,400&family=Noto+Serif:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {/* <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange> */}
          {children}
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
