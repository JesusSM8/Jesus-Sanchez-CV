import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#1E3A8A" }}>
            Work
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900">
            What I've been working on
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <article
              key={p.id}
              className={`rounded-2xl p-7 border transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 ${
                p.highlight
                  ? "border-blue-100 bg-blue-50/40"
                  : "border-neutral-100 bg-neutral-50/60"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900">{p.title}</h3>
                  <p className="text-sm text-neutral-500 font-medium">
                    {p.company} · {p.period}
                  </p>
                </div>
                {p.highlight && (
                  <span
                    className="shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                    style={{ backgroundColor: "#1E3A8A" }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {p.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-white border border-neutral-200 text-neutral-600"
                  >
                    {tag}
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
