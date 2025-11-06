'use client'

import { useEffect, useState } from "react"
import type { ChangeEvent, FormEvent } from "react"

import styles from "./ContactForm.module.css"

type FormState = {
  name: string
  email: string
  message: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: "",
  email: "",
  message: "",
}

export default function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [formError, setFormError] = useState<string | null>(null)
  const [company, setCompany] = useState("")
  const [startedAt, setStartedAt] = useState(() => Date.now())

  useEffect(() => {
    setStartedAt(Date.now())
  }, [])

  const validate = (state: FormState) => {
    const validationErrors: FormErrors = {}

    if (!state.name.trim()) {
      validationErrors.name = "Please share your name so I know who to respond to."
    }

    if (!state.email.trim()) {
      validationErrors.email = "An email helps me reach back out."
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(state.email)) {
      validationErrors.email = "That email address doesn’t look quite right."
    }

    if (!state.message.trim()) {
      validationErrors.message = "Let me know a bit about what you’re working on."
    }

    return validationErrors
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setFormError(null)
    setStatus("loading")

    const validationErrors = validate(values)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setStatus("idle")
      return
    }

    setErrors({})

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...values,
          company,
          startedAt,
        }),
      })

      const payload = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null

      if (!response.ok || !payload?.ok) {
        const message = payload?.error ?? "Something went wrong. Please try again."
        setFormError(message)
        setStatus("error")
        return
      }

      setValues(initialState)
      setCompany("")
      setStartedAt(Date.now())
      setStatus("success")
    } catch {
      setFormError("Something went wrong. Please try again.")
      setStatus("error")
    }
  }

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status !== "idle") {
      setStatus("idle")
    }
  }

  const handleHoneypotChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCompany(event.target.value)
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.hiddenField} aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          value={company}
          onChange={handleHoneypotChange}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>
      <input type="hidden" name="startedAt" value={startedAt} />

      <div className={styles.group}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder="How should I address you?"
        />
        {errors.name ? (
          <span id="name-error" className={styles.error}>
            {errors.name}
          </span>
        ) : null}
      </div>

      <div className={styles.group}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder="name@company.com"
        />
        {errors.email ? (
          <span id="email-error" className={styles.error}>
            {errors.email}
          </span>
        ) : null}
      </div>

      <div className={styles.group}>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder="Tell me about your team, project, or idea."
        />
        {errors.message ? (
          <span id="message-error" className={styles.error}>
            {errors.message}
          </span>
        ) : null}
      </div>

      <button type="submit" className={styles.submitButton} disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <span className={styles.spinner} aria-hidden="true" />
            Sending…
          </>
        ) : (
          "Send Message"
        )}
      </button>

      {formError ? (
        <p className={styles.formError} role="status">
          {formError}
        </p>
      ) : null}

      {status === "success" ? (
        <p className={styles.success} role="status">
          Thank you for reaching out—I’ll get back to you soon.
        </p>
      ) : null}
    </form>
  )
}
