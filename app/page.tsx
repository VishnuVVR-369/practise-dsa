"use client"

import { useState } from "react";
import { topics, problems, subgroups } from "@/app/consts";
import TopicList from "@/components/TopicList";
import ProblemsAccordion from "@/components/ProblemsAccordion";
import ProgressBar from "@/components/ProgressBar";


export default function Home() {
  const [selectedTopic] = useState<string | null>(null);

  const completed = problems.filter(p => p.status === "Solved").length;
  const total = problems.length;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Learn DSA the right way</h1>
      <ProgressBar completed={completed} total={total} label="Overall Progress" className="mb-4" />
      <p className="text-lg text-muted-foreground mb-4">
        Your Gateway to learn DSA 🔥
      </p>
      <p className="mb-6">Start Solving</p>

      <TopicList topics={topics} problems={problems} />

      {selectedTopic && (
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-4">{selectedTopic}</h2>
          <ProblemsAccordion selectedTopic={selectedTopic} subgroups={subgroups} problems={problems} />
        </div>
      )}
    </main>
  );
}
