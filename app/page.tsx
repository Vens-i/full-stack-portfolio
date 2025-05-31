import { ThemeToggle } from "@/components/theme-toggle"
import { FloatingSidebar } from "@/components/floating-sidebar"
import { Hero } from "@/components/hero"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Experience } from "@/components/experience"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Services } from "@/components/services"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <FloatingSidebar />
      <main className="container relative mx-auto px-4 py-8 md:px-8 lg:px-16">
        <div className="absolute right-4 top-4 z-50 md:right-8 lg:right-16">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-1 gap-12 pb-16 pt-16 md:gap-16 lg:gap-24">
          <Hero />
          <Services />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}
