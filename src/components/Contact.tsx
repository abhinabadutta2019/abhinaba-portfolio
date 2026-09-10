export default function Contact() {
  return (
    <section
      id="contact"
      className="border-t border-white/10 bg-[#080c12] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">06. Contact</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Let&apos;s connect.
        </h2>

        <p className="mt-5 max-w-2xl text-base leading-8 text-zinc-400">
          I&apos;m open to opportunities in data engineering, AI/ML, NLP,
          backend development, and software engineering.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:abhinabadutta2019@gmail.com"
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Email
            </p>
            <p className="mt-2 text-sm text-white">
              abhinabadutta2019@gmail.com
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/abhinabadutta/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              LinkedIn
            </p>
            <p className="mt-2 text-sm text-white">
              linkedin.com/in/abhinabadutta
            </p>
          </a>

          <a
            href="https://github.com/abhinabadutta2019"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-cyan-400/30"
          >
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              GitHub
            </p>
            <p className="mt-2 text-sm text-white">
              github.com/abhinabadutta2019
            </p>
          </a>

          <div className="rounded-xl border border-white/10 bg-white/[0.02] p-5">
            <p className="font-mono text-xs uppercase tracking-wider text-zinc-500">
              Location
            </p>
            <p className="mt-2 text-sm text-white">Palermo, Italy</p>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-6 text-sm text-zinc-600">
          © 2026 Abhinaba Dutta
        </div>
      </div>
    </section>
  );
}
