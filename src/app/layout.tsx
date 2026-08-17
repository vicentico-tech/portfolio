import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { LanguageProvider } from "@/i18n/LanguageContext";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jose Garcia Mata — Front-End Engineer",
    template: "%s · Jose Garcia Mata",
  },
  description:
    "Front-End Engineer specialized in Angular, React and TypeScript. Building performant, scalable interfaces with clean architecture, NGRX, Signals and Atomic Design.",
  keywords: [
    "Jose Garcia Mata",
    "Front-End Developer",
    "Angular",
    "React",
    "Next.js",
    "TypeScript",
    "NGRX",
    "Signals",
    "Atomic Design",
    "Santiago Chile",
  ],
  authors: [{ name: "Jose Garcia Mata" }],
  creator: "Jose Garcia Mata",
  openGraph: {
    type: "website",
    title: "Jose Garcia Mata — Front-End Engineer",
    description:
      "Front-End Engineer specialized in Angular, React and TypeScript. Building performant, scalable interfaces.",
    siteName: "Jose Garcia Mata",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jose Garcia Mata — Front-End Engineer",
    description:
      "Front-End Engineer specialized in Angular, React and TypeScript.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-[color:var(--color-background)] text-[color:var(--color-foreground)] flex flex-col overflow-x-hidden">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
