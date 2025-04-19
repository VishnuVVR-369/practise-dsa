'use client'

import { useParams } from "next/navigation";
import { subgroups, problems } from "@/app/consts";
import ProblemsAccordion from "@/components/ProblemsAccordion";
import ProgressBarTopic from "./ProgressBarTopic";

export default function TopicPage() {
  const params = useParams();
  const topic = decodeURIComponent(params.topic as string);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic}</h1>
      <ProgressBarTopic topic={topic} />
      <ProblemsAccordion selectedTopic={topic} subgroups={subgroups} problems={problems} />
    </main>
  );
}
