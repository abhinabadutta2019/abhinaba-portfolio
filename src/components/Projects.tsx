import Image from "next/image";

const projects = [
  {
    title: "Wind Turbine Maintenance Advisor",
    subtitle: "NLP · Information Retrieval · Full Stack",
    description:
      "An evidence-grounded wind turbine maintenance and troubleshooting advisor that retrieves technical-manual content using TF-IDF and cosine similarity, combines it with structured maintenance knowledge and rule-based reasoning, and provides an optional controlled LLM rewriting layer.",
    tech: [
      "Python",
      "FastAPI",
      "Next.js",
      "TF-IDF",
      "Information Retrieval",
      "Groq",
      "LLMs",
    ],
    metric: "Evidence-grounded · Offline-first · Deployed",
    github:
      "https://github.com/abhinabadutta2019/wind-turbine-maintenance-advisor",
    live: "https://wind-turbine-maintenance-advisor.vercel.app",
    image: "/projects/wind-turbine-advisor.png",
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
    live: null,
    image: null,
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
    live: null,
    image: null,
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
    live: null,
    image: null,
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
          AI, machine learning, data engineering, and full-stack development.
        </p>

        {/* Project grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              {/* Project image */}
              {project.image && (
                <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-[#05080d]">
                  <Image
                    src={project.image}
                    alt={`${project.title} interface`}
                    fill
                    className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              )}

              {/* Card content */}
              <div className="flex flex-1 flex-col p-6 sm:p-8">
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

                {/* Links */}
                <div className="mt-auto flex flex-wrap items-center gap-5 pt-8">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Live Demo
                      <span>↗</span>
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-zinc-400 transition hover:text-white"
                    >
                      GitHub
                      <span>↗</span>
                    </a>
                  )}

                  {!project.github && !project.live && (
                    <span className="text-sm text-zinc-600">
                      Ongoing academic research
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
