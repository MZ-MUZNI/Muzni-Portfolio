export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1E293B]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[#38BDF8] font-bold text-lg tracking-wider">MM</span>
        <p className="text-[#64748B] text-sm">
          © 2026 Muzni Maznavi. Built with React & Tailwind CSS.
        </p>
        <div className="flex gap-6">
          <a href="https://github.com/MZ-MUZNI" target="_blank" rel="noreferrer"
            className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm">
            GitHub
          </a>
          <a href="https://linkedin.com/in/" target="_blank" rel="noreferrer"
            className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm">
            LinkedIn
          </a>
          <a href="mailto:muznimaznavi00@gmail.com"
            className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}