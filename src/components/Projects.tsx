import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <Link
              key={p.id}
              to={`/project/${p.id}`}
              className={`group rounded-2xl p-7 border transition-all duration-200 hover:shadow-lg hover:-translate-y-1 ${
                p.highlight
                  ? "border-blue-100 bg-gradient-to-br from-blue-50/60 to-white"
                  : "border-neutral-100 bg-neutral-50/60 hover:bg-white"
              }`}
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 group-hover:text-blue-800 transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-medium">
                    {p.company} · {p.period}
                  </p>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {p.highlight && (
                    <span
                      className="text-xs font-semibold px-2.5 py-1 rounded-full text-white"
                      style={{ backgroundColor: "#1E3A8A" }}
                    >
                      Featured
                    </span>
                  )}
                  <ArrowUpRight
                    size={18}
                    className="text-neutral-300 group-hover:text-blue-700 transition-colors"
                  />
                </div>
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
