"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Problem } from "@/lib/types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ArrowLeft, Trophy, Target } from "lucide-react";
import { groupBy } from "lodash";
import Image from "next/image";
import { Skeleton } from "@/components/ui/skeleton";

const TopicDetail = () => {
  const router = useRouter();
  const topic = decodeURIComponent(useParams().topic as string);
  const [problems, setProblems] = useState<Problem[]>();

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const response = await fetch("/api/all-problems", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            topic,
          }),
        });
        const data = await response.json();
        setProblems(data);
      } catch (error) {
        console.error("Error fetching problems:", error);
      }
    };
    fetchProblems();
  }, [topic]);

  const totalProblems = problems?.length || 0;
  const easyCount =
    problems?.filter((problem) => problem.difficulty === "Easy").length || 0;
  const mediumCount =
    problems?.filter((problem) => problem.difficulty === "Medium").length || 0;
  const hardCount =
    problems?.filter((problem) => problem.difficulty === "Hard").length || 0;

  if (typeof problems === "undefined") {
    // Loading skeleton
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center mb-6">
            <Skeleton className="h-10 w-40 rounded-full mr-4" />
            <Skeleton className="h-10 w-60 rounded-full" />
          </div>
          <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {[...Array(4)].map((_, i) => (
                <div className="text-center" key={i}>
                  <Skeleton className="h-8 w-16 mx-auto mb-2 rounded" />
                  <Skeleton className="h-5 w-12 mx-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="space-y-4">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-slate-800/60 border border-slate-700 rounded-xl p-4"
              >
                <div className="flex items-center gap-4 mb-2">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-6 w-40 rounded" />
                  <Skeleton className="h-5 w-16 ml-auto rounded" />
                </div>
                <Skeleton className="h-4 w-full rounded mb-2" />
                <Skeleton className="h-4 w-3/4 rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (Array.isArray(problems) && problems.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-slate-300">Topic not found</p>
        </div>
      </div>
    );
  }

  const groupedProblems = Object.entries(groupBy(problems, "subgroup")).map(
    ([subgroup, problems]) => ({
      id: subgroup,
      name: subgroup,
      problems: problems.sort((a, b) => a.id - b.id),
      solvedCount: problems.filter((problem) => problem.status === "Solved")
        .length,
      totalProblems: problems.length,
      easyCount: problems.filter((problem) => problem.difficulty === "Easy")
        .length,
      mediumCount: problems.filter((problem) => problem.difficulty === "Medium")
        .length,
      hardCount: problems.filter((problem) => problem.difficulty === "Hard")
        .length,
    })
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
    const baseClasses =
      "text-xs px-2 py-1 rounded border transition-colors cursor-pointer";
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-6">
          <Button
            variant="outline"
            onClick={() => router.push("/")}
            className="mr-4 bg-slate-800/50 border-slate-700 text-white hover:bg-slate-700 hover:text-white"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
          <div className="flex items-center gap-3">
            <Trophy className="text-yellow-400 w-8 h-8" />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              {topic} Problems
            </h1>
            <Target className="text-green-400 w-8 h-8" />
          </div>
        </div>

        <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">
                {totalProblems}
              </div>
              <div className="text-sm text-slate-300">Total Problems</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-400">
                {easyCount}
              </div>
              <div className="text-sm text-slate-300">Easy</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-yellow-400">
                {mediumCount}
              </div>
              <div className="text-sm text-slate-300">Medium</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-red-400">{hardCount}</div>
              <div className="text-sm text-slate-300">Hard</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {groupedProblems.map((subTopic) => {
            const totalProblemsInSubTopic = subTopic.problems.length;
            const solvedProblemsInSubTopic = subTopic.problems.filter(
              (problem) => problem.status === "Solved"
            ).length;
            return (
              <Accordion
                key={subTopic.id}
                type="single"
                collapsible
                className="bg-slate-800/50 rounded-xl shadow-xl border border-slate-700"
              >
              <AccordionItem value={subTopic.id} className="border-none">
                <AccordionTrigger className="relative px-6 py-4 hover:no-underline cursor-pointer">
                  <div
                    className="absolute inset-0 bg-green-600/20"
                    style={{
                      width: `${(solvedProblemsInSubTopic / totalProblemsInSubTopic) * 100}%`,
                      zIndex: 0,
                    }}
                  />
                  <div className="flex items-center justify-between w-full">
                    <h3 className="text-lg font-semibold text-white">
                      {subTopic.name}
                    </h3>
                    <Badge
                      variant="outline"
                      className="ml-2 text-slate-300 border-slate-600"
                    >
                      {subTopic.problems.length} problems
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  {subTopic.problems.length === 0 ? (
                    <p className="text-slate-400 text-center py-4">
                      No problems available in this sub-topic.
                    </p>
                  ) : (
                    <div className="space-y-3">
                      {subTopic.problems.map((problem) => {
                        // Determine the last completion difficulty for background
                        const lastDifficulty =
                          problem.completionDifficulty &&
                          problem.completionDifficulty.length > 0
                            ? problem.completionDifficulty[
                                problem.completionDifficulty.length - 1
                              ]
                            : undefined;
                        // Check if problem is solved
                        const isSolved = problem.status === "Solved";
                        // Check if LeetCode link
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
                              {/* Checkbox column */}
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
                                          status: checked
                                            ? "Solved"
                                            : "Unsolved",
                                        }),
                                      });
                                    } catch (e) {
                                      console.error(
                                        "Failed to update problem status on server.",
                                        e
                                      );
                                    }
                                  }}
                                  className="border-slate-600 data-[state=checked]:bg-green-600 data-[state=checked]:border-green-600 cursor-pointer"
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
                                  )} border transition-colors`}
                                >
                                  {problem.difficulty}
                                </Button>
                              </div>
                              {/* LeetCode/Visit column */}
                              <div className="flex justify-center">
                                {isLeetCode ? (
                                  <a
                                    href={problem.problemLink || ""}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                                  >
                                    {/* <ExternalLink size={16} className="mr-1" />
                                    LeetCode */}
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
                              {/* Revision column */}
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
                                          // Optimistically update UI immediately
                                          setProblems((prev) =>
                                            prev?.map((p) =>
                                              p.id === problem.id
                                                ? {
                                                    ...p,
                                                    completionDifficulty: [
                                                      ...(p.completionDifficulty ||
                                                        []),
                                                      level,
                                                    ],
                                                  }
                                                : p
                                            )
                                          );
                                          // Then call API
                                          try {
                                            await fetch("/api/revise-status", {
                                              method: "PATCH",
                                              headers: {
                                                "Content-Type":
                                                  "application/json",
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
                                            problem.completionDifficulty
                                              .length - 1
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
          )})}
        </div>
      </div>
    </div>
  );
};

export default TopicDetail;
