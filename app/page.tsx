"use client";

import { useState, useEffect } from "react";
import Dashboard from "@/components/Dashboard";
import DashboardSkeleton from "@/components/DashboardSkeleton";

export default function Home() {
  const [allProblems, setAllProblems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAllProblems = async () => {
      const allProblems = await fetch(`/api/all-problems`)
        .then((res) => res.json())
        .catch((err) => {
          console.error(err);
        });
      setAllProblems(allProblems);
      setLoading(false);
    };
    fetchAllProblems();
  }, []);

  if (loading) return <DashboardSkeleton />;
  if (!allProblems || allProblems.length === 0)
    return <div>No problems found.</div>;

  return <Dashboard allProblems={allProblems} />;
}
