export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-3xl mx-auto text-center">
      <p className="text-[#38BDF8] text-sm tracking-[0.3em] uppercase mb-2">Contact</p>
      <h2 className="text-3xl font-bold text-white mb-6">Get In Touch</h2>
      <p className="text-[#94A3B8] text-lg leading-relaxed mb-12">
        I'm currently open to new opportunities. Whether you have a question, 
        a project in mind, or just want to connect - my inbox is always open.
      </p>

      <div className="grid md:grid-cols-3 gap-4 mb-12">
  {[
    { label: "Email", value: "muznimaznavi00@gmail.com", href: "mailto:muznimaznavi00@gmail.com" },
    { label: "GitHub", value: "github.com/MZ-MUZNI", href: "https://github.com/MZ-MUZNI" },
    { label: "Location", value: "Colombo, Sri Lanka", href: null },
  ].map((item) => (
    <div
      key={item.label}
      className="bg-[#111827] border border-[#1E293B] rounded-xl p-8 hover:border-[#38BDF8]/40 transition-colors duration-300 flex flex-col items-center justify-center min-h-[120px]"
    >
      <p className="text-[#64748B] text-xs uppercase tracking-widest mb-3">{item.label}</p>
      {item.href ? (
        <a
          href={item.href}
          target="_blank"
          rel="noreferrer"
          className="text-[#38BDF8] text-sm hover:underline whitespace-nowrap"
        >
          {item.value}
        </a>
      ) : (
        <p className="text-[#94A3B8] text-sm whitespace-nowrap">{item.value}</p>
      )}
    </div>
  ))}
</div>

      <a
        href="mailto:muznimaznavi00@gmail.com"
        className="inline-block px-10 py-4 bg-[#38BDF8] text-[#0A0F1E] font-bold rounded-lg hover:opacity-90 transition-opacity duration-200 text-lg"
      >
        Say Hello
      </a>
    </section>
  );
}