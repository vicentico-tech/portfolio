"use client";

import { useLocale } from "@/i18n/LanguageContext";

export function LanguageSwitch({ className = "" }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={`inline-flex items-center rounded-full border border-[color:var(--color-border)] p-0.5 text-xs font-mono ${className}`}
      role="group"
      aria-label="Language"
    >
      {(["en", "es"] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLocale(l)}
          aria-pressed={locale === l}
          className={`px-2.5 py-1 rounded-full uppercase tracking-widest transition-colors ${
            locale === l
              ? "bg-white/10 text-white"
              : "text-[color:var(--color-muted)] hover:text-white"
          }`}
        >
          {l}
        </button>
      ))}
    </div>
  );
}
