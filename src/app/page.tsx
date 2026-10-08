import Image from "next/image";
import Navbar from "@/components/Navbar";
import GitHubModule from "@/components/GitHubModule";
import LeetCodeModule from "@/components/LeetCodeModule";
import TechStackModule from "@/components/TechStackModule";
import ProjectCaseStudy from "@/components/ProjectCaseStudy";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen text-[#b5b3ad] font-sans selection:bg-[#D2FF2A] selection:text-[#1c1b19]">
      {/* TOP TRANSPARENT BORDERLESS NAVBAR */}
      <Navbar />

      {/* 01. HERO SECTION */}
      <section
        id="hero"
        className="min-h-screen w-full max-w-7xl mx-auto px-6 py-6 lg:py-12 flex flex-col justify-between"
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

      {/* 02. DATA & SKILLS GRID COMPONENT */}
      <section
        id="metrics"
        className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-[#444340] space-y-12"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3]">
          02 // DATA & SKILLS GRID
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <GitHubModule />
          <LeetCodeModule />
        </div>

        <TechStackModule />
      </section>

      {/* 03. PROJECT CASE STUDIES COMPONENT */}
      <section
        id="projects"
        className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-[#444340] space-y-12"
      >
        <div className="text-xs tracking-widest uppercase font-mono text-[#a3a3a3]">
          03 // PROJECT CASE STUDIES
        </div>

        <div className="flex flex-col space-y-12">
          {/* Project 1: Multithreaded Java Chat */}
          <ProjectCaseStudy
            title="Multithreaded Java Chat"
            subtitle="High-concurrency TCP socket chat application built strictly for command-line interface execution."
            mediaType="console"
            githubUrl="https://github.com/shoryapratap/multithreaded-java-chat"
            stack={["Java", "SQLite", "Multithreading"]}
            problem="Existing basic socket chat templates fail under concurrent connections due to blocking thread bottlenecks and unmanaged state synchronization across client sessions."
            architecture="Engineered a multithreaded TCP server using Java Socket API paired with a thread pool executor. Implemented thread-safe queue channels and SQLite persistence for real-time room broadcasting and message logging."
            challenges="Managing deadlock risk during concurrent broadcast locks and ensuring atomic database writes across worker threads without blocking client heartbeat signals."
          />

          {/* Project 2: Plant Guard */}
          <ProjectCaseStudy
            title="Plant Guard"
            subtitle="AI-powered plant disease diagnosis platform with real-time botanical analysis and remediation guidance."
            mediaType="web"
            githubUrl="https://github.com/shoryapratap/plant-guard"
            liveUrl="https://plantguard.dev"
            stack={["React 19", "Tailwind CSS", "FastAPI", "Google Gemini SDK"]}
            problem="Agricultural disease identification is traditionally slow, leaving small-scale farmers without instant, actionable diagnostic reports or treatment protocols."
            architecture="Constructed a React 19 frontend communicating with a FastAPI backend. Integrated the Google Gemini SDK for multimodal vision analysis, generating structured treatment JSON payloads in under 800ms."
            challenges="Optimizing high-resolution image compression before payload transmission and implementing strict schema validation on AI model outputs to prevent hallucinated diagnostic data."
          />
        </div>
      </section>

      {/* 04. FOOTER & CONTACT COMPONENT */}
      <Footer />
    </main>
  );
}
