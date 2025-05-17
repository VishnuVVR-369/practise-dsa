"use client";

import Link from "next/link";
import Image from "next/image";
import type { Problem } from "@/lib/types";
import styles from "./ProblemRow.module.css";

interface ProblemRowProps {
  problem: Problem;
  onStatusChange: (id: number, newStatus: string) => void;
  onRevisionChange: (id: number, level: string) => void;
}

export default function ProblemRow({ problem, onStatusChange, onRevisionChange }: ProblemRowProps) {
  const lastRevision = (problem.completionDifficulty ?? []).slice(-1)[0] || '';
  let revisionBg = '';
  if (lastRevision === 'Easy') revisionBg = 'bg-green-100';
  else if (lastRevision === 'Medium') revisionBg = 'bg-yellow-100';
  else if (lastRevision === 'Hard') revisionBg = 'bg-red-100';

  return (
    <tr
      className={`bg-background transition ${revisionBg}`}
      style={revisionBg ? { color: '#222' } : {}}
    >
      <td className="px-2 py-3 text-center align-middle">
        <span className={styles.customCheckbox}>
          <input
            type="checkbox"
            id={`problem-${problem.id}-completed`}
            checked={problem.status === "Solved"}
            onChange={() => {
              const nextStatus = problem.status === "Solved" ? "Unsolved" : "Solved";
              onStatusChange(problem.id, nextStatus);
            }}
          />
          <label htmlFor={`problem-${problem.id}-completed`}><span className={styles.srOnly}>Mark {problem.title} as {problem.status === "Solved" ? "unsolved" : "solved"}</span></label>
        </span>
      </td>
      <td className={"px-4 py-3 text-left font-medium max-w-xs break-words" + (problem.status === "Solved" ? " " + styles.completed : "")}>
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
                checked={((problem.completionDifficulty ?? []).slice(-1)[0]) === level}
                onChange={() => {
                  onRevisionChange(problem.id, level);
                }}
                disabled={problem.status !== "Solved"}
              />
              <label
                htmlFor={`problem-${problem.id}-rev-${level.toLowerCase()}`}
                className={
                  styles.revisionLabel +
                  " " +
                  (((problem.completionDifficulty ?? []).slice(-1)[0]) === level
                    ? level === "Easy"
                      ? styles.selectedEasy
                      : level === "Medium"
                      ? styles.selectedMedium
                      : styles.selectedHard
                    : "")
                }
                style={{ cursor: problem.status !== "Solved" ? 'not-allowed' : 'pointer', opacity: problem.status !== "Solved" ? 0.6 : 1 }}
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
