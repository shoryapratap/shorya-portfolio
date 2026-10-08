"use client";

import { useEffect, useState } from "react";

interface GitHubUser {
  public_repos: number;
  followers: number;
  following: number;
  avatar_url: string;
}

export default function GitHubModule() {
  const [userData, setUserData] = useState<GitHubUser>({
    public_repos: 20,
    followers: 9,
    following: 13,
    avatar_url: "https://avatars.githubusercontent.com/u/shoryapratap",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch("https://api.github.com/users/shoryapratap");
        if (res.ok) {
          const data = await res.json();
          setUserData({
            public_repos: data.public_repos ?? 20,
            followers: data.followers ?? 9,
            following: data.following ?? 13,
            avatar_url: data.avatar_url ?? "https://avatars.githubusercontent.com/u/shoryapratap",
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  return (
    <div className="w-full border border-[#444340] bg-[#1a1918]/60 p-6 rounded-2xl flex flex-col justify-between space-y-6">
      <div className="flex items-center justify-between border-b border-[#444340]/60 pb-4">
        <div className="flex items-center gap-3">
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          <span className="font-mono text-sm uppercase tracking-wider text-[#ffffff]">GitHub Contributions</span>
        </div>
        <a
          href="https://github.com/shoryapratap"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-[#D2FF2A] hover:underline flex items-center gap-1"
        >
          <span>@shoryapratap</span>
          <span>↗</span>
        </a>
      </div>

      {/* Stats Counter */}
      <div className="grid grid-cols-3 gap-3 font-mono text-xs text-[#a3a3a3]">
        <div className="border border-[#444340]/60 p-3 rounded-xl bg-[#121211]">
          <div className="text-xl font-bold text-white">{loading ? "..." : userData.public_repos}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#a3a3a3]">Repositories</div>
        </div>
        <div className="border border-[#444340]/60 p-3 rounded-xl bg-[#121211]">
          <div className="text-xl font-bold text-white">{loading ? "..." : userData.followers}</div>
          <div className="text-[10px] uppercase tracking-wider text-[#a3a3a3]">Followers</div>
        </div>
        <div className="border border-[#444340]/60 p-3 rounded-xl bg-[#121211]">
          <div className="text-xl font-bold text-[#D2FF2A]">Active</div>
          <div className="text-[10px] uppercase tracking-wider text-[#a3a3a3]">Status</div>
        </div>
      </div>

      {/* Heatmap Graph */}
      <div className="w-full overflow-x-auto pt-2">
        <div className="min-w-[550px] border border-[#444340]/40 p-4 rounded-xl bg-[#121211] flex flex-col items-center justify-center">
          <img
            src="https://ghchart.rshah.org/444340/shoryapratap"
            alt="GitHub Contribution Heatmap"
            className="w-full opacity-90 hover:opacity-100 transition-opacity"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          <span className="text-[10px] font-mono text-[#a3a3a3] mt-2">
            Live GitHub Contribution Streak Matrix (@shoryapratap)
          </span>
        </div>
      </div>
    </div>
  );
}
