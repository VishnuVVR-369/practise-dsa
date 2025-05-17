export const dynamic = "force-dynamic";

import { getProblems } from "@/lib/getProblems";
import StatsCard from "./StatsCard";
import { Target, AlertTriangle, LineChart, ListChecks } from "lucide-react";
import { getSolvedProblemsCnt, getStats } from "@/lib/utils";
import { Problem } from "@/lib/types";
import StatsCharts from "./StatsCharts";
import ProgressBar from "./ProgressBar";
import { groupBy } from "lodash";
import TopicCard from "./TopicCard";

export default async function Dashboard() {
  const problems: Problem[] = await getProblems();
  const { solvedEasy, totalEasy, solvedMedium, totalMedium, solvedHard, totalHard } = getSolvedProblemsCnt(problems);
  const { targetAchieved, targetMissed, avgDay } = getStats(problems);
  const topics = Object.entries(groupBy(problems, (problem: Problem) => problem.group));

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
        <StatsCard
          icon={<Target className="w-12 h-12 text-green-500" />}
          value={targetAchieved}
          title="Target Achieved"
          subtitle=""
        />
        <StatsCard
          icon={<AlertTriangle className="w-12 h-12 text-red-500" />}
          value={targetMissed}
          title="Target Missed"
          subtitle=""
        />
        <StatsCard
          icon={<LineChart className="w-12 h-12 text-cyan-400" />}
          value={avgDay.toFixed(2)}
          title="Avg/Day"
          subtitle=""
        />
        <StatsCard
          icon={<ListChecks className="w-12 h-12 text-gray-200" />}
          value={<span><span className="font-bold">{solvedEasy}</span> / {totalEasy}</span>}
          title="Easy Solved"
          subtitle=""
        />
        <StatsCard
          icon={<ListChecks className="w-12 h-12 text-gray-200" />}
          value={<span><span className="font-bold">{solvedMedium}</span> / {totalMedium}</span>}
          title="Medium Solved"
          subtitle=""
        />
        <StatsCard
          icon={<ListChecks className="w-12 h-12 text-gray-200" />}
          value={<span><span className="font-bold">{solvedHard}</span> / {totalHard}</span>}
          title="Hard Solved"
          subtitle=""
        />
      </div>
      <div className="w-full max-w-4xl">
        {/* <StatsCharts problems={problems} /> */}
      </div>
      <div className="text-2xl font-bold mb-6 text-white">Overall Progress</div>
      <div className="mb-10 w-full max-w-xl">
        <ProgressBar completed={10} total={130} label="Total" />
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <TopicCard key={index} label={topic[0]} problems={topic[1]} />
        ))}
      </div>
    </div>
  );
}
