import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Problem } from "./types";

export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

export function getTotalDays(problems: Problem[]): number {
  const problemsByDate = groupProblemsByDate(problems);
  return Object.keys(problemsByDate).length;
}

export function calculateStreak(problems: Problem[]): number {
  const problemsByDate = groupProblemsByDate(problems);
  const MS_PER_DAY = 1000 * 60 * 60 * 24;
  const dayIndices = Object.keys(problemsByDate).map((dateStr) => {
    const d = new Date(dateStr);
    return Math.floor(
      Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / MS_PER_DAY
    );
  });
  const daysSet = new Set(dayIndices);
  let maxStreak = 0;
  for (const day of daysSet) {
    if (!daysSet.has(day - 1)) {
      let current = day;
      let streak = 0;
      while (daysSet.has(current)) {
        streak++;
        current++;
      }
      maxStreak = Math.max(maxStreak, streak);
    }
  }
  return maxStreak;
}

export function calculateConsistencyScore(problems: Problem[]): number {
  const totalDays = getTotalDays(problems);
  if (totalDays === 0) return 0;
  const problemsByDate = groupProblemsByDate(problems);
  let totalConsistency = 0;
  Object.keys(problemsByDate).forEach((date) => {
    if (!date) return;
    const count = problemsByDate[date].length;
    totalConsistency += count >= 8 ? 100 : (count / 8) * 100;
  });
  return Math.round((totalConsistency / totalDays) * 100) / 100;
}

export function daysTargetAchieved(problems: Problem[]): number {
  const problemsByDate = groupProblemsByDate(problems);
  return Object.keys(problemsByDate).reduce((acc, date) => {
    if (!date) return acc;
    return problemsByDate[date].length >= 8 ? acc + 1 : acc;
  }, 0);
}

export function daysTargetMissed(problems: Problem[]): number {
  const problemsByDate = groupProblemsByDate(problems);
  return Object.keys(problemsByDate).reduce((acc, date) => {
    if (!date) return acc;
    return problemsByDate[date].length < 8 ? acc + 1 : acc;
  }, 0);
}

export function getAllStatistics(problems: Problem[]) {
  const totalEasy = problems.filter((p) => p.difficulty === "Easy").length;
  const totalMedium = problems.filter((p) => p.difficulty === "Medium").length;
  const totalHard = problems.filter((p) => p.difficulty === "Hard").length;
  const solvedEasy = problems.filter(
    (p) => p.status === "Solved" && p.difficulty === "Easy"
  ).length;
  const solvedMedium = problems.filter(
    (p) => p.status === "Solved" && p.difficulty === "Medium"
  ).length;
  const solvedHard = problems.filter(
    (p) => p.status === "Solved" && p.difficulty === "Hard"
  ).length;
  const totalDays = getTotalDays(problems);
  const avgProblemsPerDay =
    totalDays > 0 ? (solvedEasy + solvedMedium + solvedHard) / totalDays : 0;
  const streak = calculateStreak(problems);
  const consistencyScore = calculateConsistencyScore(problems);
  const targetAchieved = daysTargetAchieved(problems);
  const targetMissed = daysTargetMissed(problems);
  return {
    totalEasy,
    totalMedium,
    totalHard,
    solvedEasy,
    solvedMedium,
    solvedHard,
    avgProblemsPerDay,
    streak,
    consistencyScore,
    targetAchieved,
    targetMissed,
  };
}

export function groupProblemsByDate(
  problems: Problem[]
): Record<string, Problem[]> {
  const problemsByDate = problems.reduce((acc, problem) => {
    const date =
      problem.solvedAt != null ? problem.solvedAt.toString().split("T")[0] : "";
    if (!acc[date]) acc[date] = [];
    acc[date].push(problem);
    return acc;
  }, {} as Record<string, Problem[]>);
  delete problemsByDate[""];
  return problemsByDate;
}
