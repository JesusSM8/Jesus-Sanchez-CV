export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-100">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#top"
          className="font-bold text-lg text-navy-700 tracking-tight"
          style={{ color: "#1E3A8A" }}
        >
          JS
        </a>
        <div className="flex items-center gap-6 text-sm font-medium text-neutral-500">
          <a href="#projects" className="hover:text-neutral-900 transition-colors">
            Projects
          </a>
          <a href="#about" className="hover:text-neutral-900 transition-colors">
            About
          </a>
          <a
            href="/Jesus_Sanchez_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-md text-white text-sm font-medium transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#1E3A8A" }}
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
