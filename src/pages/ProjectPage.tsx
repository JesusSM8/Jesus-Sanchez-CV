import { useParams, Link } from "react-router-dom";
import { projects } from "../data/content";
import { ArrowLeft } from "lucide-react";

export default function ProjectPage() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-neutral-400 mb-4">Project not found.</p>
          <Link to="/" className="text-sm font-medium underline">
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  const d = project.detail;

  return (
    <div className="min-h-screen bg-white">
      {/* Top nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <Link
            to="/"
            className="font-bold text-lg tracking-tight"
            style={{ color: "#1E3A8A" }}
          >
            JS
          </Link>
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="pt-14"
        style={{ background: "linear-gradient(160deg, #EEF2FF 0%, #ffffff 60%)" }}
      >
        <div className="max-w-5xl mx-auto px-6 py-20">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-semibold px-3 py-1 rounded-full border border-blue-200 text-blue-700 bg-white"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900 mb-3">
            {project.title}
          </h1>
          <p className="text-lg text-neutral-500 font-medium mb-1">
            {d?.role ?? "Designer"} · {project.company}
          </p>
          <p className="text-sm text-neutral-400">{project.period}</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16 space-y-16">
        {d ? (
          <>
            {/* Intro */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-4">
                Overview
              </h2>
              <p className="text-xl text-neutral-700 leading-relaxed">{d.intro}</p>
            </section>

            {/* Responsibilities */}
            <section>
              <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
                What I did
              </h2>
              <ul className="space-y-3">
                {d.responsibilities.map((r, i) => (
                  <li key={i} className="flex gap-3 text-neutral-700">
                    <span
                      className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: "#1E3A8A" }}
                    />
                    <span className="leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Highlights */}
            {d.highlights && d.highlights.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
                  Highlights
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {d.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="rounded-xl p-5 border border-blue-100 bg-blue-50/40"
                    >
                      <p className="text-neutral-700 text-sm leading-relaxed">{h}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Screens */}
            {d.screens && d.screens.length > 0 && (
              <section>
                <h2 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
                  Screens designed
                </h2>
                <div className="flex flex-wrap gap-2">
                  {d.screens.map((s, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 text-neutral-600 border border-neutral-200"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <p className="text-neutral-500 text-lg">
            Case study coming soon. <a href="mailto:hi@jesus-sanchez.com" className="underline">Drop me an email</a> if you want to know more about this project.
          </p>
        )}

        {/* Nav to next project */}
        <div className="pt-8 border-t border-neutral-100 flex justify-between items-center">
          <Link
            to="/#projects"
            className="flex items-center gap-2 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors"
          >
            <ArrowLeft size={16} />
            All projects
          </Link>
          <a
            href="mailto:hi@jesus-sanchez.com"
            className="text-sm font-medium px-4 py-2 rounded-lg text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1E3A8A" }}
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  );
}
