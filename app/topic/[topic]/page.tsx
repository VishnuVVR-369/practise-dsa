"use client";

import { useParams } from "next/navigation";
import { subgroups } from "@/app/consts";
import ProblemsAccordion from "@/components/ProblemsAccordion";
import ProgressBarTopic from "./ProgressBarTopic";

import { useState, useEffect } from "react";

export default function TopicPage() {
  const params = useParams();
  const topic = decodeURIComponent(params.topic as string);
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

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{topic}</h1>
      {loading && <div>Loading problems...</div>}
      {error && <div className="text-red-500">{error}</div>}
      {!loading && !error && (
        <>
          <ProgressBarTopic topic={topic} problems={problems} />
          <ProblemsAccordion
            selectedTopic={topic}
            subgroups={subgroups}
            problems={problems}
            onStatusChange={(id, newStatus) => {
              setProblems((prev) =>
                prev.map((p) => (p.id === id ? { ...p, status: newStatus } : p))
              );
            }}
          />
        </>
      )}
    </main>
  );
}
