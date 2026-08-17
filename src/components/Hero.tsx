"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { useLocale } from "@/i18n/LanguageContext";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const { content } = useLocale();
  const { profile, marqueeStack } = content;
  const { hero } = content;

  return (
    <section id="top" className="relative pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="container-x">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="max-w-4xl"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3 mb-8">
            <span className="chip">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
              </span>
              {profile.status}
            </span>
            <span className="chip">
              <MapPin size={12} />
              {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-display text-[clamp(2.75rem,7vw,5.75rem)] leading-[0.98] tracking-tight text-white"
          >
            <span className="block">{hero.titleLine1}</span>
            <span className="block text-gradient">{hero.titleLine2}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 text-lg md:text-xl text-[color:var(--color-muted)] max-w-2xl leading-relaxed"
          >
            {hero.intro}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-3">
            <Link href="#journey" className="btn btn-primary">
              {hero.exploreJourney}
              <ArrowUpRight size={16} />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="hidden md:flex mt-24 items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-[color:var(--color-muted-2)]"
        >
          <span className="block w-8 h-px bg-gradient-to-r from-white/40 to-transparent" />
          {hero.scrollCue}
        </motion.div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-24 border-y border-[color:var(--color-border)] bg-[rgba(255,255,255,0.02)] py-5 overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[color:var(--color-background)] to-transparent z-10"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[color:var(--color-background)] to-transparent z-10"
        />
        <div className="flex whitespace-nowrap animate-marquee w-max">
          {[...marqueeStack, ...marqueeStack].map((tech, i) => (
            <span
              key={i}
              className="mx-6 font-mono text-sm uppercase tracking-widest text-[color:var(--color-muted)]"
            >
              {tech}
              <span className="mx-6 text-[color:var(--color-border-strong)]">·</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
