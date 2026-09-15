import Image from "next/image";

const projects = [
  {
    title: "Wind Turbine Maintenance Advisor",
    subtitle: "NLP · Information Retrieval · Full Stack",
    description:
      "Evidence-grounded maintenance assistant using TF-IDF retrieval, structured knowledge, FastAPI, Next.js, and controlled LLM rewriting.",
    tech: ["Python", "FastAPI", "Next.js", "TF-IDF", "Groq"],
    metric: "Offline-first · Evidence-grounded · Deployed",
    github:
      "https://github.com/abhinabadutta2019/wind-turbine-maintenance-advisor",
    live: "https://wind-turbine-maintenance-advisor.vercel.app",
    presentation: null,
    visualization: null,
    image: "/projects/wind-turbine-advisor.png",
    status: null,
  },

  {
    title: "Explainable Patient–Clinical Trial Matching",
    subtitle: "Master’s Thesis · Biomedical NLP",
    description:
      "Explainable patient–trial matching using structured extraction, SNOMED CT normalization, knowledge graphs, and criterion-level reasoning.",
    tech: ["Python", "LLMs", "SNOMED CT", "Knowledge Graphs", "TREC"],
    metric: "Explainable criterion-level matching",
    github: null,
    live: null,
    presentation: null,
    visualization: null,
    image: "/projects/clinical-trial-matching.png",
    status: "In Progress",
  },

  {
    title: "Brain Tumor Segmentation",
    subtitle: "Deep Learning · Medical Imaging",
    description:
      "2D U-Net brain-tumor segmentation using a ResNet18 encoder and multimodal MRI from BraTS 2020 with patient-level cross-validation.",
    tech: ["Python", "PyTorch", "U-Net", "ResNet18", "BraTS 2020"],
    metric: "Mean Whole-Tumor Dice ≈ 0.856",
    github: "https://github.com/abhinabadutta2019/brain-tumor-segmentation",
    live: null,
    presentation:
      "https://github.com/abhinabadutta2019/brain-tumor-segmentation/blob/main/docs/Brain_Tumor_Segmentation_BraTS2020_Presentation.pdf",
    visualization: null,
    image: "/projects/brain-tumor-segmentation.png",
    status: null,
  },

  {
    title: "Healthcare Data Warehouse & Analytics",
    subtitle: "Data Warehousing · SQL · Database Design",
    description:
      "Healthcare data warehousing project covering data analysis, ER modeling, dimensional schema design, MySQL implementation, analytical queries, and reporting.",
    tech: [
      "MySQL",
      "SQL",
      "Data Warehousing",
      "ER Modeling",
      "Dimensional Modeling",
    ],
    metric: "ER · Fact · Snowflake Schema Design",
    github:
      "https://github.com/abhinabadutta2019/healthcare-data-warehouse-analytics",
    live: null,
    presentation:
      "https://github.com/abhinabadutta2019/healthcare-data-warehouse-analytics/blob/main/Healthcare_Data_Warehouse_Design_and_Analytics.pdf",
    visualization:
      "https://github.com/abhinabadutta2019/healthcare-data-warehouse-analytics/blob/main/Tableau_Visualizations.pdf",
    image: "/projects/healthcare-data-warehouse.png",
    status: "Academic Project",
  },

  {
    title: "Restaurant Revenue Forecasting",
    subtitle: "Apache Spark · Machine Learning",
    description:
      "Restaurant revenue forecasting with Apache Spark, MongoDB, feature engineering, and model comparison across Linear Regression, Random Forest, and GBT.",
    tech: ["Apache Spark", "Java", "Spark MLlib", "MongoDB", "GBT"],
    metric: "RMSE · MAPE · R² model comparison",
    github:
      "https://github.com/abhinabadutta2019/ApacheSparkRestaurantForecast",
    live: null,
    presentation:
      "https://github.com/abhinabadutta2019/ApacheSparkRestaurantForecast/blob/main/docs/Restaurant_Revenue_Prediction_Presentation.pdf",
    visualization: null,
    image: "/projects/restaurant-forecasting.png",
    status: null,
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-[#080c12] py-20"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">04. Projects</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Selected work.
        </h2>

        <p className="mt-3 max-w-2xl text-zinc-400">
          Projects across data engineering, AI/ML, NLP, and software systems.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[620px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
            >
              <div className="relative h-52 w-full overflow-hidden border-b border-white/10 bg-[#05080d]">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  loading="eager"
                  className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="flex flex-1 flex-col p-7">
                <div className="flex items-start justify-between gap-4">
                  <p className="font-mono text-xs uppercase tracking-wider text-cyan-400">
                    {project.subtitle}
                  </p>

                  <span className="font-mono text-xs text-zinc-600">
                    0{index + 1}
                  </span>
                </div>

                {project.status && (
                  <div className="mt-3">
                    <span className="rounded-md border border-cyan-400/30 bg-cyan-400/[0.08] px-2.5 py-1 font-mono text-xs uppercase tracking-wide text-cyan-300">
                      {project.status}
                    </span>
                  </div>
                )}

                <h3 className="mt-4 text-2xl font-semibold leading-tight text-white">
                  {project.title}
                </h3>

                <p className="mt-3 leading-7 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.03] px-4 py-3 font-mono text-sm text-cyan-300">
                  {project.metric}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap items-center gap-5 pt-7">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-zinc-400 transition hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.presentation && (
                    <a
                      href={project.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Presentation ↗
                    </a>
                  )}

                  {project.visualization && (
                    <a
                      href={project.visualization}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
                    >
                      Visualizations ↗
                    </a>
                  )}

                  {!project.github &&
                    !project.live &&
                    !project.presentation &&
                    !project.visualization && (
                      <span className="text-sm text-zinc-600">
                        Ongoing research
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
