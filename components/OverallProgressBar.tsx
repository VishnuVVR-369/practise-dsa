import { Trophy, Target } from "lucide-react";
import type { Problem } from "@/lib/types";
import { getAllStatistics } from "@/lib/utils";

export function OverallProgressBar({ problems }: { problems: Problem[] }) {
  const percentage = Math.round(
    (problems.filter((problem) => problem.status === "Solved").length /
      problems.length) *
      100
  );
  const {
    totalEasy,
    totalMedium,
    totalHard,
    solvedEasy,
    solvedMedium,
    solvedHard,
  } = getAllStatistics(problems);
  const getMotivationalMessage = () => {
    if (percentage === 100) return "🏆 Legendary! You've conquered them all!";
    if (percentage >= 90) return "🔥 Almost legendary! Final push!";
    if (percentage >= 75) return "💪 You're in the elite zone!";
    if (percentage >= 50) return "🚀 Halfway to greatness!";
    if (percentage >= 25) return "⭐ Strong foundation building!";
    return "🎯 Your coding adventure begins!";
  };

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-xl p-8 mb-6 border border-slate-700 motivational-glow">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <Trophy className="text-yellow-400 w-8 h-8" />
          <h3 className="text-2xl font-bold text-white">Overall Mastery</h3>
        </div>
        <div className="flex items-center gap-2">
          <Target className="text-green-400 w-6 h-6" />
          <span className="text-4xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            {percentage}%
          </span>
        </div>
      </div>

      <div className="w-full bg-slate-700 rounded-full h-6 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-6 rounded-full transition-all duration-1000 ease-out relative"
          style={{ width: `${percentage}%` }}
        >
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
        </div>
      </div>

      <div className="flex justify-between text-slate-300 mb-4">
        <span className="font-bold text-green-400">
          {solvedEasy + solvedMedium + solvedHard} conquered
        </span>
        <span className="font-bold text-blue-400">
          {totalEasy + totalMedium + totalHard} total challenges
        </span>
      </div>

      <div className="text-center">
        <p className="text-lg font-semibold text-yellow-400 bg-yellow-500/20 px-4 py-2 rounded-full border border-yellow-500/30 inline-block">
          {getMotivationalMessage()}
        </p>
      </div>
    </div>
  );
}
