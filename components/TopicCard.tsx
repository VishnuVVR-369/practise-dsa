import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { problems as allProblems } from "@/app/consts";
import ProgressBar from "./ProgressBar";

interface TopicCardProps {
  topic: string;
  questionCount: number;
}

export default function TopicCard({ topic, questionCount }: TopicCardProps) {
  const router = useRouter();
  const topicProblems = allProblems.filter(p => p.tags[0] === topic);
  const completed = topicProblems.filter(p => p.status === "Solved").length;
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
          total={questionCount}
          label="Progress"
        />
      </div>
      <CardDescription className="pl-6">
        Total Questions {questionCount}
      </CardDescription>
      {completed === 0 && (
        <CardDescription className="pl-6 italic">Not yet started</CardDescription>
      )}
    </Card>
  );
}
