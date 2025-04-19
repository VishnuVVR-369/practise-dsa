import React, { useEffect, useState } from "react";
import ReviseTabList from "@/components/ReviseTabList";

interface Problem {
  id: string;
  title: string;
  problemLink?: string;
  articleLink?: string;
  [key: string]: any;
}

type ReviseData = {
  [key: string]: Problem[];
};

const LABELS: Record<string, string> = {
  "2": "Solved 2 Days Ago",
  "7": "Solved 7 Days Ago",
  "14": "Solved 14 Days Ago",
};

export default function ReviseTab() {
  const [data, setData] = useState<ReviseData>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/revise-problems");
        if (!res.ok) throw new Error("Failed to fetch revision problems");
        const result = await res.json();
        setData(result);
      } catch (err: any) {
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <div>Loading revision problems...</div>;
  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div>
      {Object.entries(LABELS).map(([days, label]) => (
        <ReviseTabList key={days} problems={data[days] || []} label={label} />
      ))}
    </div>
  );
}
