const experiences = [
  {
    company: "ICAR-CNR",
    role: "Technical Intern — NLP & Information Retrieval",
    period: "March 2026 – July 2026",
    location: "Palermo, Italy",
    description: [
      "Developed an offline Wind Turbine Maintenance Advisor using Python.",
      "Implemented TF-IDF and cosine-similarity retrieval over technical-manual content.",
      "Built a structured JSON knowledge base with rule-based intent and component detection.",
      "Added evidence-backed responses with an optional Groq/Llama rewriting layer.",
    ],
    tech: ["Python", "NLP", "TF-IDF", "Information Retrieval", "JSON", "LLMs"],
  },
  {
    company: "Ecera System Private Limited",
    role: "Full Stack Developer",
    period: "August 2023 – May 2024",
    location: "India · Remote",
    description: [
      "Worked on a full-stack Learning Management System using React, Node.js and Express.",
      "Implemented authentication and Google OAuth workflows.",
      "Integrated Razorpay payment and refund functionality.",
      "Developed responsive frontend features and backend REST APIs.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "TypeScript",
      "REST APIs",
      "SQL",
      "Git",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#0a0d14] py-20 sm:py-24"
    >
      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,37,56,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(30,37,56,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Subtle cyan glow */}
      <div className="pointer-events-none absolute right-[-180px] top-[120px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.025] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div>
          <p className="font-mono text-sm text-cyan-400">02. Experience</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Where I&apos;ve worked.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            Practical experience across NLP, information retrieval, backend
            systems, and full-stack software development.
          </p>
        </div>

        {/* Experience cards */}
        <div className="mt-10 space-y-6">
          {experiences.map((experience, index) => (
            <article
              key={experience.company}
              className="overflow-hidden rounded-xl border border-white/10 bg-[#0e1320]/90 shadow-lg shadow-black/10 transition duration-300 hover:border-cyan-400/30"
            >
              {/* Terminal-style header */}
              <div className="flex items-center justify-between border-b border-white/10 bg-[#0b101a]/80 px-6 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
                </div>

                <span className="font-mono text-[10px] text-zinc-600">
                  experience_0{index + 1}.log
                </span>
              </div>

              <div className="p-6 sm:p-7">
                {/* Role */}
                <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                      {experience.role}
                    </h3>

                    <p className="mt-1.5 text-base font-medium text-cyan-400">
                      {experience.company}
                    </p>
                  </div>

                  <div className="font-mono text-xs leading-5 text-zinc-500 md:text-right">
                    <p>{experience.period}</p>
                    <p>{experience.location}</p>
                  </div>
                </div>

                {/* Internal divider */}
                <div className="my-6 h-px bg-white/[0.06]" />

                {/* Responsibilities */}
                <ul className="space-y-3 text-sm leading-6 text-zinc-400">
                  {experience.description.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-[2px] shrink-0 font-mono text-cyan-400">
                        ›
                      </span>

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech */}
                <div className="mt-6 flex flex-wrap gap-2 border-t border-white/[0.06] pt-5">
                  {experience.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-[#141b2c] px-2.5 py-1.5 font-mono text-[11px] text-zinc-400 transition hover:border-cyan-400/30 hover:text-zinc-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
