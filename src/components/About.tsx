import { experience, education, skills, tools } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: "#1E3A8A" }}>
            About
          </p>
          <h2 className="text-4xl font-extrabold tracking-tight text-neutral-900 mb-6">
            A bit about me
          </h2>
          <p className="text-xl text-neutral-500 leading-relaxed max-w-2xl">
            Based in Barcelona. I've been designing digital products since 2015 — from freelance
            illustration to mobile games with millions of players. My background goes from
            graphic arts to 3D environments to product strategy. I like work that's complex
            to solve and simple to use.
          </p>
          <p className="mt-3 text-base text-neutral-400">
            Spanish & Basque native · English fluent
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              Experience
            </h3>
            <div className="space-y-6">
              {experience.map((e, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: "#1E3A8A" }}
                  />
                  <div>
                    <p className="font-semibold text-neutral-900">{e.role}</p>
                    <p className="text-neutral-600 text-sm">
                      {e.company} — {e.product}
                    </p>
                    <p className="text-neutral-400 text-xs mt-0.5">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              Education
            </h3>
            <div className="space-y-5">
              {education.map((e, i) => (
                <div key={i} className="flex gap-4">
                  <div
                    className="mt-1.5 w-2 h-2 rounded-full shrink-0 bg-neutral-300"
                  />
                  <div>
                    <p className="font-semibold text-neutral-900 text-sm">{e.title}</p>
                    <p className="text-neutral-500 text-sm">{e.institution}</p>
                    <p className="text-neutral-400 text-xs mt-0.5">{e.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills + Tools */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              Skills
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((s) => (
                <span
                  key={s}
                  className="text-sm font-medium px-3 py-1.5 rounded-lg border border-neutral-200 bg-white text-neutral-700"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-neutral-400 mb-6">
              Tools
            </h3>
            <div className="space-y-3">
              {tools.map((t) => (
                <div key={t.category} className="flex gap-3 text-sm">
                  <span className="font-semibold text-neutral-700 w-36 shrink-0">{t.category}</span>
                  <span className="text-neutral-500">{t.items}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
