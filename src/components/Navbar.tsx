"use client";

import { useState } from "react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#080c12]/95 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <a
          href="#home"
          className="font-mono text-lg font-bold text-white"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-cyan-400">&gt;</span> AD
        </a>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-zinc-400 transition hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop social links */}
        <div className="hidden items-center gap-5 md:flex">
          <a
            href="https://github.com/abhinabadutta2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhinabadutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 text-zinc-300 transition hover:border-cyan-400/50 hover:text-white md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <span className="text-2xl leading-none">×</span>
          ) : (
            <div className="flex flex-col gap-1.5">
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
              <span className="block h-px w-5 bg-current" />
            </div>
          )}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#080c12] px-6 py-5 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-base text-zinc-300 transition hover:text-cyan-400"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-2 border-t border-white/10 pt-4">
              <div className="flex gap-6">
                <a
                  href="https://github.com/abhinabadutta2019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  GitHub ↗
                </a>

                <a
                  href="https://www.linkedin.com/in/abhinabadutta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-zinc-400 transition hover:text-white"
                >
                  LinkedIn ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
