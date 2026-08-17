"use client";

import { motion } from "framer-motion";
import { Award, BookOpen, Compass, GraduationCap, Wrench } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLocale } from "@/i18n/LanguageContext";

const valueIcons = [Compass, Wrench, Award];

export function About() {
  const { content } = useLocale();
  const { profile, about, education, certifications, coursesInProgress } = content;
  const values = about.values.map((v, i) => ({ ...v, icon: valueIcons[i] }));

  return (
    <section id="about" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow={about.eyebrow}
          title={about.title}
          description={about.description}
        />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Bio card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="relative card p-8 md:p-10 lg:col-span-7 overflow-hidden noise"
          >
            <div className="relative">
              <div className="inline-flex items-center gap-2 chip mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-accent-2)]" />
                {about.bioLabel}
              </div>
              <div className="space-y-4 text-[color:var(--color-foreground)]/90 text-base md:text-lg leading-relaxed">
                {profile.bio.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                {profile.stats.map((s) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-[color:var(--color-border)] p-4 bg-white/[0.02]"
                  >
                    <div className="font-display text-3xl text-white">
                      {s.value}
                    </div>
                    <div className="mt-1 text-xs uppercase tracking-widest text-[color:var(--color-muted-2)]">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Values stack */}
          <div className="lg:col-span-5 grid gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-[color:var(--color-accent-2)]">
                    <v.icon size={18} />
                  </div>
                  <div>
                    <div className="font-display text-lg text-white">
                      {v.title}
                    </div>
                    <p className="mt-1.5 text-sm text-[color:var(--color-muted)] leading-relaxed">
                      {v.body}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education + certifications + courses */}
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-5 text-[color:var(--color-muted)]">
              <GraduationCap size={16} />
              <span className="eyebrow" style={{ margin: 0 }}>
                {about.educationLabel}
              </span>
            </div>
            {education.map((e) => (
              <div key={e.institution} className="flex items-start gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-gradient-to-br from-[#7c5cff] to-[#22d3ee]" />
                <div>
                  <div className="font-display text-lg text-white">
                    {e.degree}
                  </div>
                  <div className="text-sm text-[color:var(--color-muted)]">
                    {e.institution}
                  </div>
                  <div className="mt-1 font-mono text-xs uppercase tracking-widest text-[color:var(--color-muted-2)]">
                    {e.period}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-5 text-[color:var(--color-muted)]">
              <Award size={16} />
              <span className="eyebrow" style={{ margin: 0 }}>
                {about.certificationsLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="card p-6 md:p-8"
          >
            <div className="flex items-center gap-2 mb-5 text-[color:var(--color-muted)]">
              <BookOpen size={16} />
              <span className="eyebrow" style={{ margin: 0 }}>
                {about.coursesLabel}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursesInProgress.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
