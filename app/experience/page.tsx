import styles from "./page.module.css"

export default function ExperiencePage() {
  return (
    <section className={styles.experience}>
      <h1>Experience</h1>
      <div className={styles.entries}>
        <article className={styles.entry}>
          <header>
            <h2>Kaleida Health</h2>
            <p className={styles.role}>Product-minded Full Stack Developer</p>
          </header>
          <p>
            Led the modernization of internal healthcare applications, translating legacy workflows into intuitive
            interfaces that reduce friction for clinicians and staff. Drove cross-team alignment by documenting user
            journeys, prototyping ideas quickly, and delivering dependable releases.
          </p>
        </article>

        <article className={styles.entry}>
          <header>
            <h2>Independent Work</h2>
            <p className={styles.role}>Partner to small teams & growing businesses</p>
          </header>
          <p>
            Helped founders and community organizations clarify their ideas, build proof-of-concepts, and ship polished
            digital tools. I step in where teams need steadiness—bringing structure, thoughtful communication, and an eye
            for detail.
          </p>
        </article>
      </div>
    </section>
  )
}
