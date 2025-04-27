"use client";

import { useParams } from "next/navigation";
import { subgroups } from "@/app/consts";
import ProblemsAccordion from "@/components/ProblemsAccordion";
import ProgressBarTopic from "./ProgressBarTopic";

import { useState, useEffect } from "react";

export default function TopicPage() {
  const params = useParams();
  const topic = decodeURIComponent(params.topic as string);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProblems() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/problems");
        if (!res.ok) throw new Error("Failed to fetch problems");
        const data = await res.json();
        setProblems(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProblems();
  }, []);

  // Helper: get topicProblems
  const topicProblemIds = subgroups
    .filter((d) => d.title === topic)
    .flatMap((d) => d.subgroups)
    .flatMap((sg) => sg.problems);
  const topicProblems = problems.filter((p) => topicProblemIds.includes(p.id));

  // Difficulty levels
  const difficulties = ["Easy", "Medium", "Hard"];
  // Compute stats for each difficulty
  const difficultyStats = difficulties.map((diff) => {
    const total = topicProblems.filter((p) => p.difficulty === diff).length;
    const solved = topicProblems.filter((p) => p.difficulty === diff && p.status === "Solved").length;
    return { diff, total, solved };
  });

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic}</h1>
      {loading && <div>Loading problems...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          {/* Difficulty summary styled like StatsCharts */}
          <div className="w-full flex justify-center mb-8 mt-2">  
            <div className="flex gap-6">
              {/* Easy */}
              <div className="flex flex-col items-center bg-white/80 border border-gray-200 rounded-xl shadow-sm p-4 min-w-[110px] w-[180px] transition-transform hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl mb-1">🟢</span>
                <span className="text-xl font-bold text-gray-700">{difficultyStats[0].solved} / {difficultyStats[0].total}</span>
                <span className="text-xs text-gray-700 font-medium mt-1">Easy</span>
              </div>
              {/* Medium */}
              <div className="flex flex-col items-center bg-white/80 border border-orange-200 rounded-xl shadow-sm p-4 min-w-[110px] w-[180px] transition-transform hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl mb-1">🟠</span>
                <span className="text-xl font-bold text-orange-700">{difficultyStats[1].solved} / {difficultyStats[1].total}</span>
                <span className="text-xs text-orange-700 font-medium mt-1">Medium</span>
              </div>
              {/* Hard */}
              <div className="flex flex-col items-center bg-white/80 border border-red-200 rounded-xl shadow-sm p-4 min-w-[110px] w-[180px] transition-transform hover:-translate-y-1 hover:shadow-lg">
                <span className="text-3xl mb-1">🔴</span>
                <span className="text-xl font-bold text-red-700">{difficultyStats[2].solved} / {difficultyStats[2].total}</span>
                <span className="text-xs text-red-700 font-medium mt-1">Hard</span>
              </div>
            </div>
          </div>
          <ProgressBarTopic topic={topic} problems={problems} />
          <ProblemsAccordion
            selectedTopic={topic}
            subgroups={subgroups}
            problems={problems}
            onStatusChange={(id, newStatus) => {
              setProblems((prev) =>
                prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
              );
            }}
          />
        </>
      )}
    </main>
  );
}
