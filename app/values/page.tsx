'use client'

import { motion } from "framer-motion"

import styles from "./page.module.css"

const statements = [
  "Clarity builds trust.",
  "People first, tools second.",
  "Consistency matters.",
  "Listening is part of the craft.",
]

export default function ValuesPage() {
  return (
    <section className={styles.values}>
      <h1>Values</h1>
      <p className={styles.subtitle}>
        A small manifesto that guides how I collaborate, write code, and show up for the people I work with.
      </p>

      <div className={styles.list}>
        {statements.map((statement, index) => (
          <motion.div
            key={statement}
            className={styles.card}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {statement}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
