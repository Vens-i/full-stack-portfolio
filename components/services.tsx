"use client"

import { motion } from "framer-motion"
import { Settings2, Paintbrush, Bug } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: Settings2,
    title: "API Integration & Automation",
    description:
      "I connect third-party services, REST APIs, and internal systems to streamline workflows and improve performance.",
  },
  {
    icon: Paintbrush,
    title: "Custom Frontend Builds",
    description:
      "From Bootstrap to React, I build clean UIs that are responsive, accessible, and fast.",
  },
  {
    icon: Bug,
    title: "Bug Fixes & Optimization",
    description:
      "Whether it's speed issues or broken layouts, I'll jump in, clean up code, and get your site running like new.",
  },
]

export function Services() {
  return (
    <section id="services" className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Services</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Specialized solutions to help your business grow
        </p>
      </div>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="h-full">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle className="mt-4">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
