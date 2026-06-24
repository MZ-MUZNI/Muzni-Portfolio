export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">About</p>
      <h2 className="text-3xl font-bold text-white mb-12">Who I Am</h2>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6 text-justify">
            I'm a Software Engineer based in Sri Lanka with 4+ years of progressive 
            experience building and maintaining enterprise-scale financial platforms. 
            Currently working at HCL Technologies on a large-scale credit risk and 
            counterparty management system.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed mb-6 text-justify">
            Beyond enterprise development, I research at the intersection of NLP and 
            mental health - building systems that understand Singlish social media 
            content to support digital wellness.
          </p>
          <p className="text-[#94A3B8] text-lg leading-relaxed text-justify">
            Currently advancing my knowledge through Machine Learning & Artificial Intelligence, 
            bridging software engineering with machine learning.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {[
            { label: "Years Experience", value: "4+" },
            { label: "Production Releases", value: "10+" },
            { label: "Projects Built", value: "8+" },
            { label: "Research Papers", value: "1" },
          ].map(stat => (
            <div key={stat.label} className="bg-[#111827] border border-[#1E293B] rounded-xl p-6 text-center">
              <p className="text-4xl font-bold text-[#38BDF8] mb-2">{stat.value}</p>
              <p className="text-[#64748B] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}