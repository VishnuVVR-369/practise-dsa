import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { subgroups } from "@/app/consts";

interface TopicCardProps {
  topic: string;
  problems: any[];
}

export default function TopicCard({ topic, problems }: TopicCardProps) {
  const router = useRouter();
  const topicProblems = problems.filter((p) =>
    subgroups
      .filter((d) => d.title === topic)
      .flatMap((d) => d.subgroups)
      .flatMap((sg) => sg.problems)
      .includes(p.id)
  );
  const completed = topicProblems.filter((p) => p.status === "Solved").length;
  return (
    <Card className="bg-blue-100">
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{topic}</CardTitle>
        <Button
          size="sm"
          className="cursor-pointer"
          onClick={() => router.push(`/topic/${encodeURIComponent(topic)}`)}
        >
          Start Now
        </Button>
      </CardHeader>
      <div className="px-6 pb-2">
        <ProgressBar
          completed={completed}
          total={topicProblems.length}
          label="Progress"
        />
      </div>
      <CardDescription className="pl-6">
        Total Problems {topicProblems.length}
      </CardDescription>
      {completed === 0 && (
        <CardDescription className="pl-6 italic">
          Not yet started
        </CardDescription>
      )}
    </Card>
  );
}
