"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Palette, Terminal } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { useLocale } from "@/i18n/LanguageContext";

const icons = [Code2, Layers, Palette, Terminal];

export function Skills() {
  const { content } = useLocale();
  const { skills, skillGroups } = content;

  return (
    <section id="skills" className="section relative">
      <div className="container-x">
        <SectionHeader
          eyebrow={skills.eyebrow}
          title={skills.title}
          description={skills.description}
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="card p-6 group"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 flex items-center justify-center text-[color:var(--color-accent-2)] group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="font-display text-lg text-white leading-tight">
                      {group.title}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--color-muted-2)]">
                      {`0${i + 1}`} / {`0${skillGroups.length}`}
                    </div>
                  </div>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.items.map((s) => (
                    <li key={s} className="chip">
                      {s}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
