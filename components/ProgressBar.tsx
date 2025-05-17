import { Progress } from "./ui/progress";

interface ProgressBarProps {
  completed: number;
  total: number;
  label: string;
}

export default function ProgressBar({ completed, total, label }: ProgressBarProps) {
  const percent = total > 0 ? ((completed / total) * 100) : 0;
  const percentDisplay = percent.toFixed(2);

  return (
    <div className="w-full bg-[#23223A] rounded-xl px-2">
      {/* Top Row */}
      <div className="flex justify-between items-center px-2">
        <span className="text-lg font-medium text-gray-200">{label}</span>
        <span className="text-md font-semibold text-gray-300">
          {completed} / {total} ({percentDisplay}%)
        </span>
      </div>
      {/* Progress Bar */}
      <div className="relative w-full">
        <Progress value={percent} className="mt-0 mb-0 py-3" />
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-semibold text-base z-10">
          {percentDisplay}%
        </span>
      </div>
    </div>
  );
}
