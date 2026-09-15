type PreviewType = "wind" | "brain" | "thesis" | "healthcare" | "restaurant";

type Project = {
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metric: string;
  github: string | null;
  live: string | null;
  presentation: string | null;
  visualization: string | null;
  status: string | null;
  preview: PreviewType;
};

const projects: Project[] = [
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
    status: null,
    preview: "wind",
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
    status: null,
    preview: "brain",
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
    status: "In Progress",
    preview: "thesis",
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
    status: "Academic Project",
    preview: "healthcare",
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
    status: null,
    preview: "restaurant",
  },
];

function ProjectPreview({ type }: { type: PreviewType }) {
  if (type === "wind") {
    return (
      <div className="flex h-52 flex-col items-center justify-center bg-[#080d16] px-6 text-center">
        <p className="font-mono text-[11px] text-zinc-500">
          Ask a maintenance question
        </p>

        <div className="mt-3 w-full max-w-sm rounded-lg border border-white/10 bg-[#0d1420] px-5 py-3 text-sm text-zinc-200">
          How do I maintain the battery?
        </div>

        <div className="mt-4 flex items-center gap-2 font-mono text-[10px] text-cyan-400/70">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          offline-engine: active
        </div>
      </div>
    );
  }

  if (type === "brain") {
    return (
      <div className="flex h-52 items-center justify-center bg-[#080d16] px-5">
        <div className="grid w-full max-w-sm grid-cols-3 gap-4 font-mono text-[10px] text-zinc-400">
          <div className="text-center">
            <div className="flex h-20 items-center justify-center rounded-lg border border-white/10 bg-[#111827]">
              MRI
            </div>
            <p className="mt-2">Input FLAIR</p>
          </div>

          <div className="text-center">
            <div className="flex h-20 items-center justify-center rounded-lg border border-pink-400/30 bg-[#111827] text-pink-300">
              GT
            </div>
            <p className="mt-2">Ground Truth</p>
          </div>

          <div className="text-center">
            <div className="flex h-20 items-center justify-center rounded-lg border border-cyan-400/30 bg-[#111827] text-cyan-300">
              U-Net
            </div>
            <p className="mt-2">Prediction</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "thesis") {
    return (
      <div className="flex h-52 items-center justify-center bg-[#080d16] px-5">
        <div className="flex items-center gap-4 font-mono text-[10px]">
          <div className="rounded-lg border border-white/10 bg-[#0d1420] px-3 py-3 text-center">
            <p className="text-cyan-300">Patient Profile</p>
            <p className="mt-1 text-zinc-600">SNOMED CT</p>
          </div>

          <span className="text-cyan-400">→</span>

          <div className="rounded-lg border border-cyan-400/30 bg-[#0d1420] px-3 py-3 text-center">
            <p className="text-white">Knowledge Graph</p>
            <p className="mt-1 text-cyan-300">Criterion Match</p>
          </div>

          <span className="text-cyan-400">→</span>

          <div className="rounded-lg border border-white/10 bg-[#0d1420] px-3 py-3 text-center">
            <p className="text-zinc-300">Clinical Trial</p>
            <p className="mt-1 text-zinc-600">Eligibility</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === "healthcare") {
    return (
      <div className="flex h-52 flex-col items-center justify-center bg-[#080d16] px-6">
        <div className="font-mono text-[10px] text-zinc-400">
          <div className="flex items-center justify-center gap-3">
            <div className="rounded-md border border-cyan-400/30 bg-[#0d1420] px-3 py-2 text-cyan-300">
              Fact_Claims
            </div>

            <span className="text-zinc-600">→</span>

            <div className="rounded-md border border-white/10 bg-[#0d1420] px-3 py-2">
              Dim_Patient
            </div>
          </div>

          <div className="mt-3 flex justify-center gap-3">
            <div className="rounded-md border border-white/10 bg-[#0d1420] px-3 py-2">
              Dim_Diagnosis
            </div>

            <div className="rounded-md border border-white/10 bg-[#0d1420] px-3 py-2">
              Dim_Provider
            </div>
          </div>
        </div>

        <p className="mt-4 font-mono text-[10px] text-zinc-500">
          Fact Schema · Dimensional Model · Analytics
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-52 items-center justify-center bg-[#080d16] px-6">
      <div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0d1420] p-4">
        <div className="flex justify-between font-mono text-[10px]">
          <span className="text-zinc-300">Revenue Forecast</span>
          <span className="text-cyan-300">Model Comparison</span>
        </div>

        <div className="mt-5 space-y-3">
          {[
            ["Linear Reg.", "48%"],
            ["Random Forest", "66%"],
            ["GBT", "82%"],
          ].map(([name, width]) => (
            <div key={name} className="flex items-center gap-3">
              <span className="w-20 font-mono text-[9px] text-zinc-500">
                {name}
              </span>

              <div className="h-2 flex-1 overflow-hidden rounded-full bg-zinc-800">
                <div
                  className="h-full rounded-full bg-cyan-400/70"
                  style={{ width }}
                />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-right font-mono text-[9px] text-zinc-600">
          RMSE · MAPE · R²
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#080c12] py-20 sm:py-24"
    >
      {/* Subtle technical grid */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(30,37,56,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(30,37,56,0.18)_1px,transparent_1px)] bg-[size:48px_48px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="font-mono text-sm text-cyan-400">04. Projects</p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Selected work.
        </h2>

        <p className="mt-3 max-w-2xl leading-7 text-zinc-400">
          Projects across data engineering, AI/ML, NLP, research, and software
          systems.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex min-h-[610px] flex-col overflow-hidden rounded-xl border border-white/10 bg-[#0e1320]/85 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <div className="relative border-b border-white/[0.06]">
                <ProjectPreview type={project.preview} />

                <span className="absolute left-4 top-4 rounded-md border border-white/10 bg-[#080c12]/90 px-2.5 py-1 font-mono text-[10px] text-zinc-500">
                  0{index + 1}
                </span>

                {project.status && (
                  <span className="absolute right-4 top-4 rounded-md border border-cyan-400/30 bg-[#080c12]/90 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300">
                    {project.status}
                  </span>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.12em] text-cyan-400">
                  {project.subtitle}
                </p>

                <h3 className="mt-3 text-xl font-semibold text-white sm:text-2xl">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {project.description}
                </p>

                <div className="mt-5 rounded-lg border border-cyan-400/15 bg-cyan-400/[0.03] px-3.5 py-2.5 font-mono text-xs text-cyan-300">
                  {project.metric}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tech.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-white/10 bg-[#141b2c] px-2.5 py-1.5 font-mono text-[11px] text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-x-5 gap-y-2 border-t border-white/[0.06] pt-5">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-cyan-400 hover:text-cyan-300"
                    >
                      Live Demo ↗
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white"
                    >
                      GitHub ↗
                    </a>
                  )}

                  {project.presentation && (
                    <a
                      href={project.presentation}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white"
                    >
                      Presentation ↗
                    </a>
                  )}

                  {project.visualization && (
                    <a
                      href={project.visualization}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-zinc-400 hover:text-white"
                    >
                      Visualizations ↗
                    </a>
                  )}

                  {!project.live &&
                    !project.github &&
                    !project.presentation &&
                    !project.visualization && (
                      <span className="font-mono text-xs text-zinc-600">
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
