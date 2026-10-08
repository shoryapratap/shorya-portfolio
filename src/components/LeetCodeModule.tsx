"use client";

import { useEffect, useState } from "react";

interface LeetCodeCategoryStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  categories: {
    name: string;
    count: number;
    color: string;
  }[];
}

export default function LeetCodeModule() {
  const [stats, setStats] = useState<LeetCodeCategoryStats>({
    totalSolved: 135,
    easySolved: 55,
    mediumSolved: 65,
    hardSolved: 15,
    categories: [
      { name: "Arrays", count: 42, color: "#D2FF2A" },
      { name: "Stacks", count: 28, color: "#7C3AED" },
      { name: "Binary Search", count: 35, color: "#F43F5E" },
      { name: "Sorting", count: 30, color: "#38BDF8" },
    ],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetCodeData() {
      try {
        const res = await fetch("https://leetcode-stats-api.herokuapp.com/shoryapratap");
        if (res.ok) {
          const data = await res.json();
          if (data.status === "success" && data.totalSolved) {
            setStats((prev) => ({
              ...prev,
              totalSolved: data.totalSolved,
              easySolved: data.easySolved || prev.easySolved,
              mediumSolved: data.mediumSolved || prev.mediumSolved,
              hardSolved: data.hardSolved || prev.hardSolved,
            }));
          }
        }
      } catch (error) {
        console.error("Failed to fetch LeetCode data, using live stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeetCodeData();
  }, []);

  return (
    <div className="w-full border border-[#444340] bg-[#1a1918]/60 p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#FFA116]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.73a1.168 1.168 0 010-1.676l8-7.73c.466-.45 1.211-.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-4.469 4.318 4.469 4.318c.466.45.466 1.17 0 1.62zM20.898 6.07l2.697-2.607c.466-.45 1.211-.45 1.677 0l8 7.73c.466.45.466 1.17 0 1.62l-8 7.73c-.466.45-1.211.45-1.677 0l-2.697-2.607c-.466-.45-.466-1.17 0-1.62l4.469-4.318-4.469-4.318c-.466-.45-.466-1.17 0-1.62z" />
          </svg>
          <span className="font-mono text-sm uppercase tracking-wider text-[#ffffff]">LeetCode Statistics</span>
        </div>
        <span className="text-xs font-mono text-[#FFA116]">ALGORITHMS & DSA</span>
      </div>

      {/* Summary Stat Pill */}
      <div className="flex items-center justify-between bg-[#121211] border border-[#444340]/60 p-4 rounded-xl font-mono text-xs">
        <div>
          <span className="text-[#a3a3a3] uppercase text-[10px] block">Total Solved</span>
          <span className="text-2xl font-bold text-white">{loading ? "..." : stats.totalSolved}</span>
        </div>
        <div className="flex gap-4 text-right">
          <div>
            <span className="text-[#00B8A3] text-[10px] block uppercase">Easy</span>
            <span className="text-sm font-semibold text-white">{stats.easySolved}</span>
          </div>
          <div>
            <span className="text-[#FFC01E] text-[10px] block uppercase">Medium</span>
            <span className="text-sm font-semibold text-white">{stats.mediumSolved}</span>
          </div>
          <div>
            <span className="text-[#FF375F] text-[10px] block uppercase">Hard</span>
            <span className="text-sm font-semibold text-white">{stats.hardSolved}</span>
          </div>
        </div>
      </div>

      {/* Categorized Problem Solved Counts */}
      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
        {stats.categories.map((cat) => (
          <div
            key={cat.name}
            className="border border-[#444340]/50 bg-[#121211] p-3 rounded-xl flex items-center justify-between"
          >
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }}></span>
              <span className="text-[#b5b3ad]">{cat.name}</span>
            </div>
            <span className="font-bold text-white">{cat.count} Solved</span>
          </div>
        ))}
      </div>
    </div>
  );
}
