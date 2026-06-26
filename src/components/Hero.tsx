export default function Hero() {
  return (
    <section
      id="top"
      className="min-h-screen flex items-center pt-14"
      style={{ background: "linear-gradient(160deg, #EEF2FF 0%, #ffffff 50%)" }}
    >
      <div className="max-w-5xl mx-auto px-6 py-24 w-full">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest mb-6" style={{ color: "#1E3A8A" }}>
            Product Designer · Barcelona
          </p>
          <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-neutral-900 leading-[1.1] mb-6">
            Hi, I'm Jesús.
            <br />
            <span style={{ color: "#1E3A8A" }}>I make complex things</span>
            <br />
            feel simple.
          </h1>
          <p className="text-xl text-neutral-500 leading-relaxed mb-10 max-w-lg">
            Currently designing at Rovio — yes, the Angry Birds people. I get into the data,
            talk to users, and ship things that actually work.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg font-semibold text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#1E3A8A" }}
            >
              View projects
            </a>
            <a
              href="mailto:hi@jesus-sanchez.com"
              className="px-6 py-3 rounded-lg font-semibold text-neutral-700 bg-white border border-neutral-200 hover:border-neutral-400 transition-colors"
            >
              Say hi
            </a>
          </div>

          <blockquote className="mt-16 border-l-2 pl-4 italic text-neutral-400 text-base" style={{ borderColor: "#1E3A8A" }}>
            "I consider a job well done when it ends with a smile."
          </blockquote>
        </div>
      </div>
    </section>
  );
}
