import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import type { Problem } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getSolvedProblemsCnt(problems: Problem[]) {
  const totalEasy = problems.filter((problem) => {
    return problem.difficulty === "Easy";
  }).length;
  const totalMedium = problems.filter((problem) => {
    return problem.difficulty === "Medium"; 
  }).length;
  const totalHard = problems.filter((problem) => {
    return problem.difficulty === "Hard";
  }).length;
  const solvedEasy = problems.filter((problem) => {
    return problem.status === "Solved" && problem.difficulty === "Easy";
  }).length;
  const solvedMedium = problems.filter((problem) => {
    return problem.status === "Solved" && problem.difficulty === "Medium";
  }).length;
  const solvedHard = problems.filter((problem) => {
    return problem.status === "Solved" && problem.difficulty === "Hard";
  }).length;

  return {
    totalEasy,
    totalMedium,
    totalHard,
    solvedEasy,
    solvedMedium,
    solvedHard,
  };
}

export function getStats(problems: Problem[]) {
  const { totalEasy, totalMedium, totalHard, solvedEasy, solvedMedium, solvedHard } = getSolvedProblemsCnt(problems);
  const targetAchieved = solvedEasy + solvedMedium + solvedHard;
  const targetMissed = totalEasy + totalMedium + totalHard - targetAchieved;
  const avgDay = targetAchieved / 7;

  return {
    targetAchieved,
    targetMissed,
    avgDay,
  };
}