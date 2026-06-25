import profileImg from "../assets/profile.jpg";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#38BDF8]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#818CF8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="flex flex-col md:flex-row items-center gap-16 max-w-5xl relative z-10">

        {/* Text side */}
        <div className="text-center md:text-left">
          <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-6">
            Software Engineer
          </p>
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Muzni <span className="text-[#38BDF8]">Maznavi</span>
          </h1>
          <p className="text-[#64748B] text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Building production-grade systems at enterprise scale.
            Researching at the intersection of NLP and mental health.
          </p>
          <div className="flex gap-4 flex-wrap md:justify-start justify-center">
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
        </div>

        {/* Image side */}
        <div className="shrink-0 relative">
          {/* Outer glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#38BDF8] to-[#818CF8] blur-md opacity-40 scale-105" />
          {/* Gradient border ring */}
          <div className="relative w-64 h-64 rounded-full p-[3px] bg-gradient-to-br from-[#38BDF8] to-[#818CF8]">
            <div className="w-full h-full rounded-full overflow-hidden bg-[#111827]">
              <img
                src={profileImg}
                alt="Muzni Maznavi"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#64748B]">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-[#64748B] to-transparent" />
      </div>
    </section>
  );
}