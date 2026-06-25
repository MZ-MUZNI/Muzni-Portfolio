import { projects } from "../data/projects";

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">Work</p>
      <h2 className="text-3xl font-bold text-white mb-16">Projects</h2>

      {/* Featured Projects */}
      <div className="space-y-8 mb-16">
        {featured.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111827] border border-[#1E293B] rounded-xl p-8 hover:border-[#38BDF8]/40 transition-all duration-300 relative overflow-hidden"
          >
            {/* Gradient accent on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#38BDF8]/5 to-[#818CF8]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

            <div className="relative z-10">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <span className="text-[#38BDF8] text-xs tracking-widest uppercase mb-2 block">
                    Featured Project
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-1">{project.title}</h3>
                  <p className="text-[#818CF8] text-sm mb-4">{project.subtitle}</p>
                </div>
                <div className="flex gap-3 mt-2 md:mt-0">
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm border border-[#1E293B] px-3 py-1 rounded-lg hover:border-[#38BDF8]/40"
                    >
                      Live Demo ↗
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm border border-[#1E293B] px-3 py-1 rounded-lg hover:border-[#38BDF8]/40"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>

              <p className="text-[#94A3B8] leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tech.map(tech => (
                  <span
                    key={tech}
                    className="text-[#38BDF8] text-xs border border-[#38BDF8]/30 bg-[#38BDF8]/10 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Other Projects Grid */}
      <h3 className="text-white font-semibold text-lg mb-8 text-center">Other Projects</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {others.map((project, index) => (
          <div
            key={index}
            className="group bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#818CF8]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <span className="text-[#38BDF8] text-2xl">⬡</span>
                <div className="flex gap-2">
                  {project.github && project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#64748B] hover:text-[#38BDF8] transition-colors duration-200 text-sm"
                    >
                      GitHub ↗
                    </a>
                  )}
                </div>
              </div>
              <h3 className="text-white font-bold mb-1">{project.title}</h3>
              <p className="text-[#818CF8] text-xs mb-3">{project.subtitle}</p>
              <p className="text-[#64748B] text-sm leading-relaxed">{project.description}</p>
            </div>

            <div className="flex flex-wrap gap-1 mt-4">
              {project.tech.map(tech => (
                <span key={tech} className="text-[#64748B] text-xs">
                  {tech}{" "}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}