"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { useLocale } from "@/i18n/LanguageContext";

type Status = "idle" | "sending" | "success" | "error";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

const isConfigured = Boolean(SERVICE_ID && TEMPLATE_ID && PUBLIC_KEY);

export function ContactForm() {
  const { content } = useLocale();
  const t = content.contact;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isConfigured) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      const emailjs = (await import("@emailjs/browser")).default;
      await emailjs.send(
        SERVICE_ID!,
        TEMPLATE_ID!,
        {
          title: `New portfolio message from ${name}`,
          name,
          email,
          message,
          time: new Date().toLocaleString(),
        },
        { publicKey: PUBLIC_KEY! }
      );
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-8 text-left space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="sr-only">
            {t.formName}
          </label>
          <input
            id="contact-name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t.formName}
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted-2)] outline-none focus:border-[#7c5cff]/50 transition-colors"
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="sr-only">
            {t.formEmail}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t.formEmail}
            className="w-full rounded-xl border border-[color:var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted-2)] outline-none focus:border-[#7c5cff]/50 transition-colors"
          />
        </div>
      </div>
      <div>
        <label htmlFor="contact-message" className="sr-only">
          {t.formMessage}
        </label>
        <textarea
          id="contact-message"
          required
          rows={4}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.formMessage}
          className="w-full resize-none rounded-xl border border-[color:var(--color-border)] bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-[color:var(--color-muted-2)] outline-none focus:border-[#7c5cff]/50 transition-colors"
        />
      </div>

      <div className="flex flex-col items-center gap-3">
        <button
          type="submit"
          disabled={status === "sending"}
          className="btn btn-primary w-full sm:w-auto justify-center disabled:opacity-60"
        >
          <Send size={16} />
          {status === "sending" ? t.formSending : t.formSubmit}
        </button>

        {status === "success" && (
          <p className="text-sm text-emerald-400 text-center">{t.formSuccess}</p>
        )}
        {status === "error" && !isConfigured && (
          <p className="text-sm text-[color:var(--color-muted)] text-center">
            {t.formNotConfigured}
          </p>
        )}
        {status === "error" && isConfigured && (
          <p className="text-sm text-red-400 text-center">{t.formError}</p>
        )}
      </div>
    </form>
  );
}
