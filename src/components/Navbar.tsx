export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#080c12]/80 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#home"
          className="font-mono text-lg font-semibold tracking-tight text-white"
        >
          <span className="text-cyan-400">&gt;</span> AD
        </a>

        <div className="hidden items-center gap-7 text-sm text-zinc-400 md:flex">
          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#experience" className="transition hover:text-cyan-400">
            Experience
          </a>

          <a href="#skills" className="transition hover:text-cyan-400">
            Skills
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#education" className="transition hover:text-cyan-400">
            Education
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/abhinabadutta2019"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/abhinabadutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-zinc-400 hover:text-cyan-400"
          >
            LinkedIn
          </a>
        </div>
      </nav>
    </header>
  );
}
