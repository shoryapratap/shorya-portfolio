"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TechNode {
  id: string;
  category: string;
  color: string;
  icon: string;
  technologies: {
    name: string;
    level: string;
    spec: string;
    snippet: string;
  }[];
}

export default function TechStackModule() {
  const nodes: TechNode[] = [
    {
      id: "lang",
      category: "01. LANGUAGES",
      color: "#D2FF2A",
      icon: "⚡",
      technologies: [
        { name: "Java", level: "Expert", spec: "JDK 21, JVM Tuning & Multithreaded Concurrency", snippet: "ExecutorService pool = Executors.newFixedThreadPool(12);" },
        { name: "C++", level: "Advanced", spec: "C++20, Memory Pointers, STL & High-Performance DSA", snippet: "std::vector<int> dp(n, 0); // O(N) Space & Time Optimization" },
        { name: "Python", level: "Advanced", spec: "AI Pipelines, AsyncIO & Data Science Processing", snippet: "async def process_tensor(data: Tensor) -> Matrix:" },
      ],
    },
    {
      id: "backend",
      category: "02. BACKEND & DB",
      color: "#7C3AED",
      icon: "⚙️",
      technologies: [
        { name: "FastAPI", level: "Advanced", spec: "Asynchronous REST APIs, Pydantic & OpenAPI", snippet: "@app.post('/v1/predict', response_model=DiagnosticSchema)" },
        { name: "MySQL", level: "Advanced", spec: "Relational Schema Design, B-Tree Indexing & ACID", snippet: "CREATE INDEX idx_user_activity ON audit_logs (user_id, timestamp);" },
        { name: "SQLite", level: "Advanced", spec: "Embedded Zero-Latency Data Storage", snippet: "PRAGMA journal_mode = WAL; PRAGMA synchronous = NORMAL;" },
      ],
    },
    {
      id: "frontend",
      category: "03. FRONTEND & UI",
      color: "#38BDF8",
      icon: "⚛️",
      technologies: [
        { name: "React 19", level: "Expert", spec: "Server Components, Action Hooks & Concurrent UI", snippet: "const [state, formAction, isPending] = useActionState(updateProfile);" },
        { name: "Next.js 16", level: "Expert", spec: "App Router, Turbopack, Partial Prefetching", snippet: "export default async function Page() { return <StaticData /> }" },
        { name: "Tailwind CSS", level: "Expert", spec: "Utility-First Engine & Design Tokens", snippet: "className='selection:bg-[#D2FF2A] border-b border-[#444340]'" },
      ],
    },
    {
      id: "infra",
      category: "04. DEPLOYMENT & AI",
      color: "#F43F5E",
      icon: "🐳",
      technologies: [
        { name: "Docker", level: "Advanced", spec: "Multi-Stage Builds & Containerized Services", snippet: "FROM node:20-alpine AS builder\nCOPY . . RUN npm run build" },
        { name: "Git & GitHub", level: "Expert", spec: "Interactive Rebase, CI/CD Actions & Branching", snippet: "git rebase -i main && git push origin feature --force-with-lease" },
        { name: "Google Gemini SDK", level: "Advanced", spec: "Multimodal Vision AI & Structured JSON Payloads", snippet: "const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });" },
      ],
    },
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>("lang");
  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];

  return (
    <div className="w-full border border-[#444340] bg-[#1a1918]/80 p-6 lg:p-8 rounded-2xl space-y-8 relative overflow-hidden">
      {/* Circuit Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#444340]/60 pb-6">
        <div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
            <span>Architecture & Data Flow Circuit</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#D2FF2A] animate-ping"></span>
          </h3>
          <p className="text-xs text-[#b5b3ad] font-mono mt-1">
            Click any circuit node to pulse data streams and inspect execution parameters
          </p>
        </div>
        <span className="text-xs font-mono text-[#D2FF2A] border border-[#D2FF2A]/40 bg-[#D2FF2A]/10 px-3 py-1 rounded-full w-max">
          INTERACTIVE CIRCUIT MODE
        </span>
      </div>

      {/* SVG ELECTRIC SIGNAL CONNECTION CIRCUIT */}
      <div className="w-full relative py-4">
        {/* SVG Flow Lines */}
        <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
          <svg className="w-full h-full text-[#444340]" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
            <path d="M 125 50 L 375 50 L 625 50 L 875 50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
            {/* Animated Pulsing Signal Packet */}
            <motion.circle
              cx="125"
              cy="50"
              r="5"
              fill={activeNode.color}
              animate={{ cx: [125, 375, 625, 875, 125] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Circuit Nodes Horizontal Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
          {nodes.map((node) => {
            const isActive = node.id === activeNodeId;
            return (
              <button
                key={node.id}
                onClick={() => setActiveNodeId(node.id)}
                className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between space-y-4 relative ${
                  isActive
                    ? "bg-[#121211] shadow-2xl scale-[1.03]"
                    : "bg-[#121211]/50 hover:bg-[#121211] opacity-70 hover:opacity-100"
                }`}
                style={{
                  borderColor: isActive ? node.color : "#444340",
                  boxShadow: isActive ? `0 0 20px ${node.color}20` : "none",
                }}
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl">{node.icon}</span>
                  <span
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: isActive ? node.color : "#444340" }}
                  ></span>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#a3a3a3] uppercase block">{node.category}</span>
                  <span
                    className="font-mono text-sm font-bold block mt-1"
                    style={{ color: isActive ? "#ffffff" : "#b5b3ad" }}
                  >
                    {node.technologies.map((t) => t.name).join(" • ")}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* ACTIVE NODE INSPECTOR DISPLAY */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeNode.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.3 }}
          className="border border-[#444340] bg-[#121211] p-6 rounded-xl space-y-6"
        >
          <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
            <div className="flex items-center gap-3">
              <span className="text-xl">{activeNode.icon}</span>
              <h4 className="font-mono text-base font-bold text-white uppercase">{activeNode.category} SPECIFICATIONS</h4>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full border" style={{ color: activeNode.color, borderColor: activeNode.color }}>
              SIGNAL ACTIVE
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeNode.technologies.map((tech) => (
              <div key={tech.name} className="border border-[#444340]/60 bg-[#1a1918] p-4 rounded-xl space-y-3 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between border-b border-[#444340]/40 pb-2">
                    <span className="font-mono text-sm font-bold text-white">{tech.name}</span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#444340]/40 text-[#D2FF2A]">
                      {tech.level}
                    </span>
                  </div>
                  <p className="text-xs text-[#b5b3ad] font-sans mt-2 leading-relaxed">{tech.spec}</p>
                </div>

                <div className="bg-[#0c0c0b] border border-[#444340]/40 p-2.5 rounded-lg font-mono text-[11px] text-[#D2FF2A] overflow-x-auto">
                  <code>{tech.snippet}</code>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
