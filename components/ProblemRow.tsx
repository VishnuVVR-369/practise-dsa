"use client";

import Link from "next/link";
import Image from "next/image";
import type { Problem } from "@/app/consts";

interface ProblemRowProps {
  problem: Problem;
  onStatusChange?: (id: string, newStatus: string) => void;
}

import { useState } from "react";
import styles from "./ProblemRow.module.css";

export default function ProblemRow({
  problem,
  onStatusChange,
}: ProblemRowProps) {
  const [localStatus, setLocalStatus] = useState(problem.status);
  const [completionDifficulty, setCompletionDifficulty] = useState<string | undefined>(problem.completionDifficulty);

  return (
    <tr
      key={problem.id}
      className={
        localStatus === "Solved" && completionDifficulty === "Easy"
          ? styles.revisionBgEasy
          : localStatus === "Solved" && completionDifficulty === "Medium"
          ? styles.revisionBgMedium
          : localStatus === "Solved" && completionDifficulty === "Hard"
          ? styles.revisionBgHard
          : ""
      }
    >
      <td className="px-2 py-3 text-center align-middle">
        <span className={styles.customCheckbox}>
          <input
            type="checkbox"
            id={`problem-${problem.id}-completed`}
            checked={localStatus === "Solved"}
            onChange={async () => {
              const nextStatus = localStatus === "Solved" ? "Unsolved" : "Solved";
              setLocalStatus(nextStatus);
              if (onStatusChange) onStatusChange(problem.id, nextStatus);
              try {
                const res = await fetch("/api/solve-problem", {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({ id: problem.id, status: nextStatus, completionDifficulty }),
                });
                if (!res.ok) {
                  setLocalStatus(localStatus);
                }
              } catch {
                setLocalStatus(localStatus);
              }
            }}
          />
          <label htmlFor={`problem-${problem.id}-completed`}><span className={styles.srOnly}>Mark {problem.title} as {localStatus === "Solved" ? "unsolved" : "solved"}</span></label>
        </span>
      </td>
      <td className={"px-4 py-3 text-left font-medium max-w-xs break-words" + (localStatus === "Solved" ? " " + styles.completed : "")}>
        {problem.title}
      </td>
      <td className="px-4 py-3 text-center">
        <span
          className={
            styles.difficultyBadge +
            " " +
            (problem.difficulty === "Easy"
              ? styles.badgeEasy
              : problem.difficulty === "Medium"
              ? styles.badgeMedium
              : problem.difficulty === "Hard"
              ? styles.badgeHard
              : styles.badgeTheory)
          }
        >
          {problem.difficulty}
        </span>
      </td>
      <td className="px-4 py-3 text-center">
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
                width={20}
                height={20}
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
      <td className="px-4 py-3 text-center">
        <div className={styles.revisionButtons}>
          {["Easy", "Medium", "Hard"].map((level) => (
            <span key={level}>
              <input
                type="radio"
                name={`problem-${problem.id}-revision`}
                id={`problem-${problem.id}-rev-${level.toLowerCase()}`}
                value={level}
                checked={completionDifficulty === level}
                onChange={async () => {
                  setCompletionDifficulty(level);
                  try {
                    await fetch("/api/solve-problem", {
                      method: "PATCH",
                      headers: { "Content-Type": "application/json" },
                      body: JSON.stringify({ id: problem.id, status: localStatus, completionDifficulty: level }),
                    });
                  } catch {}
                }}
                disabled={localStatus !== "Solved"}
              />
              <label
                htmlFor={`problem-${problem.id}-rev-${level.toLowerCase()}`}
                className={
                  styles.revisionLabel +
                  " " +
                  (completionDifficulty === level
                    ? level === "Easy"
                      ? styles.selectedEasy
                      : level === "Medium"
                      ? styles.selectedMedium
                      : styles.selectedHard
                    : "")
                }
                style={{ cursor: localStatus !== "Solved" ? 'not-allowed' : 'pointer', opacity: localStatus !== "Solved" ? 0.6 : 1 }}
              >
                {level === "Hard" ? "Hard" : level}
              </label>
            </span>
          ))}
        </div>
      </td>
    </tr>
  );
}
