import ProgressBar from "@/components/ProgressBar";
import { subgroups } from "@/app/consts";

interface ProgressBarTopicProps {
  topic: string;
  problems: any[];
}

export default function ProgressBarTopic({ topic, problems }: ProgressBarTopicProps) {
  const topicProblems = problems.filter(p =>
    subgroups.filter(d => d.title === topic)
        .flatMap(d => d.subgroups)
        .flatMap(sg => sg.problems)
        .includes(p.id)
  );
  const completed = topicProblems.filter(p => p.status === "Solved").length;
  const total = topicProblems.length;
  return (
    <ProgressBar
      completed={completed}
      total={total}
      label={`Progress for ${topic}`}
      className="mb-4"
    />
  );
}
