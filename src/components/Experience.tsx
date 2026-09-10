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
      className="border-t border-white/10 bg-[#080c12] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">02. Experience</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Where I&apos;ve worked.
        </h2>

        <div className="mt-12 space-y-6">
          {experiences.map((experience) => (
            <article
              key={experience.company}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {experience.role}
                  </h3>

                  <p className="mt-1 text-cyan-400">{experience.company}</p>
                </div>

                <div className="text-sm text-zinc-500 md:text-right">
                  <p>{experience.period}</p>
                  <p className="mt-1">{experience.location}</p>
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm leading-7 text-zinc-400">
                {experience.description.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-1 text-cyan-400">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-2">
                {experience.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-zinc-400"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
