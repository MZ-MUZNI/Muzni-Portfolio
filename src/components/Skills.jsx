import { skills } from "../data/skills";

const categoryColors = {
  "Languages": "text-[#38BDF8] border-[#38BDF8]/30 bg-[#38BDF8]/10",
  "Web Development": "text-[#34D399] border-[#34D399]/30 bg-[#34D399]/10",
  "Mobile Development": "text-[#F472B6] border-[#F472B6]/30 bg-[#F472B6]/10",
  "Frameworks": "text-[#818CF8] border-[#818CF8]/30 bg-[#818CF8]/10",
  "ML & AI": "text-[#FB923C] border-[#FB923C]/30 bg-[#FB923C]/10",
  "Databases": "text-[#FACC15] border-[#FACC15]/30 bg-[#FACC15]/10",
  "Tools & Platforms": "text-[#94A3B8] border-[#94A3B8]/30 bg-[#94A3B8]/10",
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">Expertise</p>
      <h2 className="text-3xl font-bold text-white mb-16">Technical Skills</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {skills.map((group) => (
          <div
            key={group.category}
            className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#38BDF8]/30 transition-colors duration-300"
          >
            <h3 className="text-white font-semibold mb-4 text-sm tracking-wide uppercase">
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className={`text-xs px-3 py-1 rounded-full border ${categoryColors[group.category] || "text-[#94A3B8] border-[#94A3B8]/30 bg-[#94A3B8]/10"}`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}