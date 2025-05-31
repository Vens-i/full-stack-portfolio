"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Code2,
  Server,
  Database,
  Cog,
  Brain,
  Cpu,
  Globe,
  Layout,
  FileCode,
  GitBranch,
  Container,
  Cloud,
} from "lucide-react"

const skillsData = {
  frontend: [
    {
      name: "Core Technologies",
      items: [
        { name: "HTML/CSS", level: 95, experience: "5+ years" },
        { name: "JavaScript", level: 95, experience: "5+ years" },
        { name: "jQuery", level: 90, experience: "5+ years" },
        { name: "Bootstrap", level: 95, experience: "5+ years" },
      ],
      icon: Layout,
    },
    {
      name: "Frameworks & Libraries",
      items: [
        { name: "React", level: 85, experience: "1+ years" },
        { name: "Next.js", level: 80, experience: "1+ years" },
        { name: "Tailwind CSS", level: 90, experience: "2+ years" },
      ],
      icon: FileCode,
    },
    {
      name: "UX/UI & Effects",
      items: [
        { name: "Framer Motion", level: 80, experience: "1+ years" },
        { name: "Fancybox/Splide", level: 85, experience: "2+ years" },
        { name: "Accessibility", level: 90, experience: "3+ years" },
      ],
      icon: Brain,
    },
  ],
  backend: [
    {
      name: "Core Technologies",
      items: [
        { name: ".NET MVC (C#)", level: 90, experience: "2+ years" },
        { name: "VBScript/Classic ASP", level: 85, experience: "2+ years" },
        { name: "Node.js", level: 75, experience: "1+ years" },
      ],
      icon: Server,
    },
    {
      name: "API Development",
      items: [
        { name: "RESTful APIs", level: 90, experience: "3+ years" },
        { name: "API Integration", level: 95, experience: "4+ years" },
        { name: "Form Handling & AJAX", level: 90, experience: "4+ years" },
      ],
      icon: Globe,
    },
    {
      name: "Authentication",
      items: [
        { name: "JWT", level: 85, experience: "2+ years" },
        { name: "API Key Auth", level: 85, experience: "2+ years" },
      ],
      icon: Cpu,
    },
  ],
  database: [
    {
      name: "SQL",
      items: [
        { name: "SQL Server", level: 90, experience: "3+ years" },
        { name: "T-SQL & Stored Procedures", level: 85, experience: "3+ years" },
        { name: "Form Data Persistence", level: 90, experience: "3+ years" },
      ],
      icon: Database,
    },
    {
      name: "NoSQL & Lightweight DBs",
      items: [
        { name: "Firebase", level: 75, experience: "1+ years" },
        { name: "LocalStorage", level: 85, experience: "3+ years" },
      ],
      icon: Database,
    },
  ],
  devops: [
    {
      name: "Version Control",
      items: [
        { name: "Git/GitHub", level: 90, experience: "4+ years" },
      ],
      icon: GitBranch,
    },
    {
      name: "Cloud & Hosting",
      items: [
        { name: "Vercel", level: 90, experience: "2+ years" },
        { name: "Overfuel CMS", level: 80, experience: "1+ years" },
      ],
      icon: Cloud,
    },
    {
      name: "Scripting & Utilities",
      items: [
        { name: "VBScript", level: 85, experience: "2+ years" },
        { name: "Batch/Powershell (basic)", level: 70, experience: "1+ years" },
      ],
      icon: Container,
    },
  ],
}

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Skills & Expertise</h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A detailed overview of my technical capabilities and experience
        </p>
      </div>

      <Tabs defaultValue="frontend" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
          <TabsTrigger value="frontend" className="flex items-center gap-2">
            <Code2 className="h-4 w-4" /> Frontend
          </TabsTrigger>
          <TabsTrigger value="backend" className="flex items-center gap-2">
            <Server className="h-4 w-4" /> Backend
          </TabsTrigger>
          <TabsTrigger value="database" className="flex items-center gap-2">
            <Database className="h-4 w-4" /> Database
          </TabsTrigger>
          <TabsTrigger value="devops" className="flex items-center gap-2">
            <Cog className="h-4 w-4" /> DevOps
          </TabsTrigger>
        </TabsList>

        {Object.entries(skillsData).map(([category, sections]) => (
          <TabsContent key={category} value={category}>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {sections.map((section, sectionIndex) => (
                <motion.div
                  key={section.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="mb-6 flex items-center gap-3">
                        <section.icon className="h-5 w-5 text-primary" />
                        <h3 className="font-semibold">{section.name}</h3>
                      </div>
                      <div className="space-y-6">
                        {section.items.map((item, index) => (
                          <motion.div
                            key={item.name}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: sectionIndex * 0.1 + index * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-sm font-medium">{item.name}</span>
                              <span className="text-xs text-muted-foreground">{item.experience}</span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-muted">
                              <motion.div
                                className="h-full bg-primary"
                                initial={{ width: 0 }}
                                whileInView={{ width: `${item.level}%` }}
                                transition={{ duration: 1, delay: sectionIndex * 0.1 + index * 0.1 }}
                                viewport={{ once: true }}
                              />
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  )
}
