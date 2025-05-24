"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Problem } from "@/lib/types";
import ProblemList from "@/components/ProblemList";

export default function TopicPage() {
  const params = useParams();
  const topic: string = decodeURIComponent(params.topic as string);
  const [problems, setProblems] = useState<Problem[]>([]);
  useEffect(() => {
    const fetchProblems = async () => {
      const response = await fetch(`/api/all-problems`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ topic }),
      });
      const data = await response.json();
      setProblems(data);
    };
    fetchProblems();
  }, [topic]);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic}</h1>
      <ProblemList problems={problems} />
    </main>
  );
}
