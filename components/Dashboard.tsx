"use client"

import { useEffect, useState } from "react";
import StatsCard from "./StatsCard";
import { ListChecks } from "lucide-react";
import { getSolvedProblemsCnt } from "@/lib/utils";
import { Problem } from "@/lib/types";
import ProgressBar from "./ProgressBar";
import { groupBy } from "lodash";
import TopicCard from "./TopicCard";

export default function Dashboard() {
  const [problems, setProblems] = useState<Problem[]>([]);
  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch("/api/all-problems");
      const data = await response.json();
      setProblems(data);
    };
    fetchProblems();
  }, []);
  const { solvedEasy, totalEasy, solvedMedium, totalMedium, solvedHard, totalHard } = getSolvedProblemsCnt(problems);
  const totalSolved = solvedEasy + solvedMedium + solvedHard;
  const totalProblems = totalEasy + totalMedium + totalHard;
  const topics = Object.entries(groupBy(problems, (problem: Problem) => problem.group));

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-4xl">
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
        <ProgressBar completed={totalSolved} total={totalProblems} label="Total" />
      </div>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {topics.map((topic, index) => (
          <TopicCard key={index} label={topic[0]} problems={topic[1]} />
        ))}
      </div>
    </div>
  );
}
