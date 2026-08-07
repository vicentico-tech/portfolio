import Link from "next/link";
import { Mail } from "lucide-react";
import { LinkedInIcon } from "./icons/LinkedInIcon";
import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="relative mt-8 border-t border-[color:var(--color-border)] py-10">
      <div className="container-x flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-br from-[#7c5cff] to-[#22d3ee] font-display font-bold text-black text-xs">
            JG
          </span>
          <span className="text-sm text-[color:var(--color-muted)]">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </span>
        </div>
        <div className="flex items-center gap-4 text-[color:var(--color-muted)]">
          <Link
            href={`mailto:${profile.email}`}
            className="hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </Link>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <LinkedInIcon size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
