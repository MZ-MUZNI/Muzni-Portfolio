export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="text-center max-w-3xl relative z-10">
        <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-6">
          Software Engineer
        </p>
        <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
          Muzni <span className="text-[#38BDF8]">Maznavi</span>
        </h1>
        <p className="text-[#64748B] text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Building production-grade systems at enterprise scale.
          Researching at the intersection of NLP and mental health.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#38BDF8] text-[#0A0F1E] font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-[#38BDF8] text-[#38BDF8] rounded-lg hover:bg-[#38BDF8]/10 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B]">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-[#64748B] to-transparent" />
        </div>
      </div>
    </section>
  );
}