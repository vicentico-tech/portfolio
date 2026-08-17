"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, FolderOpen, Lock } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLocale } from "@/i18n/LanguageContext";

export function Portfolio() {
  const { content } = useLocale();
  const { portfolio, liveProjects } = content;

  return (
    <section id="portfolio" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow={portfolio.eyebrow}
          title={portfolio.title}
          description={portfolio.description}
        />

        <div className="grid gap-6 md:grid-cols-3">
          {liveProjects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="card relative p-6 overflow-hidden group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="chip">
                  <FolderOpen size={12} />
                  {p.tags[0]}
                </span>
                {p.loginRequired && (
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[color:var(--color-muted-2)] inline-flex items-center gap-1.5">
                    <Lock size={11} />
                    {portfolio.loginRequired}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl text-white leading-tight">
                {p.title}
              </h3>
              <p className="mt-3 text-sm text-[color:var(--color-muted)] leading-relaxed">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="chip text-[11px]">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="btn mt-6 self-start"
              >
                {portfolio.openLive}
                <ArrowUpRight size={14} />
              </a>
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
            <h3 className="font-display text-2xl md:text-3xl text-white leading-tight">
              {portfolio.ctaTitle}
            </h3>
            <p className="mt-3 text-[color:var(--color-muted)]">
              {portfolio.ctaBody}
            </p>
          </div>
          <a
            href="#contact"
            className="btn btn-primary self-start md:self-auto shrink-0"
          >
            {portfolio.ctaButton}
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
