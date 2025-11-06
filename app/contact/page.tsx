import Link from "next/link"

import ContactForm from "@/components/ContactForm"

import styles from "./page.module.css"

export default function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.intro}>
        <h1>Let’s connect</h1>
        <p>
          Share a note about your team, project, or idea. I’ll reply within two business days to schedule time and see
          how we can work together.
        </p>
        <div className={styles.links}>
          {/* <Link href="mailto:ksauguste@gmail.com">ksauguste@gmail.com</Link> */}
          <Link href="https://linkedin.com/in/kervens-auguste" target="_blank" rel="noreferrer">
            linkedin.com/in/kervens-auguste
          </Link>
        </div>
      </div>

      <ContactForm />
    </section>
  )
}
