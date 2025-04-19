interface ProgressBarProps {
  completed: number;
  total: number;
  label?: string;
  className?: string;
}

export default function ProgressBar({
  completed,
  total,
  label,
  className = "",
}: ProgressBarProps) {
  const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
  return (
    <div className={`w-full my-2 ${className}`}>
      {label && (
        <div className="mb-1 text-sm font-medium text-gray-700 flex justify-between">
          <span>{label}</span>
          <span>
            {completed} / {total} ({percent}%)
          </span>
        </div>
      )}
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className="bg-blue-600 h-3 rounded-full transition-all duration-300"
          style={{ width: `${percent}%` }}
        ></div>
      </div>
    </div>
  );
}
