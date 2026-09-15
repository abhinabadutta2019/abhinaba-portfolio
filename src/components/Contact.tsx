export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#080c12] py-20 sm:py-24"
    >
      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,37,56,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(30,37,56,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Subtle glow */}
      <div className="pointer-events-none absolute right-[-160px] bottom-[-120px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-cyan-400">06. Contact</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
          I&apos;m open to opportunities in data engineering, AI/ML, NLP,
          backend development, and software engineering.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:abhinabadutta2019@gmail.com"
            className="rounded-xl border border-white/10 bg-[#0e1320]/85 p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Email
            </p>

            <p className="mt-2 break-all text-sm font-medium text-white">
              abhinabadutta2019@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/abhinabadutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-[#0e1320]/85 p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              LinkedIn
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              linkedin.com/in/abhinabadutta
            </p>
          </a>

          <a
            href="https://github.com/abhinabadutta2019"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-[#0e1320]/85 p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              GitHub
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              github.com/abhinabadutta2019
            </p>
          </a>

          <div className="rounded-xl border border-white/10 bg-[#0e1320]/85 p-5">
            <p className="font-mono text-[10px] uppercase tracking-wider text-zinc-600">
              Location
            </p>

            <p className="mt-2 text-sm font-medium text-white">
              Palermo, Italy
            </p>
          </div>
        </div>

        <div className="mt-16 text-sm text-zinc-600">© 2026 Abhinaba Dutta</div>
      </div>
    </section>
  );
}
