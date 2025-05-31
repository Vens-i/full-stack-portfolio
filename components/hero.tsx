"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, ArrowRight } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section id="home" className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Hi, I&apos;m</span>
          <span className="mt-2 block bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Kervens Auguste
          </span>
        </h1>
        <p className="mt-6 text-xl text-muted-foreground md:text-2xl">
          Full Stack Developer specializing in modern web technologies
        </p>
        <p className="mt-6 text-lg text-muted-foreground">
          I&apos;m a full-stack web developer with a background in healthcare and a passion for building accessible,
          responsive, and user-friendly web experiences. From API integrations to custom CMS solutions,
          I focus on creating digital tools that make life easier for users and clients alike.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button size="lg" className="gap-2" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View My Work <ArrowRight size={16} />
          </Button>
          <Button size="lg" variant="outline" className="gap-2">
            Download CV <Download size={16} />
          </Button>
        </div>
      </motion.div>
    </section>
  )
}
