import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Trophy, Zap, Target } from "lucide-react";
import MotivationalQuote from "./MotivationalQuotes";
import type { Problem } from "@/lib/types";
import StatisticsGrid from "./StatisticsGrid";
import { OverallProgressBar } from "./OverallProgressBar";
import TopicGrid from "./TopicGrid";
import { RevisionProblems } from "./RevisionProblems";
import DailyProgressChart from "./DailyProgressChart";
import WeeklyProgressChart from "./WeeklyProgressChart";

export default function Dashboard({ allProblems }: { allProblems: Problem[] }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="text-yellow-400 w-10 h-10" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              DSA Tracker Pro
            </h1>
            <Zap className="text-yellow-400 w-10 h-10" />
          </div>
          <p className="text-slate-300 text-lg">
            Master Data Structures & Algorithms, One Problem at a Time
          </p>
          <div className="mt-4 inline-flex items-center gap-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full border border-green-500/30">
            <Target className="w-4 h-4" />
            <span className="font-medium">
              Your coding journey starts here!
            </span>
          </div>
        </div>

        <MotivationalQuote />

        <Tabs defaultValue="solve" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6 bg-slate-800/50 border border-slate-700 h-16">
            <TabsTrigger
              value="solve"
              className="text-lg py-3 data-[state=active]:bg-green-600 data-[state=active]:text-white cursor-pointer"
            >
              🚀 SOLVE
            </TabsTrigger>
            <TabsTrigger
              value="revise"
              className="text-lg py-3 data-[state=active]:bg-purple-600 data-[state=active]:text-white cursor-pointer"
            >
              🧠 REVISE
            </TabsTrigger>
          </TabsList>

          <TabsContent value="solve" className="space-y-6">
            <StatisticsGrid problems={allProblems} />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <DailyProgressChart data={allProblems} />
              <WeeklyProgressChart data={allProblems} />
            </div>

            <OverallProgressBar problems={allProblems} />

            <div>
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Choose Your Challenge 💪
              </h2>
              <TopicGrid problems={allProblems} />
            </div>
          </TabsContent>

          <TabsContent value="revise" className="space-y-6">
            <div className="bg-slate-800/50 rounded-lg shadow-xl p-6 border border-slate-700 motivational-glow">
              <h2 className="text-3xl font-bold text-white mb-4 text-center">
                🧠 Strengthen Your Knowledge
              </h2>
              <p className="text-slate-300 mb-6 text-center text-lg">
                Review problems you&apos;ve conquered to build unshakeable
                confidence!
                <span className="text-green-400 font-semibold">
                  {" "}
                  Repetition is the mother of skill.
                </span>
              </p>
              <RevisionProblems />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
