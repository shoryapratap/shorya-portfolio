"use client";

import { motion } from "framer-motion";

export default function TechStackModule() {
  const stackRow1 = [
    { name: "Java", category: "Language", color: "#ED8B00", icon: "☕" },
    { name: "C++", category: "Language", color: "#00599C", icon: "⚡" },
    { name: "Python", category: "Language", color: "#3776AB", icon: "🐍" },
    { name: "React 19", category: "Frontend", color: "#61DAFB", icon: "⚛️" },
    { name: "Tailwind CSS", category: "Frontend", color: "#38BDF8", icon: "🎨" },
    { name: "Next.js 16", category: "Frontend", color: "#FFFFFF", icon: "▲" },
  ];

  const stackRow2 = [
    { name: "FastAPI", category: "Backend", color: "#009688", icon: "🚀" },
    { name: "MySQL", category: "Database", color: "#4479A1", icon: "🐬" },
    { name: "SQLite", category: "Database", color: "#003B57", icon: "🗄️" },
    { name: "Git", category: "Infrastructure", color: "#F05032", icon: "🌿" },
    { name: "Docker", category: "Infrastructure", color: "#2496ED", icon: "🐳" },
    { name: "Gemini SDK", category: "AI / ML", color: "#D2FF2A", icon: "✨" },
  ];

  const categorizedStack = [
    {
      category: "Languages",
      accent: "#D2FF2A",
      items: [
        { name: "Java", desc: "Object-oriented, multithreading, enterprise backends" },
        { name: "C++", desc: "Low-level memory optimization & high-performance DSA" },
        { name: "Python", desc: "AI pipeline automation & data science processing" },
      ],
    },
    {
      category: "Frontend & UI",
      accent: "#38BDF8",
      items: [
        { name: "React 19", desc: "Concurrent rendering & client-side state architecture" },
        { name: "Tailwind CSS", desc: "Modern utility-first responsive styling" },
        { name: "Next.js 16", desc: "App router, SSR, static page generation & Turbopack" },
      ],
    },
    {
      category: "Backend & Databases",
      accent: "#7C3AED",
      items: [
        { name: "FastAPI", desc: "Asynchronous RESTful APIs with Pydantic validation" },
        { name: "MySQL", desc: "Relational database schema modeling & indexing" },
        { name: "SQLite", desc: "Lightweight embedded persistent storage engines" },
      ],
    },
    {
      category: "Infrastructure & AI",
      accent: "#F43F5E",
      items: [
        { name: "Git & GitHub", desc: "Version control workflows, branching & CI/CD" },
        { name: "Docker", desc: "Containerized deployment environments & microservices" },
        { name: "Google Gemini SDK", desc: "Multimodal vision AI & LLM API integrations" },
      ],
    },
  ];

  return (
    <div className="w-full space-y-12">
      {/* INFINITE MARQUEE TICKER ROW 1 (Left Slide) */}
      <div className="w-full overflow-hidden relative py-2 border-y border-[#444340]/40 bg-[#121211]/40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex space-x-6 whitespace-nowrap w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 22 }}
        >
          {[...stackRow1, ...stackRow1].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="px-6 py-3 border border-[#444340]/60 bg-[#1c1b1a] rounded-full flex items-center gap-3 text-xs font-mono text-white group hover:border-[#D2FF2A] transition-colors cursor-default"
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-bold tracking-wide">{item.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-[#a3a3a3] border-l border-[#444340] pl-3">
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* INFINITE MARQUEE TICKER ROW 2 (Right Slide) */}
      <div className="w-full overflow-hidden relative py-2 border-b border-[#444340]/40 bg-[#121211]/40 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <motion.div
          className="flex space-x-6 whitespace-nowrap w-max"
          animate={{ x: ["-50%", "0%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 26 }}
        >
          {[...stackRow2, ...stackRow2].map((item, idx) => (
            <div
              key={`${item.name}-${idx}`}
              className="px-6 py-3 border border-[#444340]/60 bg-[#1c1b1a] rounded-full flex items-center gap-3 text-xs font-mono text-white group hover:border-[#D2FF2A] transition-colors cursor-default"
            >
              <span className="text-base">{item.icon}</span>
              <span className="font-bold tracking-wide">{item.name}</span>
              <span className="text-[10px] uppercase tracking-widest text-[#a3a3a3] border-l border-[#444340] pl-3">
                {item.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* INTERACTIVE ANIMATED CAPABILITIES CARDS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        {categorizedStack.map((group, groupIdx) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
            whileHover={{ y: -4, scale: 1.01 }}
            className="border border-[#444340] bg-[#1a1918]/80 p-6 rounded-2xl flex flex-col justify-between space-y-6 hover:border-white/40 transition-all shadow-xl group"
          >
            <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
              <span className="font-mono text-xs uppercase tracking-widest text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.accent }}></span>
                {group.category}
              </span>
              <span className="text-[10px] font-mono text-[#a3a3a3] uppercase">CAPABILITY MATRIX</span>
            </div>

            <div className="space-y-4">
              {group.items.map((item) => (
                <div
                  key={item.name}
                  className="p-3 border border-[#444340]/40 bg-[#121211] rounded-xl flex flex-col space-y-1 group-hover:border-[#444340] transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-sm font-bold text-white">{item.name}</span>
                    <span className="text-[10px] font-mono text-[#D2FF2A]">PRO</span>
                  </div>
                  <p className="text-xs text-[#b5b3ad] font-sans">{item.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
