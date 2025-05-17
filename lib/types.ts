export enum DIFFICULTY {
  Easy = "Easy",
  Medium = "Medium",
  Hard = "Hard",
  Theory = "Theory"
}

export enum PROBLEM_STATUS {
  Unsolved = "Unsolved",
  Solved = "Solved"
}

export enum PLATFORM {
  LeetCode = "LeetCode",
  SPOJ = "SPOJ",
  CodeChef = "CodeChef",
  CodeForces = "CodeForces",
  Naukri = "Naukri",
  GeeksForGeeks = "GeeksForGeeks",
  AtCoder = "AtCoder",
  CSES = "CSES"
}

export interface Problem {
  id: number;
  title: string;
  difficulty: string;
  status: string;
  problemLink: string | null;
  platform: string | null;
  tag: string;
  group: string;
  subgroup: string;
  solvedAt: Date | null;
  revisedAt: Date[] | null;
  completionDifficulty?: string[] | null;
}