import React from "react";

export interface ProjectCaseStudyProps {
  title: string;
  subtitle: string;
  mediaType: "console" | "web";
  mediaPlaceholder?: string;
  githubUrl?: string;
  liveUrl?: string;
  stack: string[];
  problem: string;
  architecture: string;
  challenges: string;
}

export default function ProjectCaseStudy({
  title,
  subtitle,
  mediaType,
  mediaPlaceholder,
  githubUrl,
  liveUrl,
  stack,
  problem,
  architecture,
  challenges,
}: ProjectCaseStudyProps) {
  return (
    <article className="w-full border border-[#444340] bg-[#1a1918]/60 p-6 lg:p-8 rounded-2xl flex flex-col space-y-8">
      {/* Header & Stack Pills */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[#444340]/60 pb-6">
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{title}</h3>
          <p className="text-sm text-[#b5b3ad]">{subtitle}</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {stack.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-mono border border-[#444340] bg-[#121211] text-[#D2FF2A] rounded-full"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Media Placeholder */}
      {mediaType === "console" ? (
        <div className="w-full rounded-xl border border-[#444340] bg-[#0c0c0b] font-mono text-xs text-green-400 p-4 overflow-x-auto">
          <div className="flex items-center gap-2 border-b border-[#333330] pb-3 mb-3 text-[#a3a3a3]">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
            <span className="text-[10px] ml-2 text-[#a3a3a3]">bash - java -jar MultithreadedChat.jar</span>
          </div>
          <pre className="space-y-1">
            <code>[Server] Listening on 0.0.0.0:8080...</code>
            <code>[Server] Worker Thread #1 spawned for Client [192.168.1.15:54210]</code>
            <code>[Server] Worker Thread #2 spawned for Client [192.168.1.18:54212]</code>
            <code>[Client #1] USER_AUTH_SUCCESS: Alice</code>
            <code>[Client #2] USER_AUTH_SUCCESS: Bob</code>
            <code className="text-white">[Broadcast]: Alice &gt; Hello server room!</code>
            <code>[SQLite DB] Executed INSERT INTO messages (sender_id, content) VALUES (&apos;Alice&apos;, &apos;...&apos;)</code>
          </pre>
        </div>
      ) : (
        <div className="w-full rounded-xl border border-[#444340] bg-[#121211] p-6 flex flex-col items-center justify-center min-h-[260px] text-center space-y-4">
          <div className="w-16 h-16 rounded-full border border-[#D2FF2A]/40 bg-[#D2FF2A]/10 flex items-center justify-center text-[#D2FF2A]">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-white">Plant Guard UI Dashboard Render</h4>
            <p className="text-xs text-[#a3a3a3] max-w-md">AI-Powered Plant Health Diagnostics & Real-time Disease Classification UI</p>
          </div>
        </div>
      )}

      {/* Engineering Report Structured Sections */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2 font-sans text-xs">
        <div className="border-t border-[#444340]/40 pt-4 space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#D2FF2A] block">THE PROBLEM</span>
          <p className="text-[#b5b3ad] leading-relaxed">{problem}</p>
        </div>
        <div className="border-t border-[#444340]/40 pt-4 space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#7C3AED] block">ARCHITECTURE & DEVOPS</span>
          <p className="text-[#b5b3ad] leading-relaxed">{architecture}</p>
        </div>
        <div className="border-t border-[#444340]/40 pt-4 space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#F43F5E] block">CHALLENGES & TRADEOFFS</span>
          <p className="text-[#b5b3ad] leading-relaxed">{challenges}</p>
        </div>
      </div>

      {/* Action Links */}
      <div className="flex items-center gap-4 pt-4 border-t border-[#444340]/40 font-mono text-xs">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#444340] text-white hover:border-[#D2FF2A] hover:text-[#D2FF2A] transition-colors rounded-lg flex items-center gap-2"
          >
            <span>GitHub Repository</span>
            <span>→</span>
          </a>
        )}
        {liveUrl && (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 border border-[#D2FF2A] text-[#D2FF2A] hover:bg-[#D2FF2A] hover:text-[#1c1b19] transition-colors rounded-lg flex items-center gap-2"
          >
            <span>Live Demo</span>
            <span>→</span>
          </a>
        )}
      </div>
    </article>
  );
}
