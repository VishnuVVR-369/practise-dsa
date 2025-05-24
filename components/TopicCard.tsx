export const dynamic = "force-dynamic";

import ProgressBar from "./ProgressBar";
import { Problem } from "@/lib/types";
import Link from "next/link";

interface TopicCardProps {
  label: string;
  problems: Problem[];
}

export default function TopicCard({ label, problems }: TopicCardProps) {
  const completed = problems.filter((p) => p.status === "Solved").length;
  const total = problems.length;
  const easyCount = problems.filter((p) => p.difficulty === "Easy").length;
  const mediumCount = problems.filter((p) => p.difficulty === "Medium").length;
  const hardCount = problems.filter((p) => p.difficulty === "Hard").length;
  console.log(completed, total);

  return (
    <div className="bg-[#23223A] rounded-2xl p-6 w-full shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <span className="text-xl font-bold text-gray-100">{label}</span>
      </div>
      <ProgressBar completed={completed} total={total} label="" />
      <div className="flex justify-between gap-1 items-center mt-6 mb-8">
        <span className="bg-green-900/70 text-green-300 font-semibold px-2 py-2 rounded-lg text-xs">
          Easy: {easyCount}
        </span>
        <span className="bg-yellow-900/70 text-yellow-300 font-semibold px-2 py-2 rounded-lg text-xs">
          Medium: {mediumCount}
        </span>
        <span className="bg-red-900/70 text-red-300 font-semibold px-2 py-2 rounded-lg text-xs">
          Hard: {hardCount}
        </span>
      </div>
      <Link href={`/topic/${encodeURIComponent(label)}`} target="_blank">
        <button
          className="w-full bg-[#2186FF] hover:bg-[#1566d6] text-white text-xl font-semibold py-3 rounded-xl transition-colors duration-200 cursor-pointer"
          type="button"
        >
          Start Now
        </button>
      </Link>
    </div>
  );
}
