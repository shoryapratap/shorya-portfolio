import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen text-[#b5b3ad] font-sans selection:bg-[#D2FF2A] selection:text-[#1c1b19]">
      {/* 01. HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen w-full max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col justify-between"
      >
        {/* Header bar / Top label */}
        <div className="flex items-center justify-between text-xs tracking-widest uppercase font-mono text-[#a3a3a3] pb-8 border-b border-[#444340]/20">
          <span>01 // HERO</span>
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#D2FF2A] animate-pulse"></span>
            AVAILABLE FOR OPPORTUNITIES
          </span>
        </div>

        {/* Asymmetrical Split Grid with MS Paint Architectural Stepped Borders */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end pt-12 lg:pt-16 pb-0">
          {/* Left Column: Monolithic Typography & Content (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-8">
            <div className="flex items-center gap-4 relative">
              {/* Left Vertical Annotation */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#a3a3a3] [writing-mode:vertical-lr] rotate-180 select-none">
                SOFTWARE ENGINEER
              </span>

              {/* Main Title in Gued Font with Outlined Middle Name */}
              <h1 className="font-gued text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight text-[#ffffff] leading-[0.92]">
                Shorya <br />
                <span className="text-transparent [-webkit-text-stroke:1px_#ffffff] opacity-90">Pratap</span> <br />
                Rathore
              </h1>

              {/* Right Vertical Annotation */}
              <span className="text-[10px] font-mono tracking-widest uppercase text-[#a3a3a3] [writing-mode:vertical-lr] select-none">
                FULL STACK DEVELOPER
              </span>
            </div>

            {/* Stepped Border Box for Bio & Buttons */}
            <div className="w-full flex flex-col items-start space-y-8 pl-6 lg:pl-8 pb-8 border-l border-b border-[#555450] rounded-bl-3xl">
              <p className="text-base sm:text-lg text-[#b5b3ad] max-w-xl font-normal leading-relaxed">
                Full-Stack Developer & Software Engineer specializing in building high-performance web applications, scalable system architectures, and refined digital experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 bg-transparent border border-[#ffffff] text-[#ffffff] font-medium text-sm tracking-wider uppercase hover:bg-[#ffffff] hover:text-[#0a0a0a] transition-all duration-200"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="px-8 py-4 border border-[#444340] text-[#b5b3ad] font-medium text-sm tracking-wider uppercase hover:border-[#D2FF2A] hover:text-[#D2FF2A] transition-all duration-200"
                >
                  View Case Studies
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Portrait Container with Right & Bottom Stepped Border */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end items-end">
            <div className="relative w-full max-w-md border-r border-b border-[#555450] p-0 rounded-br-3xl group">
              <div className="relative w-full aspect-[3/4] overflow-hidden rounded-br-3xl">
                <Image
                  src="/profile.png"
                  alt="Shorya Pratap Rathore"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between text-xs font-mono text-[#a3a3a3] pt-8 pb-4">
          <span>BASED IN INDIA</span>
          <span>SCROLL DOWN ↓</span>
        </div>
      </section>

      {/* 02. LIVE METRICS BENTO GRID */}
      <section
        id="metrics"
        className="w-full max-w-7xl mx-auto px-6 py-24 border-b border-[#444340]/40"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3] mb-8">
          02 // METRICS & STATS
        </div>
        {/* Metrics Grid Container */}
        <div className="py-12"></div>
      </section>

      {/* 03. PROJECT CASE STUDIES */}
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto px-6 py-24 border-b border-[#444340]/40"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3] mb-8">
          03 // CASE STUDIES
        </div>
        {/* Projects Container */}
        <div className="py-12"></div>
      </section>

      {/* 04. TECHNICAL SKILLS & STACK */}
      <section
        id="skills"
        className="w-full max-w-7xl mx-auto px-6 py-24 border-b border-[#444340]/40"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3] mb-8">
          04 // TECH STACK
        </div>
        {/* Skills Container */}
        <div className="py-12"></div>
      </section>

      {/* 05. FOOTER & CONTACT */}
      <footer
        id="contact"
        className="w-full max-w-7xl mx-auto px-6 py-16 flex flex-col items-center justify-center text-center"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3] mb-4">
          05 // CONTACT
        </div>
        {/* Footer Container */}
      </footer>
    </main>
  );
}
