"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { ContactForm } from "./ContactForm";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { WhatsAppIcon } from "./icons/WhatsAppIcon";
import { useLocale } from "@/i18n/LanguageContext";

export function Contact() {
  const { content } = useLocale();
  const { profile, contact } = content;
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* noop */
    }
  };

  return (
    <section id="contact" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow={contact.eyebrow}
          title={contact.title}
          description={contact.description}
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-2xl card p-8 md:p-12 relative overflow-hidden noise"
        >
          <div className="text-center">
            <div className="inline-flex chip mb-6">
              <MapPin size={12} />
              {profile.location}
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-gradient">
              {contact.sendMessage}
            </h3>

            <ContactForm />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button onClick={copyEmail} className="btn">
                <Copy size={14} />
                {copied ? contact.copiedEmail : contact.copyEmail}
              </button>
              <a
                href={profile.whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <WhatsAppIcon size={14} />
                {contact.whatsappLabel}
                <ArrowUpRight size={14} />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                <LinkedInIcon size={14} />
                LinkedIn
                <ArrowUpRight size={14} />
              </a>
            </div>

            <p className="mt-8 text-sm text-[color:var(--color-muted)]">
              {contact.responseTime}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
