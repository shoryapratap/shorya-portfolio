"use client";

import { useEffect, useState } from "react";

interface LeetCodeCategoryStats {
  totalSolved: number;
  easySolved: number;
  mediumSolved: number;
  hardSolved: number;
  activeDays: number;
  maxStreak: number;
  categories: {
    name: string;
    count: number;
    color: string;
  }[];
}

export default function LeetCodeModule() {
  const [stats, setStats] = useState<LeetCodeCategoryStats>({
    totalSolved: 37,
    easySolved: 27,
    mediumSolved: 10,
    hardSolved: 0,
    activeDays: 24,
    maxStreak: 2,
    categories: [
      { name: "Arrays", count: 18, color: "#D2FF2A" },
      { name: "Stacks", count: 8, color: "#7C3AED" },
      { name: "Binary Search", count: 6, color: "#F43F5E" },
      { name: "Sorting", count: 5, color: "#38BDF8" },
    ],
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeetCodeData() {
      const username = "shorya28";
      const endpoints = [
        `https://alfa-leetcode-api.onrender.com/userProfile/${username}`,
        `https://leetcode-api-faisalshohag.vercel.app/${username}`,
        `https://alfa-leetcode-api.onrender.com/${username}/solved`,
      ];

      for (const url of endpoints) {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 4000);
          const res = await fetch(url, { signal: controller.signal }).catch(() => null);
          clearTimeout(timeoutId);

          if (res && res.ok) {
            const data = await res.json().catch(() => null);
            if (data) {
              const total = data.totalSolved ?? data.total_solved ?? data.solvedProblem;
              const easy = data.easySolved ?? data.easy_solved;
              const medium = data.mediumSolved ?? data.medium_solved;
              const hard = data.hardSolved ?? data.hard_solved;

              if (typeof total === "number" && total > 0) {
                setStats((prev) => ({
                  ...prev,
                  totalSolved: total,
                  easySolved: typeof easy === "number" ? easy : prev.easySolved,
                  mediumSolved: typeof medium === "number" ? medium : prev.mediumSolved,
                  hardSolved: typeof hard === "number" ? hard : prev.hardSolved,
                }));
                break;
              }
            }
          }
        } catch {
          // Fallback to verified profile stats
        }
      }
      setLoading(false);
    }

    fetchLeetCodeData();
  }, []);

  return (
    <div className="w-full border border-[#444340] bg-[#1a1918]/60 p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-[#FFA116]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.211.45-1.677 0l-8-7.73a1.168 1.168 0 010-1.676l8-7.73c.466.45 1.211.45 1.677 0l2.697 2.607c.466.45.466 1.17 0 1.62l-4.469 4.318 4.469 4.318c.466.45.466 1.17 0 1.62zM20.898 6.07l2.697-2.607c.466-.45 1.211-.45 1.677 0l8 7.73c.466.45.466 1.17 0 1.62l-8 7.73c-.466.45-1.211.45-1.677 0l-2.697-2.607c-.466-.45-.466-1.17 0-1.62l4.469-4.318-4.469-4.318c-.466-.45-.466-1.17 0-1.62z" />
          </svg>
          <span className="font-mono text-sm uppercase tracking-wider text-[#ffffff]">LeetCode Activity</span>
        </div>
        <a
          href="https://leetcode.com/u/shorya28/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#FFA116] hover:underline flex items-center gap-1"
        >
          <span>@shorya28</span>
          <span>↗</span>
        </a>
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

      {/* Streak & Activity Meter */}
      <div className="grid grid-cols-2 gap-3 font-mono text-xs">
        <div className="border border-[#444340]/50 bg-[#121211] p-3 rounded-xl flex items-center justify-between">
          <span className="text-[#a3a3a3] text-[11px]">Active Days</span>
          <span className="font-bold text-[#D2FF2A]">{stats.activeDays} Days</span>
        </div>
        <div className="border border-[#444340]/50 bg-[#121211] p-3 rounded-xl flex items-center justify-between">
          <span className="text-[#a3a3a3] text-[11px]">Max Streak</span>
          <span className="font-bold text-[#FFA116]">{stats.maxStreak} Days</span>
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
