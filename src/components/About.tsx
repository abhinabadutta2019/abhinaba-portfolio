export default function About() {
  return (
    <section id="about" className="border-t border-white/10 bg-[#080c12] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-3 font-mono text-sm text-cyan-400">01. About</p>

        <h2 className="text-3xl font-bold text-white sm:text-4xl">
          Building practical data and AI systems.
        </h2>

        <div className="mt-8 max-w-3xl space-y-5 text-base leading-8 text-zinc-400">
          <p>
            My background combines software engineering, data engineering,
            machine learning, NLP, information retrieval, LLM-based systems, and
            knowledge graphs.
          </p>

          <p>
            I am currently pursuing an MSc in Data, Algorithms and Machine
            Intelligence at the University of Palermo, Italy.
          </p>

          <p>
            I am particularly interested in developing reliable and practical
            systems that connect data, software, and artificial intelligence.
          </p>
        </div>
      </div>
    </section>
  );
}
