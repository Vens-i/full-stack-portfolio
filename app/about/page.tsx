import styles from "./page.module.css"

const paragraphs = [
  "I’m a developer who believes technology should feel effortless. Over the past several years I’ve partnered with healthcare teams to modernize internal tools, steadily improving how clinicians and staff move through their day.",
  "My approach starts with deep listening. I translate complex requirements into calm, reliable interfaces that help people stay focused on the work that matters. When I collaborate with small businesses, the goal is the same: reduce noise, make decisions clearer, and build trust with every release.",
  "Outside of shipping features, I care about relationships—capturing the nuance of a client’s voice, and ensuring every interaction feels considered. Reliable software is a byproduct of reliable communication.",
]

export default function AboutPage() {
  return (
    <section className={styles.about}>
      <div className={styles.copy}>
        <h1>About Kervens</h1>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <aside className={styles.portraitCard}>
        <div className={styles.portrait} aria-hidden="true" />
        <p className={styles.portraitCaption}>New York, NY · Grateful for community, good conversation, and quiet moments.</p>
      </aside>
    </section>
  )
}
