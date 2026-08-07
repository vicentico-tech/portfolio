"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen, Sparkles } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const teasers = [
  {
    tag: "Enterprise · HR / Payroll",
    title: "Trinet — feature work",
    body: "A slice of an ongoing engagement building interfaces for enterprise HR & payroll workflows.",
    stack: ["Angular", "TypeScript", "NGRX", "Signals"],
  },
  {
    tag: "Banking · Migration",
    title: "Santander library integration",
    body: "Migrated a production app to Angular 12 and integrated the internal Banco Santander component library.",
    stack: ["Angular 12", "SASS", "SoapUI", "Swagger"],
  },
  {
    tag: "Freelance · Product",
    title: "Client dashboards",
    body: "A run of independent Angular projects — from CRUD dashboards to reactive multi-step forms.",
    stack: ["Angular 2++", "PrimeNG", "Bootstrap", "REST"],
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow="Portfolio"
          title="Selected work — coming soon."
          description="Individual case studies are being written up. In the meantime, here's a sketch of the kind of engagements I've been shipping into."
        />

        <div className="grid gap-6 md:grid-cols-3">
          {teasers.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card relative p-6 overflow-hidden group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="chip">
                  <FolderOpen size={12} />
                  {t.tag}
                </span>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-muted-2)]">
                  Case study soon
                </span>
              </div>
              <h3 className="font-display text-xl text-white leading-tight">
                {t.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-muted)] leading-relaxed">
                {t.body}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {t.stack.map((s) => (
                  <span key={s} className="chip text-[11px]">
                    {s}
                  </span>
                ))}
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-[radial-gradient(600px_circle_at_var(--x)_var(--y),rgba(124,92,255,0.10),transparent_40%)]" />
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mt-10 card p-8 md:p-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6 overflow-hidden relative noise"
        >
          <div className="max-w-2xl">
            <div className="chip mb-3">
              <Sparkles size={12} />
              Portfolio expansion in progress
            </div>
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
              Case studies, code samples and side projects — landing here soon.
            </h3>
            <p className="mt-3 text-[color:var(--color-muted)]">
              Want a walk-through of a specific piece of work now? I&apos;m happy
              to share portfolio material and code samples on request.
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary self-start md:self-auto shrink-0"
          >
            Request portfolio
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
