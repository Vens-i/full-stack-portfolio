import Link from "next/link"

import styles from "./page.module.css"

export default function HomePage() {
  return (
    <section className={styles.hero}>
      <p className={styles.eyebrow}>Kervens Auguste — Full Stack Web Developer</p>
      <h1 className={styles.title}>I help teams bring calm, trustworthy software to life.</h1>
      <p className={styles.lead}>
        I work alongside healthcare teams and small businesses to shape digital tools that feel dependable, human, and
        easy to understand. My focus is on clarity, thoughtful collaboration, and steady iteration.
      </p>
      <div className={styles.actions}>
        <Link href="/contact" className={styles.primaryButton}>
          Let&apos;s Connect
        </Link>
        <Link href="/about" className={styles.secondaryLink}>
          Learn more about me
        </Link>
      </div>

      <div className={styles.detailsCard}>
        <h2 className={styles.detailsTitle}>What working together feels like</h2>
        <p>
          I listen closely, translate ideas into clear plans, and build interfaces that invite people in. Whether we are
          modernizing internal tools or exploring a new product, I keep the process steady, transparent, and grounded in
          real needs.
        </p>
      </div>
    </section>
  )
}
