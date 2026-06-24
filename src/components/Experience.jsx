import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">Career</p>
      <h2 className="text-3xl font-bold text-white mb-16">Professional Experience</h2>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-[#38BDF8] via-[#818CF8] to-transparent ml-[7px]" />

        <div className="space-y-12">
          {experience.map((job, index) => (
            <div key={index} className="relative pl-12">
              {/* Dot */}
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full border-2 border-[#38BDF8] bg-[#0A0F1E]" />

              <div className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#38BDF8]/40 transition-colors duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-white font-bold text-lg">{job.role}</h3>
                    <p className="text-[#38BDF8] text-sm">{job.company} · {job.location}</p>
                  </div>
                  <span className="text-[#64748B] text-sm mt-2 md:mt-0 bg-[#0A0F1E] px-3 py-1 rounded-full border border-[#1E293B]">
                    {job.period}
                  </span>
                </div>

                <ul className="space-y-2">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="text-[#94A3B8] text-sm leading-relaxed flex gap-3">
                      <span className="text-[#38BDF8] mt-1 shrink-0">▹</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Tech stack tag at bottom */}
        <div className="relative pl-12 mt-8">
          <div className="absolute left-0 top-3 w-4 h-4 rounded-full border-2 border-[#818CF8] bg-[#0A0F1E]" />
          <div className="flex flex-wrap gap-2">
            {["C#", ".NET", "ASP.NET WebForms", "ASP.NET Web API", "MSSQL", "T-SQL"].map(tech => (
              <span key={tech} className="text-[#818CF8] text-xs border border-[#818CF8]/30 bg-[#818CF8]/10 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}