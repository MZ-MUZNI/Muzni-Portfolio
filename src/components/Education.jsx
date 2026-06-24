export default function Education() {
  const education = [
    {
      degree: "BSc (Hons) Computer Science - Second Class Upper",
      institution: "Informatics Institute of Technology, affiliated with University of Westminster, UK",
      period: "2021 - 2026",
      color: "#38BDF8"
    }
  ];

  /* const publications = [
    {
      title: "SENTINEL: Bio-Inspired Early Wildfire Detection Using Mimosa Pudica Electrophysiological Signals",
      venue: "International Conference on AI in Multidisciplinary Applications (AIMDA) 2026",
      type: "Conference Paper"
    }
  ]; */

  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">Background</p>
      <h2 className="text-3xl font-bold text-white mb-16">Education & Research</h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Education */}
        <div>
          <h3 className="text-white font-semibold mb-8 text-lg">Academic Qualifications</h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 hover:border-[#38BDF8]/30 transition-colors duration-300"
              >
                <div
                  className="w-1 h-full rounded-full absolute left-0 top-0"
                  style={{ backgroundColor: edu.color }}
                />
                <span
                  className="text-xs font-semibold px-2 py-1 rounded-full mb-3 inline-block"
                  style={{
                    color: edu.color,
                    backgroundColor: `${edu.color}15`,
                    border: `1px solid ${edu.color}40`
                  }}
                >
                  {edu.period}
                </span>
                <h4 className="text-white font-semibold mb-2 leading-snug">{edu.degree}</h4>
                <p className="text-[#64748B] text-sm">{edu.institution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="text-white font-semibold mb-8 text-lg">Research & Publications</h3>
          <div className="space-y-6">
            {/* {publications.map((pub, index) => (
              <div
                key={index}
                className="bg-[#111827] border border-[#818CF8]/30 rounded-xl p-6 hover:border-[#818CF8]/60 transition-colors duration-300"
              >
                <span className="text-[#818CF8] text-xs font-semibold px-2 py-1 rounded-full bg-[#818CF8]/10 border border-[#818CF8]/30 mb-4 inline-block">
                  {pub.type}
                </span>
                <h4 className="text-white font-semibold mb-3 leading-snug">{pub.title}</h4>
                <p className="text-[#64748B] text-sm">{pub.venue}</p>
              </div>
            ))} */}

            {/* SinMood research note */}
            <div className="bg-[#111827] border border-[#34D399]/30 rounded-xl p-6 hover:border-[#34D399]/60 transition-colors duration-300">
              <span className="text-[#34D399] text-xs font-semibold px-2 py-1 rounded-full bg-[#34D399]/10 border border-[#34D399]/30 mb-4 inline-block">
                Research Project
              </span>
              <h4 className="text-white font-semibold mb-3 leading-snug">
                SinMood: Emotional Distress Detection in Singlish Social Media
              </h4>
              <p className="text-[#64748B] text-sm">
                ML system using CalibratedLinearSVC with XLM-RoBERTa embeddings for multi-class emotion classification. Deployed on HuggingFace Spaces.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}