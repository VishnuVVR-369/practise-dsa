"use client";

import { useState, useEffect } from "react";
import { topics, subgroups } from "@/app/consts";
import TopicList from "@/components/TopicList";
import ProblemsAccordion from "@/components/ProblemsAccordion";
import ProgressBar from "@/components/ProgressBar";

export default function Home() {
  const [selectedTopic] = useState<string | null>(null);
  const [problems, setProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProblems() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/problems");
        if (!res.ok) throw new Error("Failed to fetch problems");
        const data = await res.json();
        setProblems(data);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchProblems();
  }, []);

  const completed = problems.filter((p) => p.status === "Solved").length;
  const total = problems.length;

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Learn DSA the right way</h1>
      <ProgressBar
        completed={completed}
        total={total}
        label="Overall Progress"
        className="mb-4"
      />
      <p className="text-lg text-muted-foreground mb-4">
        Your Gateway to learn DSA 🔥
      </p>
      <p className="mb-6">Start Solving</p>

      {loading && <div>Loading problems...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <TopicList topics={topics} problems={problems} />
          {selectedTopic && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">{selectedTopic}</h2>
              <ProblemsAccordion
                selectedTopic={selectedTopic}
                subgroups={subgroups}
                problems={problems}
                onStatusChange={(id, newStatus) => {
                  setProblems((prev) =>
                    prev.map((p) =>
                      p.id === id ? { ...p, status: newStatus } : p
                    )
                  );
                }}
              />
            </div>
          )}
        </>
      )}
    </main>
  );
}
