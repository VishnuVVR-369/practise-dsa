import { Problem } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

interface RevisionProblem {
  id: string;
  name: string;
  problems: Problem[];
}

export const RevisionProblems = () => {
  const [, setProblems] = useState<Problem[]>();
  const [revisionProblems, setRevisionProblems] = useState<RevisionProblem[]>(
    []
  );

  const handleProblemSolved = (problemId: number, solved: boolean) => {
    setProblems((prev) =>
      prev?.map((p) =>
        p.id === problemId
          ? {
              ...p,
              status: solved ? "Solved" : "Unsolved",
              solvedDate: solved
                ? new Date().toISOString().split("T")[0]
                : undefined,
              revisionLevel: solved
                ? undefined
                : p.completionDifficulty?.[p.completionDifficulty.length - 1],
            }
          : p
      )
    );
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30";
      case "Hard":
        return "bg-red-500/20 text-red-400 border-red-500/30";
      default:
        return "bg-slate-500/20 text-slate-400 border-slate-500/30";
    }
  };

  const getRevisionButtonColor = (level: string, isSelected: boolean) => {
    const baseClasses = "text-xs px-2 py-1 rounded border transition-colors";
    if (isSelected) {
      switch (level) {
        case "Easy":
          return `${baseClasses} bg-green-500/70 text-green-300 border-green-500/50`;
        case "Medium":
          return `${baseClasses} bg-yellow-500/70 text-yellow-300 border-yellow-500/50`;
        case "Hard":
          return `${baseClasses} bg-red-500/70 text-red-300 border-red-500/50`;
        default:
          return `${baseClasses} bg-slate-500/70 text-slate-300 border-slate-500/50`;
      }
    }
    return `${baseClasses} bg-slate-700/50 text-slate-400 border-slate-600`;
  };

  const getProblemBackgroundColor = (revisionLevel?: string) => {
    switch (revisionLevel) {
      case "Easy":
        return "bg-green-500/30 border-green-500/20";
      case "Medium":
        return "bg-yellow-500/30 border-yellow-500/20";
      case "Hard":
        return "bg-red-500/30 border-red-500/20";
      default:
        return "bg-slate-700/30 border-slate-700";
    }
  };

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch("/api/revision-problems");
        const data = await response.json();
        setProblems([...data[2], ...data[7], ...data[14]]);
        const revisionProblems = [
          {
            id: "Solved 2 days ago",
            name: "Solved 2 days ago",
            problems: data[2],
          },
          {
            id: "Solved 7 days ago",
            name: "Solved 7 days ago",
            problems: data[7],
          },
          {
            id: "Solved 14 days ago",
            name: "Solved 14 days ago",
            problems: data[14],
          },
        ];
        setRevisionProblems(revisionProblems);
      } catch (error) {
        console.error("Failed to fetch problems:", error);
      }
    };
    fetchProblems();
  }, []);

  return (
    <div className="space-y-4">
      {revisionProblems.map((daysAgo) => (
        <Accordion
          key={daysAgo.id}
          type="single"
          collapsible
          className="bg-slate-800/50 rounded-xl shadow-xl border border-slate-700"
        >
          <AccordionItem value={daysAgo.id} className="border-none">
            <AccordionTrigger className="px-6 py-4 hover:no-underline">
              <div className="flex items-center justify-between w-full">
                <h3 className="text-lg font-semibold text-white">
                  {daysAgo.name}
                </h3>
                <Badge
                  variant="outline"
                  className="ml-2 text-slate-300 border-slate-600"
                >
                  {daysAgo.problems.length} problems
                </Badge>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 pb-4">
              {daysAgo.problems.length === 0 ? (
                <p className="text-slate-400 text-center py-4">
                  No problems available in this sub-topic.
                </p>
              ) : (
                <div className="space-y-3">
                  {daysAgo.problems.map((problem) => {
                    const lastDifficulty =
                      problem.completionDifficulty &&
                      problem.completionDifficulty.length > 0
                        ? problem.completionDifficulty[
                            problem.completionDifficulty.length - 1
                          ]
                        : undefined;
                    const isSolved = problem.status === "Solved";
                    const isLeetCode =
                      problem.problemLink &&
                      problem.problemLink.includes("leetcode");
                    return (
                      <div
                        key={problem.id}
                        className={`border rounded-lg p-4 transition-colors ${getProblemBackgroundColor(
                          lastDifficulty
                        )}`}
                      >
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div className="flex justify-center">
                            <Checkbox
                              checked={isSolved}
                              onCheckedChange={async (checked) => {
                                handleProblemSolved(problem.id, !!checked);
                                try {
                                  await fetch("/api/solve-problem", {
                                    method: "PATCH",
                                    headers: {
                                      "Content-Type": "application/json",
                                    },
                                    body: JSON.stringify({
                                      id: problem.id,
                                      status: checked ? "Solved" : "Unsolved",
                                    }),
                                  });
                                } catch (e) {
                                  console.error(
                                    "Failed to update problem status on server.",
                                    e
                                  );
                                }
                              }}
                              className="border-slate-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-white">
                              {problem.title}
                            </h4>
                          </div>
                          <div className="flex justify-center">
                            <Button
                              variant="outline"
                              size="sm"
                              className={`${getDifficultyColor(
                                problem.difficulty
                              )} border transition-colors cursor-pointer`}
                            >
                              {problem.difficulty}
                            </Button>
                          </div>
                          <div className="flex justify-center">
                            {isLeetCode ? (
                              <a
                                href={problem.problemLink || ""}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Image
                                  src="/leetcode.svg"
                                  alt="LeetCode"
                                  width={28}
                                  height={28}
                                />
                              </a>
                            ) : (
                              <a
                                href={problem.problemLink || ""}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                              >
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="border-blue-400 text-blue-400 hover:bg-blue-500/20"
                                >
                                  Visit
                                </Button>
                              </a>
                            )}
                          </div>
                          <div>
                            {isSolved && (
                              <div className="flex gap-1">
                                {["Easy", "Medium", "Hard"].map((level) => (
                                  <Button
                                    key={level}
                                    variant="outline"
                                    size="sm"
                                    disabled={!isSolved}
                                    onClick={async () => {
                                      setProblems(prev => prev?.map(p =>
                                        p.id === problem.id
                                          ? { ...p, completionDifficulty: [...(p.completionDifficulty || []), level] }
                                          : p
                                      ));
                                      setRevisionProblems((prev) => {
                                        prev.map(prob => {
                                          prob.problems.map(p => {
                                            if (p.id === problem.id) {
                                              p.completionDifficulty = [...(p.completionDifficulty || []), level];
                                            }
                                            return p;
                                          });
                                          return prob;
                                        });
                                        return prev;
                                      });
                                      try {
                                        await fetch("/api/revise-status", {
                                          method: "PATCH",
                                          headers: {
                                            "Content-Type": "application/json",
                                          },
                                          body: JSON.stringify({
                                            id: problem.id,
                                            completionDifficulty: level,
                                          }),
                                        });
                                      } catch (e) {
                                        console.error(
                                          "Failed to update revision status on server.",
                                          e
                                        );
                                      }
                                    }}
                                    className={getRevisionButtonColor(
                                      level,
                                      problem.completionDifficulty?.[
                                        problem.completionDifficulty.length - 1
                                      ] === level
                                    )}
                                  >
                                    {level}
                                  </Button>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      ))}
    </div>
  );
};
