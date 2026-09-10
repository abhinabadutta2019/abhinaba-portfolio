const projects = [
  {
    title: "Wind Turbine Maintenance Advisor",
    subtitle: "NLP & Information Retrieval",
    description:
      "An offline maintenance advisor that retrieves evidence from technical manuals using TF-IDF and cosine similarity, supported by a structured JSON knowledge base and rule-based intent and component detection.",
    tech: [
      "Python",
      "TF-IDF",
      "Cosine Similarity",
      "Information Retrieval",
      "JSON",
      "LLMs",
    ],
    metric: "15 turbine components · Offline-first",
    github:
      "https://github.com/abhinabadutta2019/wind-turbine-maintenance-advisor",
    status: null,
  },

  {
    title: "Brain Tumor Segmentation",
    subtitle: "Deep Learning · Medical Imaging",
    description:
      "A 2D U-Net brain-tumor segmentation system using a ResNet18 encoder and multimodal MRI data from the BraTS 2020 dataset, evaluated using patient-level 5-fold cross-validation.",
    tech: [
      "Python",
      "PyTorch",
      "U-Net",
      "ResNet18",
      "Medical Imaging",
      "BraTS 2020",
    ],
    metric: "Mean Whole-Tumor Dice ≈ 0.856",
    github: "https://github.com/abhinabadutta2019/brain-tumor-segmentation",
    status: null,
  },

  {
    title: "Explainable Patient–Clinical Trial Matching",
    subtitle: "Master’s Thesis Research",
    description:
      "An ongoing research project for matching patient descriptions with clinical-trial eligibility criteria using structured extraction, semantic normalization, biomedical concepts, rule-based validation, and criterion-level reasoning.",
    tech: [
      "Python",
      "LLMs",
      "Biomedical NLP",
      "SNOMED CT",
      "Knowledge Graphs",
      "TREC Clinical Trials",
    ],
    metric: "Explainable criterion-level matching",
    github: null,
    status: "In Progress",
  },

  {
    title: "Restaurant Revenue Forecasting",
    subtitle: "Apache Spark · Machine Learning",
    description:
      "A data-processing and machine-learning project for predicting restaurant revenue using Apache Spark. The project processes structured restaurant data, integrates MongoDB, performs feature preparation, and compares multiple regression models.",
    tech: [
      "Apache Spark",
      "Java",
      "MongoDB",
      "Machine Learning",
      "Linear Regression",
      "Random Forest",
      "GBT",
    ],
    metric: "Regression model comparison with Spark ML",
    github:
      "https://github.com/abhinabadutta2019/ApacheSparkRestaurantForecast",
    status: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#080c12] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Section label */}
        <p className="mb-3 font-mono text-sm text-cyan-400">04. Projects</p>

        {/* Section title */}
        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Selected work.
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-zinc-400">
          Projects across NLP, information retrieval, deep learning, biomedical
          AI, machine learning, and data engineering.
        </p>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col rounded-xl border border-white/10 bg-white/[0.02] p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40 sm:p-8"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-4">
                <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                  {project.subtitle}
                </p>

                <span className="font-mono text-xs text-zinc-600">
                  0{index + 1}
                </span>
              </div>

              {/* Status */}
              {project.status && (
                <div className="mt-4">
                  <span className="rounded-md border border-cyan-400/30 bg-cyan-400/[0.08] px-3 py-1 font-mono text-xs uppercase tracking-wide text-cyan-300">
                    {project.status}
                  </span>
                </div>
              )}

              {/* Title */}
              <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              {/* Metric */}
              <div className="mt-6 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.03] px-4 py-3 font-mono text-sm text-cyan-300">
                {project.metric}
              </div>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-400 transition group-hover:border-white/15"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Link */}
              <div className="mt-auto pt-8">
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                  >
                    View on GitHub
                    <span>→</span>
                  </a>
                ) : (
                  <span className="text-sm text-zinc-600">
                    Ongoing academic research
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
