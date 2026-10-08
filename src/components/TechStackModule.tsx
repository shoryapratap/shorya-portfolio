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

interface RadarTech {
  id: string;
  name: string;
  angle: number;
  category: string;
  color: string;
  icon: string;
  metrics: {
    speed: string;
    concurrency: string;
    memory: string;
  };
  code: string;
}

interface MatrixKey {
  id: string;
  code: string;
  title: string;
  subtitle: string;
  status: string;
  accent: string;
  logs: string[];
}

export default function TechStackModule() {
  // CONCEPT 1 DATA STREAM CIRCUIT NODES
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

  // CONCEPT 2 RADAR ITEMS
  const radarItems: RadarTech[] = [
    {
      id: "java",
      name: "Java",
      angle: 0,
      category: "Backend Engine",
      color: "#D2FF2A",
      icon: "☕",
      metrics: { speed: "Very High", concurrency: "Multi-Core Thread Pools", memory: "JVM Heap Managed" },
      code: "public class Main { public static void main(String[] args) { ... } }",
    },
    {
      id: "cpp",
      name: "C++",
      angle: 60,
      category: "Systems & DSA",
      color: "#38BDF8",
      icon: "⚡",
      metrics: { speed: "Ultra Fast (Native)", concurrency: "Hardware Threads", memory: "Manual Pointers" },
      code: "template <typename T> void solve(T& graph) { ... }",
    },
    {
      id: "react",
      name: "React 19",
      angle: 120,
      category: "UI Engine",
      color: "#61DAFB",
      icon: "⚛️",
      metrics: { speed: "60 FPS Render", concurrency: "Concurrent Mode", memory: "Virtual DOM Tree" },
      code: "export function App() { return <main>...</main>; }",
    },
    {
      id: "fastapi",
      name: "FastAPI",
      angle: 180,
      category: "API Gateway",
      color: "#7C3AED",
      icon: "🚀",
      metrics: { speed: "Sub-10ms Latency", concurrency: "Async Event Loop", memory: "Low Footprint" },
      code: "@app.get('/health') async flex def check(): return {'status': 'ok'}",
    },
    {
      id: "docker",
      name: "Docker",
      angle: 240,
      category: "Containerization",
      color: "#F43F5E",
      icon: "🐳",
      metrics: { speed: "Instant Boot", concurrency: "Isolated Namespaces", memory: "Resource Cgroups" },
      code: "docker run -d -p 8080:8080 --name app portfolio:latest",
    },
    {
      id: "gemini",
      name: "Gemini AI",
      angle: 300,
      category: "Vision & LLM",
      color: "#FFA116",
      icon: "✨",
      metrics: { speed: "< 800ms Vision Pass", concurrency: "API Stream Queue", memory: "Cloud Tensor Core" },
      code: "const res = await model.generateContent([prompt, imagePart]);",
    },
  ];

  // CONCEPT 3 MATRIX KEYS
  const matrixKeys: MatrixKey[] = [
    {
      id: "k01",
      code: "SYS_01",
      title: "Java Multithreading",
      subtitle: "TCP Socket Server Engine",
      status: "EXECUTING",
      accent: "#D2FF2A",
      logs: [
        "[SYS_01] Initializing ReentrantReadWriteLock pool...",
        "[SYS_01] Worker thread #8 handling client payload...",
        "[SYS_01] Memory footprint: 48MB JVM heap allocation.",
      ],
    },
    {
      id: "k02",
      code: "SYS_02",
      title: "C++ DSA Core",
      subtitle: "O(1) Memory Graph Engine",
      status: "ACTIVE",
      accent: "#38BDF8",
      logs: [
        "[SYS_02] Allocating stack memory pointers...",
        "[SYS_02] Executing Dijkstra shortest path graph pass...",
        "[SYS_02] Time complexity: O(E log V) verified.",
      ],
    },
    {
      id: "k03",
      code: "SYS_03",
      title: "FastAPI Gateway",
      subtitle: "Async REST Pipeline",
      status: "STREAMING",
      accent: "#7C3AED",
      logs: [
        "[SYS_03] Uvicorn worker bound to 0.0.0.0:8000...",
        "[SYS_03] Processing pydantic model schema validation...",
        "[SYS_03] Response dispatched in 6.4ms.",
      ],
    },
    {
      id: "k04",
      code: "SYS_04",
      title: "React 19 Fiber",
      subtitle: "Concurrent Server Components",
      status: "OPTIMIZED",
      accent: "#61DAFB",
      logs: [
        "[SYS_04] Hydrating server action payload...",
        "[SYS_04] Reconciling virtual DOM diff tree...",
        "[SYS_04] 60 FPS animation frame target achieved.",
      ],
    },
    {
      id: "k05",
      code: "SYS_05",
      title: "Docker Container",
      subtitle: "Multi-Stage Build Target",
      status: "RUNNING",
      accent: "#F43F5E",
      logs: [
        "[SYS_05] Pulling alpine base image...",
        "[SYS_05] Caching layer dependencies...",
        "[SYS_05] Container health check: PASSED (200 OK).",
      ],
    },
    {
      id: "k06",
      code: "SYS_06",
      title: "Gemini Vision AI",
      subtitle: "Multimodal Diagnostic Model",
      status: "STANDBY",
      accent: "#FFA116",
      logs: [
        "[SYS_06] Connecting to Google Generative AI endpoint...",
        "[SYS_06] Serializing leaf disease image tensor...",
        "[SYS_06] Diagnostic JSON output verified in 780ms.",
      ],
    },
  ];

  const [activeNodeId, setActiveNodeId] = useState<string>("lang");
  const [selectedRadarId, setSelectedRadarId] = useState<string>("java");
  const [selectedKeyId, setSelectedKeyId] = useState<string>("k01");

  const activeNode = nodes.find((n) => n.id === activeNodeId) || nodes[0];
  const selectedRadar = radarItems.find((r) => r.id === selectedRadarId) || radarItems[0];
  const selectedKey = matrixKeys.find((m) => m.id === selectedKeyId) || matrixKeys[0];

  return (
    <div className="w-full space-y-16">
      {/* ───────────────────────────────────────────────────────────── */}
      {/* CONCEPT 1: INTERACTIVE DATA STREAM CIRCUIT */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="w-full border border-[#444340] bg-[#1a1918]/80 p-6 lg:p-8 rounded-2xl space-y-8 relative overflow-hidden">
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

        <div className="w-full relative py-4">
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-0">
            <svg className="w-full h-full text-[#444340]" viewBox="0 0 1000 100" fill="none" preserveAspectRatio="none">
              <path d="M 125 50 L 375 50 L 625 50 L 875 50" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
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

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CONCEPT 2: 3D COMMAND RADAR & LIVE CODE INSPECTOR */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="w-full border border-[#444340] bg-[#1a1918]/80 p-6 lg:p-8 rounded-2xl space-y-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#444340]/60 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>Command Radar & Live Inspector</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#38BDF8] animate-ping"></span>
            </h3>
            <p className="text-xs text-[#b5b3ad] font-mono mt-1">
              Interactive 3D radar ring tracking technology throughput and execution metrics
            </p>
          </div>
          <span className="text-xs font-mono text-[#38BDF8] border border-[#38BDF8]/40 bg-[#38BDF8]/10 px-3 py-1 rounded-full w-max">
            RADAR HUD MODE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 flex justify-center py-6">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-[#444340] bg-[#121211] flex items-center justify-center p-6 shadow-2xl">
              <div className="absolute inset-4 rounded-full border border-[#444340]/40 pointer-events-none"></div>
              <div className="absolute inset-12 rounded-full border border-[#444340]/30 pointer-events-none"></div>
              <div className="absolute inset-20 rounded-full border border-[#444340]/20 pointer-events-none"></div>

              <motion.div
                className="absolute inset-0 rounded-full origin-center pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, rgba(56, 189, 248, 0.15) 360deg)",
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              />

              <div className="w-24 h-24 rounded-full border border-[#38BDF8]/50 bg-[#1c1b1a] flex flex-col items-center justify-center text-center z-10 shadow-lg">
                <span className="text-2xl">{selectedRadar.icon}</span>
                <span className="font-mono text-xs font-bold text-white mt-1">{selectedRadar.name}</span>
              </div>

              {radarItems.map((item, idx) => {
                const isSelected = item.id === selectedRadarId;
                const total = radarItems.length;
                const angleRad = ((idx * (360 / total) - 90) * Math.PI) / 180;
                const radius = 120;
                const x = Math.cos(angleRad) * radius;
                const y = Math.sin(angleRad) * radius;

                return (
                  <button
                    key={item.id}
                    onClick={() => setSelectedRadarId(item.id)}
                    className={`absolute w-12 h-12 rounded-full border flex items-center justify-center text-sm transition-all duration-300 z-20 ${
                      isSelected
                        ? "scale-125 shadow-xl bg-[#121211]"
                        : "bg-[#1c1b1a] hover:scale-110 opacity-80 hover:opacity-100"
                    }`}
                    style={{
                      transform: `translate(${x}px, ${y}px)`,
                      borderColor: isSelected ? item.color : "#444340",
                      boxShadow: isSelected ? `0 0 15px ${item.color}` : "none",
                    }}
                    title={item.name}
                  >
                    <span>{item.icon}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedRadar.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="border border-[#444340] bg-[#121211] p-6 rounded-xl space-y-6"
              >
                <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{selectedRadar.icon}</span>
                    <div>
                      <h4 className="font-mono text-lg font-bold text-white">{selectedRadar.name}</h4>
                      <span className="text-xs font-mono text-[#a3a3a3]">{selectedRadar.category}</span>
                    </div>
                  </div>
                  <span
                    className="text-xs font-mono px-3 py-1 rounded-full border"
                    style={{ color: selectedRadar.color, borderColor: selectedRadar.color }}
                  >
                    LOCKED TARGET
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs">
                  <div className="border border-[#444340]/60 bg-[#1a1918] p-3 rounded-lg">
                    <span className="text-[10px] text-[#a3a3a3] uppercase block">Execution Speed</span>
                    <span className="text-sm font-bold text-white">{selectedRadar.metrics.speed}</span>
                  </div>
                  <div className="border border-[#444340]/60 bg-[#1a1918] p-3 rounded-lg">
                    <span className="text-[10px] text-[#a3a3a3] uppercase block">Concurrency</span>
                    <span className="text-sm font-bold text-[#D2FF2A]">{selectedRadar.metrics.concurrency}</span>
                  </div>
                  <div className="border border-[#444340]/60 bg-[#1a1918] p-3 rounded-lg">
                    <span className="text-[10px] text-[#a3a3a3] uppercase block">Memory Model</span>
                    <span className="text-sm font-bold text-[#38BDF8]">{selectedRadar.metrics.memory}</span>
                  </div>
                </div>

                <div className="border border-[#444340]/60 bg-[#0c0c0b] p-4 rounded-xl font-mono text-xs text-[#D2FF2A] overflow-x-auto space-y-2">
                  <span className="text-[10px] text-[#a3a3a3] uppercase block border-b border-[#333330] pb-2">
                    Live Code Execution Payload
                  </span>
                  <code>{selectedRadar.code}</code>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* ───────────────────────────────────────────────────────────── */}
      {/* CONCEPT 3: EDITORIAL MATRIX KEYPAD & TELEMETRY LOGS */}
      {/* ───────────────────────────────────────────────────────────── */}
      <div className="w-full border border-[#444340] bg-[#1a1918]/80 p-6 lg:p-8 rounded-2xl space-y-8 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#444340]/60 pb-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight flex items-center gap-3">
              <span>Editorial Matrix Keypad & Telemetry</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#F43F5E] animate-ping"></span>
            </h3>
            <p className="text-xs text-[#b5b3ad] font-mono mt-1">
              Press architectural module keypads to dispatch system telemetry diagnostics
            </p>
          </div>
          <span className="text-xs font-mono text-[#F43F5E] border border-[#F43F5E]/40 bg-[#F43F5E]/10 px-3 py-1 rounded-full w-max">
            KEYPAD MATRIX MODE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* KEYPAD MATRIX BUTTONS (Left 6 Cols) */}
          <div className="lg:col-span-6 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {matrixKeys.map((key) => {
              const isSelected = key.id === selectedKeyId;
              return (
                <button
                  key={key.id}
                  onClick={() => setSelectedKeyId(key.id)}
                  className={`p-4 rounded-xl border text-left transition-all duration-300 flex flex-col justify-between space-y-3 relative group ${
                    isSelected
                      ? "bg-[#121211] shadow-2xl scale-[1.03]"
                      : "bg-[#121211]/60 hover:bg-[#121211] opacity-75 hover:opacity-100"
                  }`}
                  style={{
                    borderColor: isSelected ? key.accent : "#444340",
                    boxShadow: isSelected ? `0 0 15px ${key.accent}30` : "none",
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#a3a3a3] uppercase">{key.code}</span>
                    <span
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: isSelected ? key.accent : "#444340" }}
                    ></span>
                  </div>
                  <div>
                    <span className="font-mono text-xs font-bold text-white block">{key.title}</span>
                    <span className="text-[10px] text-[#b5b3ad] block truncate mt-0.5">{key.subtitle}</span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* TELEMETRY DIAGNOSTIC CONSOLE (Right 6 Cols) */}
          <div className="lg:col-span-6 border border-[#444340] bg-[#0c0c0b] p-6 rounded-xl space-y-4 font-mono text-xs">
            <div className="flex items-center justify-between border-b border-[#333330] pb-3 text-[#a3a3a3]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: selectedKey.accent }}></span>
                <span className="text-white font-bold">{selectedKey.code} TELEMETRY FEED</span>
              </div>
              <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c1b1a] text-white">
                {selectedKey.status}
              </span>
            </div>

            <div className="space-y-2 pt-2 text-[#D2FF2A]">
              {selectedKey.logs.map((log, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[#a3a3a3] text-[10px] select-none">&gt;</span>
                  <p className="leading-relaxed">{log}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#333330] flex items-center justify-between text-[10px] text-[#a3a3a3]">
              <span>SYSTEM DIAGNOSTIC: OK</span>
              <span>BUFFER MEMORY: 100% CLEAN</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
