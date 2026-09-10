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
      className="border-t border-white/10 bg-[#080c12] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">03. Skills</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Technologies I work with.
        </h2>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6"
            >
              <h3 className="text-lg font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5 font-mono text-xs text-zinc-400 transition hover:border-cyan-400/40 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
