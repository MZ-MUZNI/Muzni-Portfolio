import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = ["About", "Experience", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? "bg-[#0A0F1E]/95 backdrop-blur-sm shadow-lg" : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="text-[#38BDF8] font-bold text-xl tracking-wider">MM</span>
        <div className="hidden md:flex gap-8">
          {links.map(link => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-[#94A3B8] hover:text-[#38BDF8] transition-colors duration-200 text-sm tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>
        <a
          href="/cv.pdf"
          download="Muzni_Maznavi_CV.pdf"
          className="border border-[#38BDF8] text-[#38BDF8] px-4 py-2 rounded text-sm hover:bg-[#38BDF8]/10 transition-colors duration-200"
        >
          Download CV
        </a>
      </div>
    </nav>
  );
}