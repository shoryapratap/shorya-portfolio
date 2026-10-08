import React from "react";

export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 pt-8 pb-4 flex items-center justify-between bg-transparent border-none text-[#b5b3ad] font-sans relative z-50">
      {/* Developer Name on Left */}
      <a
        href="#hero"
        className="font-gued text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-[#D2FF2A] transition-colors"
      >
        Shorya Pratap Rathore
      </a>

      {/* Navigation Links (Center) */}
      <div className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider uppercase text-[#a3a3a3]">
        <a href="#hero" className="hover:text-white transition-colors">
          01 // About
        </a>
        <a href="#metrics" className="hover:text-white transition-colors">
          02 // Stats
        </a>
        <a href="#projects" className="hover:text-white transition-colors">
          03 // Work
        </a>
        <a href="#skills" className="hover:text-white transition-colors">
          04 // Stack
        </a>
      </div>

      {/* Download Resume Button on Right */}
      <a
        href="/resume.pdf"
        download
        className="px-5 py-2.5 bg-transparent border border-white text-white font-mono text-xs uppercase tracking-wider hover:bg-white hover:text-black transition-all duration-200 rounded-full"
      >
        Download Resume
      </a>
    </nav>
  );
}
