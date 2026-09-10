export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#080c12] pt-20"
    >
      {/* subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:55px_55px]" />

      {/* subtle glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-24">
        <div className="max-w-4xl">
          <p className="mb-7 font-mono text-sm text-cyan-400">
            <span className="text-zinc-500">$</span> whoami
            <span className="ml-2 animate-pulse">_</span>
          </p>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-zinc-500">
            Data · Artificial Intelligence · Software
          </p>

          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            Abhinaba
            <br />
            <span className="text-cyan-400">Dutta.</span>
          </h1>

          <h2 className="mt-7 text-xl font-medium text-zinc-300 sm:text-2xl">
            Data Engineering <span className="text-zinc-600">•</span> AI/ML{" "}
            <span className="text-zinc-600">•</span> Software Development
          </h2>

          <p className="mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            MSc candidate in Data, Algorithms and Machine Intelligence at the
            University of Palermo, with experience in software development, NLP,
            information retrieval, machine learning and data-driven systems.
          </p>

          <p className="mt-5 text-sm text-zinc-500">📍 Palermo, Italy</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300"
            >
              View Projects →
            </a>

            <a
              href="https://github.com/abhinabadutta2019"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/abhinabadutta/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400"
            >
              LinkedIn
            </a>

            <a
              href="/cv/Abhinaba_Dutta_CV.pdf"
              download="Abhinaba_Dutta_CV.pdf"
              className="rounded-lg border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
