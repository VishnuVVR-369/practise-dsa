"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trophy } from "lucide-react";
import _ from "lodash";
import type { Problem } from "@/lib/types";

export default function TopicGrid({ problems }: { problems: Problem[] }) {
  const router = useRouter();
  const topics = Object.entries(_.groupBy(problems, "group")).map(
    ([topic, problems]) => ({
      name: topic,
      problems: problems,
      solvedCount: problems.filter((problem) => problem.status === "Solved")
        .length,
      totalProblems: problems.length,
      easyCount: problems.filter((problem) => problem.difficulty === "Easy")
        .length,
      mediumCount: problems.filter((problem) => problem.difficulty === "Medium")
        .length,
      hardCount: problems.filter((problem) => problem.difficulty === "Hard")
        .length,
    })
  );

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-emerald-400";
      case "Medium":
        return "text-yellow-400";
      case "Hard":
        return "text-red-400";
      default:
        return "text-slate-400";
    }
  };

  const getMotivationalMessage = (percentage: number) => {
    if (percentage === 100) return "🏆 Master!";
    if (percentage >= 80) return "🔥 Almost there!";
    if (percentage >= 60) return "💪 Great progress!";
    if (percentage >= 40) return "🚀 Keep going!";
    if (percentage >= 20) return "⭐ Getting started!";
    return "🎯 Begin your journey!";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic: any, index: number) => {
        const progressPercentage = Math.round(
          (topic.solvedCount / topic.totalProblems) * 100
        );
        const isComplete = progressPercentage === 100;

        return (
          <div
            key={index}
            className={`bg-slate-800/50 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border border-slate-700 ${
              isComplete
                ? "success-glow border-green-500/50"
                : "hover:border-slate-600"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">{topic.name}</h3>
              <div className="flex items-center gap-2">
                {isComplete && <Trophy className="text-yellow-400 w-5 h-5" />}
                <div
                  className={`text-lg font-bold ${
                    isComplete ? "text-green-400" : "text-blue-400"
                  }`}
                >
                  {progressPercentage}%
                </div>
              </div>
            </div>

            <div className="w-full bg-slate-700 rounded-full h-4 mb-4 overflow-hidden">
              <div
                className={`h-4 rounded-full transition-all duration-700 ${
                  isComplete
                    ? "bg-gradient-to-r from-green-400 to-emerald-500"
                    : "bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
                }`}
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-sm text-slate-400 mb-4">
              <span className="font-medium">{topic.solvedCount} solved</span>
              <span>{topic.totalProblems} total</span>
            </div>

            <div className="text-center mb-4">
              <span className="text-sm font-medium text-green-400 bg-green-500/20 px-3 py-1 rounded-full border border-green-500/30">
                {getMotivationalMessage(progressPercentage)}
              </span>
            </div>

            <div className="flex justify-between text-xs mb-6 gap-2">
              <span
                className={`${getDifficultyColor(
                  "Easy"
                )} bg-emerald-500/20 px-2 py-1 rounded border border-emerald-500/30`}
              >
                Easy: {topic.easyCount}
              </span>
              <span
                className={`${getDifficultyColor(
                  "Medium"
                )} bg-yellow-500/20 px-2 py-1 rounded border border-yellow-500/30`}
              >
                Medium: {topic.mediumCount}
              </span>
              <span
                className={`${getDifficultyColor(
                  "Hard"
                )} bg-red-500/20 px-2 py-1 rounded border border-red-500/30`}
              >
                Hard: {topic.hardCount}
              </span>
            </div>

            <Button
              onClick={() => router.push(`/topic/${topic.name}`)}
              className={`w-full font-bold text-lg py-3 transition-all duration-300 cursor-pointer ${
                isComplete
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 shadow-lg shadow-green-500/25"
                  : "bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/25"
              }`}
            >
              {isComplete ? "🏆 Review Mastery" : "🚀 Start Challenge"}
            </Button>
          </div>
        );
      })}
    </div>
  );
}
