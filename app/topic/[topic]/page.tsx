import { Problem } from "@/lib/types";
import { getProblemsByTopic } from "@/lib/getProblems";
import ProblemList from "@/components/ProblemList";

interface TopicPageProps {
  params: Promise<{ topic: string }>
}

export default async function TopicPage({ params }: TopicPageProps) {
  const topic: string = decodeURIComponent((await params).topic);
  const problems: Problem[] = await getProblemsByTopic(topic);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic}</h1>
      <ProblemList problems={problems} />
    </main>
  );
}
