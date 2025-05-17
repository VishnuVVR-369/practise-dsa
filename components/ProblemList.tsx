"use client";

import type { Problem } from "@/lib/types";
import { groupBy } from "lodash";
import ProblemRow from "./ProblemRow";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

import React, { useState } from "react";

export default function ProblemList({ problems }: { problems: Problem[] }) {
  const [localProblems, setLocalProblems] = useState(problems);
  const groupedProblems = Object.entries(
    groupBy(localProblems, (problem: Problem) => problem.subgroup)
  );
  console.log(groupedProblems);

  const getSolvedCount = (problems: Problem[]) =>
    problems.filter((p) => p.status === "Solved").length;

  return (
    <Accordion type="multiple" className="w-full">
      {groupedProblems.map(([topic, topicProblems]) => {
        const solvedCount = getSolvedCount(topicProblems);
        const totalCount = topicProblems.length;
        return (
          <AccordionItem key={topic} value={topic}>
            <AccordionTrigger className="bg-muted px-4 py-3">
              <div className="flex flex-col w-full">
                <div className="flex items-center justify-between w-full">
                  <span className="font-semibold text-base">{topic}</span>
                  <span className="text-green-600 font-medium text-sm">
                    {solvedCount} / {totalCount} Solved
                  </span>
                </div>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm border-separate border-spacing-y-1">
                  <thead>
                    <tr className="bg-muted text-xs">
                      <th className="px-3 py-2 text-left font-semibold"> </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Title
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Difficulty
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Link
                      </th>
                      <th className="px-3 py-2 text-left font-semibold">
                        Revision
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {topicProblems.map((problem) => (
                      <ProblemRow
                        key={problem.id}
                        problem={problem}
                        onStatusChange={async (id: number, newStatus: string) => {
                          setLocalProblems((prev) =>
                            prev.map((p) =>
                              p.id === id ? { ...p, status: newStatus } : p
                            )
                          );
                          try {
                            const res = await fetch("/api/solve-problem", {
                              method: "PATCH",
                              headers: { "Content-Type": "application/json" },
                              body: JSON.stringify({ id, status: newStatus }),
                            });
                            if (!res.ok) {
                              setLocalProblems((prev) =>
                                prev.map((p) =>
                                  p.id === id ? { ...p, status: problem.status } : p
                                )
                              );
                            }
                          } catch {
                            setLocalProblems((prev) =>
                              prev.map((p) =>
                                p.id === id ? { ...p, status: problem.status } : p
                              )
                            );
                          }
                        }}
                        onRevisionChange={async (id: number, level: string) => {
                          await fetch("/api/revise-status", {
                            method: "PATCH",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({ id, completionDifficulty: level }),
                          });
                          setLocalProblems((prev) =>
                            prev.map((p) =>
                              p.id === id
                                ? {
                                    ...p,
                                    completionDifficulty: [...(p.completionDifficulty ?? []), level],
                                  }
                                : p
                            )
                          );
                        }}
                      />
                    ))}
                  </tbody>
                </table>
              </div>
            </AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
