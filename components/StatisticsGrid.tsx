import { Problem } from "@/lib/types";
import { getAllStatistics } from "@/lib/utils";

export default function StatisticsGrid({ problems }: { problems: Problem[] }) {
  const {
    totalEasy,
    totalMedium,
    totalHard,
    solvedEasy,
    solvedMedium,
    solvedHard,
    avgProblemsPerDay,
    streak,
    consistencyScore,
    targetAchieved,
    targetMissed,
  } = getAllStatistics(problems);
  const stats = [
    {
      label: "Targets Achieved",
      value: targetAchieved,
      color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      icon: "🎯",
      motivational: "On fire!",
    },
    {
      label: "Targets Missed",
      value: targetMissed,
      color: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: "⚡",
      motivational: "Comeback time!",
    },
    {
      label: "Avg Problems / Day",
      value: avgProblemsPerDay.toFixed(1),
      color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      icon: "📊",
      motivational: "Steady progress!",
    },
    {
      label: "Longest Streak",
      value: `${streak} days`,
      color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      icon: "🔥",
      motivational: "Unstoppable!",
    },
    {
      label: "Consistency Score",
      value: `${consistencyScore}%`,
      color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
      icon: "⚡",
      motivational: "Keep it up!",
    },
    {
      label: "Easy Problems",
      value: `${solvedEasy}/${totalEasy}`,
      color: "bg-green-500/20 text-green-400 border-green-500/30",
      icon: "🟢",
      motivational: "Building foundation!",
    },
    {
      label: "Medium Problems",
      value: `${solvedMedium}/${totalMedium}`,
      color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30",
      icon: "🟡",
      motivational: "Getting stronger!",
    },
    {
      label: "Hard Problems",
      value: `${solvedHard}/${totalHard}`,
      color: "bg-red-500/20 text-red-400 border-red-500/30",
      icon: "🔴",
      motivational: "Challenge accepted!",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`bg-slate-800/50 rounded-xl shadow-xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105 border`}
        >
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm text-slate-400 mb-2 font-medium">
                {stat.label}
              </p>
              <p className="text-3xl font-bold text-white">{stat.value}</p>
              <p className="text-xs text-slate-500 mt-1 italic">
                {stat.motivational}
              </p>
            </div>
            <div
              className={`px-4 py-3 rounded-full ${stat.color} text-2xl hover:scale-110 transition-transform`}
            >
              {stat.icon}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
