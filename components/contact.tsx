"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const body = `Message from: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    window.location.href = `mailto:ksauguste@gmail.com?subject=Portfolio Contact: ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(body)}`
    setFormData({ name: "", email: "", message: "" })
  }

  return (
    <section id="contact" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Get In Touch</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a project in mind or want to discuss opportunities? Let&apos;s talk!
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
              <CardDescription>Feel free to reach out through any of these channels</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6">
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="h-5 w-5 text-primary" />
                <a 
                  href="mailto:ksauguste@gmail.com" 
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ksauguste@gmail.com
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Github className="h-5 w-5 text-primary" />
                <a 
                  href="https://github.com/yourusername" 
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Profile
                </a>
              </motion.div>
              <motion.div 
                className="flex items-center gap-3"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <a 
                  href="https://linkedin.com/in/yourusername" 
                  className="text-sm hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I&apos;ll get back to you soon</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid gap-2">
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="grid gap-2">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="min-h-[150px]"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
