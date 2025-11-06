import styles from "./page.module.css"

export default function ExperiencePage() {
  return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.entries}>
        <article className={styles.entry}>
          <header>
            <h2>Kaleida Health</h2>
            <p className={styles.role}>Full Stack Web Developer | Product-Minded Problem Solver
</p>
          </header>
          <p>
            Architected and modernized a suite of internal healthcare applications that support daily operations across multiple hospitals and departments. Translated complex legacy systems into clean, accessible web experiences that reduce friction for clinicians and administrative teams. Collaborated with leadership to identify workflow pain points, prototype improvements, and deploy stable releases that have become core to the organization’s digital infrastructure.
          </p>
        </article>

        <article className={styles.entry}>
          <header>
            <h2>Freelance Work</h2>
            <p className={styles.role}>Partner to small teams & growing businesses</p>
          </header>
          <p>
            Collaborate with founders, nonprofits, and local businesses to shape ideas into functional, reliable digital tools. I bring structure and strategy to projects that start as sketches — guiding discovery, designing approachable user flows, and delivering scalable solutions built to last. My focus is always the same: build software that feels natural, performs consistently, and leaves teams feeling confident using it.

          </p>
        </article>
      </div>
    </section>
  )
}
