import { Skeleton } from "@/components/ui/skeleton";
import { Trophy, Zap, Target } from "lucide-react";

export default function DashboardSkeleton() {
  return (
    <>
      <div className="mb-8 text-center p-6">
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
          <span className="font-medium">Your coding journey starts here!</span>
        </div>
      </div>
      <div className="space-y-8">
        {/* Statistics Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-6 flex flex-col justify-between min-h-[130px]"
            >
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-8 w-20 mb-2" />
              <Skeleton className="h-3 w-24" />
            </div>
          ))}
        </div>
        {/* Progress Bar Skeleton */}
        <div className="mt-8">
          <Skeleton className="h-6 w-full rounded-full" />
        </div>
        {/* Topic Grid Skeleton */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-slate-800/70 border border-slate-700/50 rounded-xl p-6 min-h-[100px]"
            >
              <Skeleton className="h-4 w-32 mb-2" />
              <Skeleton className="h-3 w-20" />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
