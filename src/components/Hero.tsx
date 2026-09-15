export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#0a0d14] pt-20">
      {/* About anchor */}
      <div id="about" className="absolute top-0" />

      {/* Technical background grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,37,56,0.35)_1px,transparent_1px),linear-gradient(90deg,rgba(30,37,56,0.35)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Subtle cyan glow */}
      <div className="pointer-events-none absolute left-[-120px] top-[-80px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />

      <div className="relative mx-auto w-full max-w-6xl px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
          {/* LEFT SIDE */}
          <div className="lg:col-span-8">
            {/* Terminal prompt */}
            <div className="flex items-center gap-2 font-mono text-sm text-cyan-400">
              <span className="text-zinc-600">$</span>
              <span>whoami</span>
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-cyan-400" />
            </div>

            {/* Category */}
            <p className="mt-6 font-mono text-xs font-medium uppercase tracking-[0.22em] text-zinc-500">
              Data
              <span className="mx-2 text-cyan-400/50">•</span>
              Artificial Intelligence
              <span className="mx-2 text-cyan-400/50">•</span>
              Software
            </p>

            {/* Name */}
            <h1 className="mt-4 text-5xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-6xl md:text-7xl">
              Abhinaba
              <br />
              <span className="text-cyan-400">Dutta.</span>
            </h1>

            {/* Main positioning */}
            <div className="mt-6">
              <h2 className="text-xl font-semibold tracking-tight text-zinc-200 sm:text-2xl">
                Data Engineering
                <span className="mx-2 text-zinc-700">•</span>
                <span className="text-cyan-300">AI/ML</span>
              </h2>

              <p className="mt-1.5 text-sm text-zinc-500 sm:text-base">
                Experienced in software engineering
              </p>
            </div>

            {/* Bio */}
            <div className="mt-7 max-w-3xl space-y-3 text-base leading-7 text-zinc-400">
              <p>
                <span className="font-semibold text-white">
                  Master&apos;s student focused on Data Science &amp; AI
                </span>{" "}
                at the University of Palermo, pursuing an MSc in Data,
                Algorithms and Machine Intelligence.
              </p>

              <p>
                My background spans data engineering, machine learning, NLP,
                information retrieval, LLM-based systems, knowledge graphs, and
                software engineering.
              </p>

              <p className="text-zinc-300">
                I build practical systems that connect data, software, and
                artificial intelligence.
              </p>
            </div>

            {/* Location */}
            <div className="mt-6 flex items-center gap-2 font-mono text-sm text-zinc-500">
              <span>📍</span>
              <span>Palermo, Italy</span>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-lg bg-cyan-400 px-5 py-3 text-sm font-semibold text-[#071014] transition hover:bg-cyan-300"
              >
                View Projects →
              </a>

              <a
                href="https://github.com/abhinabadutta2019"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/abhinabadutta/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                LinkedIn
              </a>

              <a
                href="/cv/Abhinaba_Dutta_CV.pdf"
                download="Abhinaba_Dutta_CV.pdf"
                className="rounded-lg border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-zinc-300 transition hover:border-cyan-400/50 hover:text-white"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* RIGHT SIDE — SYSTEM PROFILE */}
          <aside className="lg:col-span-4 lg:pt-5">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#0e1320]/90 shadow-2xl shadow-black/20">
              {/* Terminal header */}
              <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
                <div className="flex gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <span className="font-mono text-[11px] text-zinc-600">
                  sys_overview.sh
                </span>
              </div>

              <div className="space-y-5 p-5 font-mono text-xs">
                {/* Program */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Current Program
                  </p>

                  <p className="mt-1.5 leading-5 text-cyan-300">
                    MSc Data, Algorithms &amp; Machine Intelligence
                  </p>

                  <p className="mt-1 text-[11px] text-zinc-500">
                    University of Palermo
                  </p>
                </div>

                {/* Focus */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Focus Domains
                  </p>

                  <div className="mt-2 flex flex-wrap gap-2">
                    {[
                      "Data Engineering",
                      "AI / ML",
                      "Biomedical NLP",
                      "Information Retrieval",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-md border border-white/10 bg-[#141b2c] px-2.5 py-1.5 text-[11px] text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Stack */}
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                    Primary Stack
                  </p>

                  <p className="mt-2 leading-6 text-zinc-400">
                    <span className="text-cyan-300">Python</span>
                    <span className="mx-1.5 text-zinc-700">•</span>
                    PyTorch
                    <span className="mx-1.5 text-zinc-700">•</span>
                    Spark
                    <span className="mx-1.5 text-zinc-700">•</span>
                    SQL
                    <span className="mx-1.5 text-zinc-700">•</span>
                    FastAPI
                    <span className="mx-1.5 text-zinc-700">•</span>
                    Node.js
                  </p>
                </div>

                {/* Status */}
                <div className="border-t border-white/10 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-wider text-zinc-600">
                      Status
                    </span>

                    <span className="flex items-center gap-2 text-[11px] text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400" />
                      Open to opportunities
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
