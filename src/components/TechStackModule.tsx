export default function TechStackModule() {
  const stackCategories = [
    {
      category: "Languages",
      items: ["Java", "C++"],
    },
    {
      category: "Frontend",
      items: ["React", "Tailwind CSS"],
    },
    {
      category: "Backend & DB",
      items: ["FastAPI", "MySQL", "SQLite"],
    },
    {
      category: "Infrastructure",
      items: ["Git", "Docker"],
    },
  ];

  return (
    <div className="w-full border border-[#444340] bg-[#1a1918]/60 p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#D2FF2A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
          <span className="font-mono text-sm uppercase tracking-wider text-[#ffffff]">Technical Capabilities</span>
        </div>
        <span className="text-xs font-mono text-[#a3a3a3]">STACK ARCHITECTURE</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {stackCategories.map((group) => (
          <div key={group.category} className="border border-[#444340]/50 bg-[#121211] p-4 rounded-xl flex flex-col space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#a3a3a3]">{group.category}</span>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono border border-[#444340] bg-[#1c1b1a] text-white hover:border-[#D2FF2A] hover:text-[#D2FF2A] transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
