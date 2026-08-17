"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocale } from "@/i18n/LanguageContext";
import { LanguageSwitch } from "./LanguageSwitch";

export function Navbar() {
  const { content } = useLocale();
  const navLinks = content.nav.links;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#about");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((l) => document.querySelector(l.href) as HTMLElement | null)
      .filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(`#${visible.target.id}`);
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [navLinks]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-[rgba(5,6,10,0.75)] border-b border-[color:var(--color-border)]"
          : "bg-transparent"
      }`}
    >
      <div className="container-x flex items-center justify-between h-16">
        <Link
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="relative inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] font-display font-bold text-black text-sm shadow-[0_8px_24px_-8px_rgba(124,92,255,0.6)]">
            JG
            <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
          </span>
          <span className="hidden sm:block font-display text-sm tracking-tight text-white/90 group-hover:text-white">
            {content.profile.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`relative px-4 py-2 text-sm rounded-full transition-colors ${
                active === l.href
                  ? "text-white"
                  : "text-[color:var(--color-muted)] hover:text-white"
              }`}
            >
              {active === l.href && (
                <motion.span
                  layoutId="nav-active"
                  className="absolute inset-0 rounded-full bg-white/8 border border-white/10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative">{l.label}</span>
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitch />
          <Link href="#contact" className="btn btn-primary text-sm">
            {content.nav.getInTouch}
          </Link>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[color:var(--color-border)] text-white"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden border-t border-[color:var(--color-border)] bg-[rgba(5,6,10,0.95)] backdrop-blur"
          >
            <div className="container-x py-4 flex flex-col gap-1">
              {navLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm ${
                    active === l.href
                      ? "text-white bg-white/8"
                      : "text-[color:var(--color-muted)] hover:text-white hover:bg-white/5"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-2 justify-center"
              >
                {content.nav.getInTouch}
              </Link>
              <LanguageSwitch className="mt-2 self-start" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
