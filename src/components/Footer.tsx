export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full max-w-7xl mx-auto px-6 py-20 border-t border-[#444340] flex flex-col items-center justify-center text-center space-y-8"
    >
      <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3]">
        05 // CONTACT & DIRECT LINKS
      </div>

      <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight max-w-2xl">
        Let&apos;s Build Something Scalable Together
      </h2>

      {/* Exactly Three Clickable Elements */}
      <div className="flex flex-wrap items-center justify-center gap-6 pt-4 font-mono text-sm">
        {/* 1. Email link (mailto: action) */}
        <a
          href="mailto:shoryaprataprathore28@gmail.com"
          className="px-6 py-3.5 border border-[#ffffff] text-white hover:bg-white hover:text-black transition-all rounded-full flex items-center gap-2"
        >
          <span>Email</span>
          <span className="text-xs">✉</span>
        </a>

        {/* 2. LinkedIn URL */}
        <a
          href="https://www.linkedin.com/in/shorya-pratap-rathore-720519352"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 border border-[#444340] text-[#b5b3ad] hover:border-[#38BDF8] hover:text-[#38BDF8] transition-all rounded-full flex items-center gap-2"
        >
          <span>LinkedIn</span>
          <span className="text-xs">↗</span>
        </a>

        {/* 3. GitHub profile URL */}
        <a
          href="https://github.com/shoryapratap"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 border border-[#444340] text-[#b5b3ad] hover:border-[#D2FF2A] hover:text-[#D2FF2A] transition-all rounded-full flex items-center gap-2"
        >
          <span>GitHub</span>
          <span className="text-xs">↗</span>
        </a>
      </div>

      <div className="pt-8 text-xs font-mono text-[#a3a3a3]">
        © 2026 Shorya Pratap Rathore. All rights reserved.
      </div>
    </footer>
  );
}
