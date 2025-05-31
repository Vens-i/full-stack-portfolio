"use client"

import { useState, useEffect } from "react"
import { Home, Code2, Layers, Briefcase, Mail, Menu, X, Wrench } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMobile } from "@/hooks/use-mobile"

export function FloatingSidebar() {
  const [activeSection, setActiveSection] = useState("home")
  const [isOpen, setIsOpen] = useState(false)
  const isMobile = useMobile()

  const toggleMenu = () => setIsOpen(!isOpen)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]")
      const scrollPosition = window.scrollY + 100

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "services", label: "Services", icon: Wrench },
    { id: "projects", label: "Projects", icon: Code2 },
    { id: "skills", label: "Skills", icon: Layers },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "contact", label: "Contact", icon: Mail },
  ]

  const handleClick = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      })
    }
    if (isMobile) {
      setIsOpen(false)
    }
  }

  return (
    <>
      {/* Mobile menu toggle */}
      <button
        onClick={toggleMenu}
        className="fixed left-4 top-4 z-50 rounded-full bg-primary p-2 text-primary-foreground shadow-lg md:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={cn(
          "fixed left-4 top-1/2 z-40 -translate-y-1/2 transform rounded-full bg-background/80 p-2 shadow-lg backdrop-blur-sm transition-all duration-300 md:left-8",
          isMobile && !isOpen ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100",
        )}
      >
        <nav className="flex flex-col items-center gap-6 py-4">
          {menuItems.map((item) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => handleClick(item.id)}
                className={cn(
                  "group relative flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 hover:bg-muted",
                  activeSection === item.id && "bg-primary text-primary-foreground hover:bg-primary",
                )}
              >
                <Icon size={20} />
                <span className="absolute left-14 whitespace-nowrap rounded-md bg-background px-2 py-1 text-sm font-medium opacity-0 shadow-md transition-opacity group-hover:opacity-100">
                  {item.label}
                </span>
              </button>
            )
          })}
        </nav>
      </div>
    </>
  )
}
