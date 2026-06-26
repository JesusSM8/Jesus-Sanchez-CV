export default function Footer() {
  return (
    <footer className="py-16 bg-neutral-900 text-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <p className="text-2xl font-extrabold tracking-tight mb-2">
              Let's work together.
            </p>
            <a
              href="mailto:hi@jesus-sanchez.com"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              hi@jesus-sanchez.com
            </a>
          </div>

          <div className="flex items-center gap-6 text-sm text-neutral-400">
            <a
              href="https://linkedin.com/in/jes8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://behance.net/jes8"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Behance
            </a>
            <a
              href="/Jesus_Sanchez_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 text-neutral-600 text-xs">
          © {new Date().getFullYear()} Jesús Sánchez
        </div>
      </div>
    </footer>
  );
}
