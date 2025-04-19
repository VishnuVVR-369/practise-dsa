import TopicCard from "./TopicCard";
import type { Problem } from "@/app/consts";

interface TopicListProps {
  topics: string[];
  problems: Problem[];
}

export default function TopicList({ topics, problems }: TopicListProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {topics.map((topic) => (
        <TopicCard
          key={topic}
          topic={topic}
          problems={problems}
        />
      ))}
    </div>
  );
}
