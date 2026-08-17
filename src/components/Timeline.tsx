"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLocale } from "@/i18n/LanguageContext";

export function Timeline() {
  const { content } = useLocale();
  const { timeline, experiences } = content;

  return (
    <section id="journey" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow={timeline.eyebrow}
          title={timeline.title}
          description={timeline.description}
        />

        <div className="relative">
          {/* Center rail */}
          <div className="pointer-events-none absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[color:var(--color-border-strong)] to-transparent md:-translate-x-1/2" />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, idx) => {
              const isRight = idx % 2 === 1;
              return (
                <motion.article
                  key={`${exp.company}-${exp.period}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.55 }}
                  className="relative md:grid md:grid-cols-2 md:gap-12"
                >
                  {/* Node */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 top-6 md:top-8 z-10">
                    <span className="relative flex w-3.5 h-3.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7c5cff] opacity-70" />
                      <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] ring-4 ring-[color:var(--color-background)]" />
                    </span>
                  </div>

                  {/* Card */}
                  <div
                    className={`ml-12 md:ml-0 ${
                      isRight ? "md:col-start-2" : "md:col-start-1"
                    }`}
                  >
                    <div className="card p-7 md:p-8">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <div className="flex items-center gap-2 text-[color:var(--color-muted)] text-xs font-mono uppercase tracking-widest">
                            <Briefcase size={12} />
                            <span>{exp.period}</span>
                          </div>
                          <h3 className="mt-2 font-display text-2xl text-white leading-tight">
                            {exp.role}
                          </h3>
                          <div className="mt-1 text-sm">
                            <span className="text-gradient-accent font-medium">
                              {exp.company}
                            </span>
                            {exp.location && (
                              <span className="text-[color:var(--color-muted-2)]">
                                {" "}
                                · {exp.location}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      {exp.summary && (
                        <p className="mt-4 text-[color:var(--color-foreground)]/85 leading-relaxed text-[15px]">
                          {exp.summary}
                        </p>
                      )}

                      {exp.highlights && (
                        <ul className="mt-4 space-y-2 text-sm text-[color:var(--color-muted)]">
                          {exp.highlights.map((h) => (
                            <li key={h} className="flex gap-3">
                              <span className="mt-2 w-1 h-1 rounded-full bg-[color:var(--color-accent-2)] shrink-0" />
                              <span className="text-[color:var(--color-foreground)]/80">
                                {h}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-5 flex flex-wrap gap-2">
                        {exp.tags.map((t) => (
                          <span key={t} className="chip text-[11px]">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty spacer */}
                  <div className="hidden md:block" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
