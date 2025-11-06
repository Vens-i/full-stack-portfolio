'use client'

import type { ReactNode } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"

import styles from "./SiteLayout.module.css"

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Values", href: "/values" },
  { label: "Contact", href: "/contact" },
]

type SiteLayoutProps = {
  children: ReactNode
}

export default function SiteLayout({ children }: SiteLayoutProps) {
  const pathname = usePathname()

  return (
    <div className={styles.appShell}>
      <header className={styles.header}>
        <div>
          <Link href="/" className={styles.logo}>
            Kervens Auguste
          </Link>
          <p className={styles.tagline}>Building dependable, human-centered digital experiences.</p>
        </div>
        <nav aria-label="Site navigation">
          <ul className={styles.navList}>
            {navItems.map((item) => {
              const isActive = pathname === item.href
              const className = isActive ? `${styles.navLink} ${styles.active}` : styles.navLink

              return (
                <li key={item.href}>
                  <Link href={item.href} className={className}>
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </header>

      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={pathname}
          className={styles.main}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -18 }}
          transition={{ duration: 0.36, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className={styles.footer}>
        <span>&copy; {new Date().getFullYear()} Kervens Auguste</span>
        <span>New York, NY &nbsp;•&nbsp; Available for meaningful collaborations</span>
      </footer>
    </div>
  )
}
