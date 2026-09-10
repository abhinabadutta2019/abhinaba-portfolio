const education = [
  {
    school: "University of Palermo",
    degree: "MSc — Data, Algorithms and Machine Intelligence",
    period: "2024 – Present",
    location: "Palermo, Italy",
    details: [
      "Big Data",
      "Artificial Intelligence & Deep Learning",
      "Algorithms",
      "Knowledge Representation",
      "Machine Learning",
    ],
  },
  {
    school: "MAKAUT",
    degree: "Bachelor of Technology (B.Tech)",
    period: "2017 – 2020",
    location: "India",
    details: [],
  },
];

export default function Education() {
  return (
    <section
      id="education"
      className="border-t border-white/10 bg-[#080c12] py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">05. Education</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Academic background.
        </h2>

        <div className="mt-12 space-y-6">
          {education.map((item) => (
            <article
              key={item.school}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-cyan-400/30 sm:p-8"
            >
              <div className="flex flex-col justify-between gap-4 md:flex-row">
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {item.degree}
                  </h3>

                  <p className="mt-1 text-cyan-400">{item.school}</p>
                </div>

                <div className="text-sm text-zinc-500 md:text-right">
                  <p>{item.period}</p>
                  <p className="mt-1">{item.location}</p>
                </div>
              </div>

              {item.details.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.details.map((detail) => (
                    <span
                      key={detail}
                      className="rounded-md border border-white/10 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {detail}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
