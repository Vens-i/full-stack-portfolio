"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const experienceData = [
  {
    id: 1,
    role: "Full-Stack Web Developer",
    company: "Kaleida Health",
    period: "2023 - Present",
    description:
      "Designed and developed full-stack web applications for internal healthcare use. Focused on modernizing legacy systems and improving user experiences for staff and patients.",
    achievements: [
      "Migrated legacy ASP applications to modern .NET MVC web APIs",
      "Developed a volunteer tracking system with RESTful endpoints and admin dashboard",
      "Implemented frontend features using Bootstrap, jQuery, and AJAX for dynamic content handling",
      "Integrated third-party platforms including SocialChorus (FirstUp) and Yext API",
    ],
    technologies: ["C#", ".NET MVC", "JavaScript", "jQuery", "Bootstrap", "SQL Server", "API Integration"],
  },
  {
    id: 2,
    role: "Freelance Web Developer",
    company: "Independent Projects",
    period: "2022 - Present",
    description:
      "Built websites and custom web tools for clients across nonprofit, food service, and startup sectors. Delivered responsive designs and efficient backend solutions.",
    achievements: [
      "Developed a dynamic service registration form with SQL database integration and custom tracking",
      "Built a carousel-based article viewer with FancyBox and Splide for client news content",
      "Created educational pop-ups and onboarding tours using Bootstrap modals and localStorage",
      "Crafted a headless Shopify storefront using Hydrogen framework for a catering business",
      "Developed a spam-resistant form with honeypot and timing logic for a publishing company using Mailchimp",
      "Built a secure auto-email script to confirm subscriptions and notify clients of new submissions",
      "Implemented a dynamic content filtering system to support marketing campaigns based on user registration data",
    ],
    technologies: [
      "HTML", "CSS", "JavaScript", "Bootstrap", "React", "Next", "Shopify Hydrogen", "SQL",
      "Mailchimp", "PHP", "AJAX", "Form Security"
    ],
  },
  {
    id: 3,
    role: "Frontend Developer Intern",
    company: "SUNY Oswego Business School",
    period: "2022 - 2023",
    description:
      "Supported the business school’s web team by maintaining internal tools and improving student-facing interfaces.",
    achievements: [
      "Optimized existing layouts for accessibility and responsiveness",
      "Collaborated with faculty to streamline academic resource tools",
      "Conducted user testing and implemented feedback for UI/UX enhancements",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Accessibility Standards"],
  }
]

export function Experience() {
  return (
    <section id="experience" className="scroll-mt-20">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Work Experience</h2>
        <p className="mt-4 text-lg text-muted-foreground">My professional journey and career highlights</p>
      </div>

      <div className="space-y-8">
        {experienceData.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardHeader>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <CardTitle className="text-xl">{job.role}</CardTitle>
                    <CardDescription className="text-lg">{job.company}</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit text-sm">
                    {job.period}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p>{job.description}</p>
                <div>
                  <h4 className="mb-2 font-medium">Key Achievements:</h4>
                  <ul className="ml-6 list-disc space-y-1">
                    {job.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>
                <div className="flex flex-wrap gap-2 pt-2">
                  {job.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
