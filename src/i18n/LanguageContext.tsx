"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { Content, Locale } from "./types";
import { contentEn } from "./content.en";
import { contentEs } from "./content.es";

const STORAGE_KEY = "portfolio_locale";

const dictionaries: Record<Locale, Content> = {
  en: contentEn,
  es: contentEs,
};

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  content: Content;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "es") {
      // Restoring persisted locale after mount (SSR has no access to localStorage).
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocaleState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  };

  const value = useMemo(
    () => ({ locale, setLocale, content: dictionaries[locale] }),
    [locale]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLocale() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLocale must be used within a LanguageProvider");
  return ctx;
}
