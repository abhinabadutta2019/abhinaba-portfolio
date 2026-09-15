const skillGroups = [
  {
    title: "Data Engineering",
    skills: ["Python", "SQL", "Apache Spark", "Pandas", "NumPy"],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Machine Learning / AI",
    skills: [
      "Scikit-learn",
      "PyTorch",
      "Machine Learning",
      "LLMs",
      "Model Evaluation",
    ],
  },
  {
    title: "NLP / Semantic AI",
    skills: [
      "NLP",
      "TF-IDF",
      "Information Retrieval",
      "Knowledge Graphs",
      "SNOMED CT",
    ],
  },
  {
    title: "Software / Backend",
    skills: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express",
      "React",
      "REST APIs",
    ],
  },
  {
    title: "Tools",
    skills: ["Git", "GitHub", "Linux", "Docker"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#080c12] py-20 sm:py-24"
    >
      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,37,56,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(30,37,56,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      {/* Subtle cyan glow */}
      <div className="pointer-events-none absolute left-[-160px] top-[100px] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.02] blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Heading */}
        <div>
          <p className="font-mono text-sm text-cyan-400">03. Skills</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
            A practical toolkit spanning data engineering, machine learning,
            NLP, backend development, and modern software workflows.
          </p>
        </div>

        {/* Skills grid */}
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className="group overflow-hidden rounded-xl border border-white/10 bg-[#0e1320]/85 transition duration-300 hover:border-cyan-400/30"
            >
              {/* Small technical header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] bg-[#0b101a]/70 px-5 py-3">
                <span className="font-mono text-[10px] text-zinc-600">
                  skill_group_0{index + 1}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/60" />
              </div>

              <div className="p-5">
                <h3 className="text-base font-semibold tracking-tight text-white">
                  {group.title}
                </h3>

                <div className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-white/10 bg-[#141b2c] px-2.5 py-1.5 font-mono text-[11px] text-zinc-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                    >
                      {skill}
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
