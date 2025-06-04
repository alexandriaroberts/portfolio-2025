"use client"

import {
  ArrowRight,
  Download,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Code,
  Zap,
  Globe,
  Sun,
  Moon,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from "react"
import { H1, H2, H3, H4, P, P16, GradientText, SectionTitle } from "@/components/ui/typography"

export default function Portfolio() {
  // Initialize with null values to prevent hydration mismatch
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [scrollY, setScrollY] = useState(0)
  const [isDark, setIsDark] = useState(true)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    // Mark component as mounted to prevent hydration mismatch
    setIsMounted(true)

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "Web3.js",
    "Ethers.js",
    "Solidity",
    "Bitcoin APIs",
    "Blockchain Integration",
    "DeFi Protocols",
    "Smart Contracts",
    "Wallet Integration",
    "Node.js",
    "GraphQL",
  ]

  const projects = [
    {
      title: "DeFi Trading Dashboard",
      description:
        "Real-time cryptocurrency trading interface with advanced charting and portfolio management for Bitcoin and Ethereum.",
      tech: ["React", "TypeScript", "Web3.js", "TradingView"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-orange-500 to-red-500",
    },
    {
      title: "Bitcoin Wallet Interface",
      description: "Secure Bitcoin wallet application with multi-signature support and hardware wallet integration.",
      tech: ["Next.js", "Bitcoin Core", "Lightning Network", "Tailwind"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-yellow-500 to-orange-500",
    },
    {
      title: "NFT Marketplace",
      description:
        "Full-featured NFT marketplace with minting, trading, and auction capabilities on Ethereum blockchain.",
      tech: ["React", "Solidity", "IPFS", "Ethers.js"],
      github: "#",
      live: "#",
      image: "/placeholder.svg?height=200&width=300",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Blockchain Startup",
      period: "2022 - Present",
      description:
        "Lead frontend development for DeFi applications, implementing complex trading interfaces and wallet integrations.",
      icon: <Code className="h-6 w-6" />,
    },
    {
      title: "Frontend Developer",
      company: "Crypto Exchange",
      period: "2021 - 2022",
      description: "Developed user interfaces for cryptocurrency trading platform serving 100k+ active users.",
      icon: <Zap className="h-6 w-6" />,
    },
    {
      title: "Freelance Developer",
      company: "Various Clients",
      period: "2020 - 2021",
      description: "Built custom blockchain applications and smart contract interfaces for multiple clients.",
      icon: <Globe className="h-6 w-6" />,
    },
  ]

  const themeClasses = isDark
    ? {
        bg: "bg-slate-900",
        cardBg: "from-slate-800 to-slate-900",
        text: "text-white",
        textSecondary: "text-slate-300",
        textMuted: "text-slate-400",
        border: "border-slate-700",
        navBg: "bg-slate-900/80",
        sectionBg: "from-slate-800/50 to-slate-900/50",
      }
    : {
        bg: "bg-gradient-to-br from-orange-50 via-white to-red-50",
        cardBg: "from-white to-orange-50",
        text: "text-slate-900",
        textSecondary: "text-slate-700",
        textMuted: "text-slate-600",
        border: "border-orange-200",
        navBg: "bg-white/80",
        sectionBg: "from-orange-50/80 to-red-50/80",
      }

  return (
    <div className={`min-h-screen ${themeClasses.bg} relative overflow-hidden transition-all duration-500`}>
      {/* Artistic Background Elements - Only render when mounted to prevent hydration mismatch */}
      {isMounted && (
        <div className="fixed inset-0 pointer-events-none">
          {/* Animated gradient orbs */}
          <div
            className={`absolute w-96 h-96 ${
              isDark
                ? "bg-gradient-to-r from-orange-500/20 to-red-500/20"
                : "bg-gradient-to-r from-orange-300/30 to-red-300/30"
            } rounded-full blur-3xl`}
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              top: "10%",
              left: "10%",
            }}
          />
          <div
            className={`absolute w-80 h-80 ${
              isDark
                ? "bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                : "bg-gradient-to-r from-purple-300/30 to-pink-300/30"
            } rounded-full blur-3xl`}
            style={{
              transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
              top: "60%",
              right: "10%",
            }}
          />
          <div
            className={`absolute w-64 h-64 ${
              isDark
                ? "bg-gradient-to-r from-yellow-500/20 to-orange-500/20"
                : "bg-gradient-to-r from-yellow-300/30 to-orange-300/30"
            } rounded-full blur-3xl`}
            style={{
              transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
              bottom: "20%",
              left: "20%",
            }}
          />

          {/* Geometric patterns */}
          <div className="absolute inset-0">
          
    
            <svg className={`w-full h-full ${isDark ? "opacity-5" : "opacity-3"}`} viewBox="0 0 100 100">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" className="text-orange-500" />
            </svg>
          </div>

          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${
                isDark ? "bg-orange-500/30" : "bg-orange-400/40"
              } rounded-full animate-pulse`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full ${themeClasses.navBg} backdrop-blur-md ${
          isDark ? "border-b border-slate-700/50" : "border-b border-orange-200/50"
        } z-50`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
              AR
            </div>
            <div className="hidden md:flex space-x-8 items-center">
              {["About", "Projects", "Experience", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`${themeClasses.textSecondary} hover:text-orange-500 transition-all duration-300 relative group`}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-500 group-hover:w-full transition-all duration-300" />
                </Link>
              ))}
              <Button
                onClick={() => setIsDark(!isDark)}
                variant="outline"
                size="sm"
                className={`${themeClasses.border} hover:bg-orange-500 hover:text-white transition-all duration-300`}
              >
                {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative">
              {/* Artistic text treatment */}
              <div className="space-y-6">
                <div className="relative">
                  <H1
                    className={
                      isDark
                        ? "bg-gradient-to-r from-white via-orange-500 to-red-500"
                        : "bg-gradient-to-r from-slate-900 via-orange-600 to-red-600"
                    }
                    animate
                  >
                    Frontend
                  </H1>
                  <h1
                      className={`font-['Lora',_serif] text-5xl md:text-7xl lg:text-9xl font-light leading-[0.9] tracking-tight ${themeClasses.text} relative`}
                    >
                      Developer
                      <span className="absolute -right-12 top-0 text-orange-500 animate-bounce text-4xl">✦</span>
                    </h1>
                </div>

             

                <div className="relative">
                  <H3 className={themeClasses.textSecondary} gradient={false}>
                    <GradientText>Bitcoin</GradientText> & Blockchain Expert
                  </H3>
                  <div className="absolute -bottom-2 left-0 w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent rounded-full" />
                </div>

                <P className={`${themeClasses.textMuted} max-w-2xl`}>
                  Crafting exceptional user experiences for the decentralized web.{" "}
                  <GradientText className="font-semibold">4+ years</GradientText> specializing in Bitcoin, DeFi, and
                  blockchain applications.
                </P>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 h-5 w-5" />
                  Download Resume
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
                >
                  View Projects
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="flex space-x-6">
                {[Github, Linkedin, Mail].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className={`${themeClasses.textMuted} hover:text-orange-500 transition-all duration-300 transform hover:scale-110 hover:rotate-12`}
                  >
                    <Icon className="h-6 w-6" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                {/* Artistic profile image with multiple layers */}
                <div className="relative w-100 h-100">
                  {/* Outer rotating ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-4 border-dashed ${
                      isDark ? "border-orange-500/30" : "border-orange-400/40"
                    } animate-spin`}
                    style={{ animationDuration: "20s" }}
                  />

                  {/* Middle ring */}
                  <div
                    className={`absolute inset-4 rounded-full border-2 border-gradient-to-r from-purple-500 to-pink-500 animate-pulse`}
                  />

                  {/* Inner gradient background */}
                  <div className="absolute inset-8 rounded-full bg-gradient-to-br from-orange-500 via-red-500 to-purple-500 p-1">
                    <Image
                      src="/profile.png?height=400&width=400"
                      alt="Alexandria Roberts"
                      width={400}
                      height={400}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>

                  {/* Floating elements around profile */}
                  <div className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full p-3 animate-bounce shadow-lg">
                    <div className="text-white font-bold text-xl">₿</div>
                  </div>

                  <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-3 animate-pulse shadow-lg">
                    <div className="text-white font-bold text-xl">Ξ</div>
                  </div>

                  <div className="absolute top-1/2 -left-8 bg-gradient-to-r from-green-400 to-blue-500 rounded-full p-2 animate-ping">
                    <div className="w-4 h-4 bg-white rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${themeClasses.sectionBg} backdrop-blur-sm`} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <SectionTitle>About Me</SectionTitle>
            <P className={`${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              Passionate frontend developer with deep expertise in blockchain technologies, specializing in Bitcoin and
              DeFi applications that push the boundaries.
            </P>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 relative">
              <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-orange-500 to-transparent rounded-full" />

              <H3 className={themeClasses.text} gradient={false}>
                <GradientText>4+ Years</GradientText>
                <br />
                of Blockchain Excellence
              </H3>

              <div className={`space-y-4 ${themeClasses.textSecondary}`}>
                <P className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full" />
                  I've dedicated my career to mastering the intersection of frontend development and blockchain
                  technology. From building secure Bitcoin wallet interfaces to creating sophisticated DeFi trading
                  platforms, I bring both technical expertise and user-centric design thinking to every project.
                </P>
                <P className="relative pl-6">
                  <span className="absolute left-0 top-2 w-2 h-2 bg-red-500 rounded-full" />
                  My experience spans the entire blockchain ecosystem - from Bitcoin's Lightning Network to Ethereum's
                  smart contracts, always with a focus on creating intuitive, secure, and performant user interfaces.
                </P>
              </div>

              <div
                className={`flex items-center space-x-2 ${themeClasses.textMuted} ${
                  isDark ? "bg-slate-800/50" : "bg-white/50"
                } rounded-lg p-4 backdrop-blur-sm`}
              >
                <MapPin className="h-5 w-5 text-orange-500" />
                <P16 className="m-0">Available for Freelance Work Worldwide</P16>
              </div>
            </div>

            <div className="space-y-6">
              <H3 gradient={true}>Technical Expertise</H3>
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className={`${
                      isDark
                        ? "bg-gradient-to-r from-slate-800 to-slate-700 text-slate-200 hover:from-orange-500 hover:to-red-500 hover:text-white border border-slate-600"
                        : "bg-gradient-to-r from-white to-orange-50 text-slate-700 hover:from-orange-500 hover:to-red-500 hover:text-white border border-orange-200"
                    } transition-all duration-300 transform hover:scale-105 hover:border-transparent justify-center py-2`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <SectionTitle>Featured Projects</SectionTitle>
            <P className={`${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              Showcasing cutting-edge blockchain applications that demonstrate my expertise in frontend development and
              web3 integration.
            </P>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br ${themeClasses.cardBg} ${themeClasses.border} hover:border-transparent transition-all duration-500 transform hover:scale-105 hover:rotate-1 group relative overflow-hidden ${
                  isDark ? "" : "shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Artistic overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                />

                <CardHeader className="p-0 relative">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${
                        isDark ? "from-slate-900" : "from-white"
                      } via-transparent to-transparent opacity-60`}
                    />
                    <div
                      className={`absolute top-4 right-4 w-3 h-3 bg-gradient-to-r ${project.color} rounded-full animate-pulse`}
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6 relative">
                  <CardTitle
                    className={`${themeClasses.text} mb-2 group-hover:text-orange-500 transition-colors duration-300`}
                  >
                    {project.title}
                  </CardTitle>
                  <CardDescription className={`${themeClasses.textMuted} mb-4`}>{project.description}</CardDescription>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="border-orange-500/50 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <Link
                      href={project.github}
                      className={`${themeClasses.textMuted} hover:text-orange-500 transition-all duration-300 transform hover:scale-110`}
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href={project.live}
                      className={`${themeClasses.textMuted} hover:text-orange-500 transition-all duration-300 transform hover:scale-110`}
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className={`absolute inset-0 bg-gradient-to-r ${themeClasses.sectionBg} backdrop-blur-sm`} />
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-16">
            <SectionTitle>Experience</SectionTitle>
            <P className={`${themeClasses.textSecondary} max-w-3xl mx-auto`}>
              A proven track record of delivering high-impact blockchain solutions across various industries and company
              stages.
            </P>
          </div>

          <div className="space-y-8 relative">
            {/* Artistic timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 via-red-500 to-purple-500 rounded-full" />

            {experience.map((exp, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-r ${themeClasses.cardBg} ${themeClasses.border} hover:border-orange-500 transition-all duration-500 transform hover:scale-105 ml-16 relative ${
                  isDark ? "" : "shadow-lg hover:shadow-xl"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute -left-20 top-8 w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 ${
                    isDark ? "border-slate-900" : "border-white"
                  }`}
                />

                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 p-3 rounded-lg text-white">
                      {exp.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <H4 className={`${themeClasses.text} text-xl font-semibold`}>{exp.title}</H4>
                          <H4 className="font-medium">{exp.company}</H4>
                        </div>
                        <Badge variant="outline" className="border-orange-500 text-orange-500 bg-orange-500/10 w-fit">
                          {exp.period}
                        </Badge>
                      </div>
                      <P className={themeClasses.textSecondary}>{exp.description}</P>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <H1 className="mb-8">Let's Build the Future</H1>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full" />

          <P className={`${themeClasses.textSecondary} mb-12 max-w-2xl mx-auto`}>
            Ready to create exceptional blockchain experiences? Let's discuss how my expertise can drive your project
            forward.
          </P>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl shadow-orange-500/25 transform hover:scale-105 transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-orange-500 text-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:border-transparent transform hover:scale-105 transition-all duration-300"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className={`py-8 px-4 sm:px-6 lg:px-8 ${
          isDark ? "border-t border-slate-700/50" : "border-t border-orange-200/50"
        } relative`}
      >
        <div className="max-w-7xl mx-auto text-center">
          <P16 className={themeClasses.textMuted}>
            © {new Date().getFullYear()} Alexandria Roberts.{" "}
            <GradientText className="font-semibold">Crafted with passion for blockchain innovation.</GradientText>
          </P16>
        </div>
      </footer>
    </div>
  )
}
