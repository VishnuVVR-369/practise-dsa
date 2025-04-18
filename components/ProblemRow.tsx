"use client";

import Link from "next/link";
import Image from "next/image";
import type { Problem } from "@/app/consts";

interface ProblemRowProps {
  problem: Problem;
  onStatusChange?: (id: string, newStatus: string) => void;
}

import { useState } from "react";

export default function ProblemRow({
  problem,
  onStatusChange,
}: ProblemRowProps) {
  const [localStatus, setLocalStatus] = useState(problem.status);

  return (
    <tr key={problem.id} className="hover:bg-blue-50 transition-colors">
      <td className="py-3 px-2 text-center">
        <input
          type="checkbox"
          checked={localStatus === "Solved"}
          onChange={async () => {
            const nextStatus = localStatus === "Solved" ? "Unsolved" : "Solved";
            setLocalStatus(nextStatus); // Optimistically update UI
            if (onStatusChange) onStatusChange(problem.id, nextStatus);
            try {
              const res = await fetch("/api/solve-problem", {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: problem.id, status: nextStatus }),
              });
              if (res.ok) {
                console.log(`Problem marked as ${nextStatus}:`, problem.id);
              } else {
                const err = await res.json();
                setLocalStatus(localStatus); // Revert on error
                if (onStatusChange) onStatusChange(problem.id, localStatus);
                console.error("Failed to update problem:", err.error);
              }
            } catch (e) {
              setLocalStatus(localStatus); // Revert on error
              if (onStatusChange) onStatusChange(problem.id, localStatus);
              console.error("Network error:", e);
            }
          }}
          className="form-checkbox h-4 w-4 text-blue-600 cursor-pointer"
        />
      </td>
      <td className="py-3 px-4 text-sm font-medium max-w-xs break-words">
        {problem.title}
      </td>
      <td
        className={`py-3 px-4 text-sm font-semibold whitespace-nowrap ${
          problem.difficulty === "Theory"
            ? "text-gray-400"
            : problem.difficulty === "Easy"
            ? "text-green-600"
            : problem.difficulty === "Medium"
            ? "text-orange-500"
            : "text-red-500"
        }`}
      >
        {problem.difficulty}
      </td>
      <td className="py-3 px-4 text-sm whitespace-nowrap">
        {problem.problemLink && problem.problemLink !== "NA" ? (
          problem.problemLink.includes("leetcode.com") ? (
            <Link
              href={problem.problemLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
              title="LeetCode Problem"
            >
              <Image
                src="/leetcode.svg"
                alt="LeetCode"
                width={28}
                height={28}
                className="inline-block align-middle hover:scale-110 transition"
              />
            </Link>
          ) : (
            <Link
              className="inline-block px-3 py-1 rounded bg-blue-100 text-blue-700 font-semibold hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
              href={problem.problemLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit
            </Link>
          )
        ) : (
          <span className="text-gray-400">NA</span>
        )}
      </td>
    </tr>
  );
}
