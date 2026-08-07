"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Copy, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { profile } from "@/data/profile";

export function Contact() {
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
          eyebrow="Contact"
          title="Let's build something worth shipping."
          description="Open to select engagements — full-time, contract, or advisory. Fastest way to reach me is email."
          align="center"
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="mx-auto max-w-3xl card p-8 md:p-12 relative overflow-hidden noise"
        >
          <div className="text-center">
            <div className="inline-flex chip mb-6">
              <MapPin size={12} />
              {profile.location}
            </div>
            <h3 className="font-display text-3xl md:text-4xl text-gradient">
              {profile.email}
            </h3>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a href={`mailto:${profile.email}`} className="btn btn-primary">
                <Mail size={16} />
                Send an email
              </a>
              <button onClick={copyEmail} className="btn">
                <Copy size={14} />
                {copied ? "Copied" : "Copy email"}
              </button>
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
              Typical response time: within 24 hours on business days.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
