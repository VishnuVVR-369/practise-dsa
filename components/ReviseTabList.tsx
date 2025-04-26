import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

interface Problem {
  id: string;
  title: string;
  problemLink?: string;
  articleLink?: string;
  status?: string;
  [key: string]: any;
}

interface ReviseTabListProps {
  problems: Problem[];
  label: string;
}

export default function ReviseTabList({ problems, label }: ReviseTabListProps) {
  if (!problems || problems.length === 0) {
    return (
      <Card className="mb-4">
        <CardHeader>
          <CardTitle>{label}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>No problems solved for this date.</CardDescription>
        </CardContent>
      </Card>
    );
  }
  return (
    <div className="mb-4">
      <div className="mb-2">
        <span className="text-xl font-semibold">{label}</span>
        <span className="ml-2 text-muted-foreground text-sm">
          Total Problems {problems.length}
        </span>
      </div>
      <div className="w-full overflow-x-auto rounded shadow mt-2">
        <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Title
              </th>
              <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Problem Link
              </th>
              <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {problems.map((problem) => (
              <tr
                key={problem.id}
                className="hover:bg-blue-50 transition-colors"
              >
                <td className="py-3 px-2 text-base font-medium">
                  {problem.title}
                </td>
                <td className="py-3 px-2">
                  {(() => {
                    const url = problem.problemLink;
                    const isValid =
                      typeof url === "string" && /^https?:\/\//.test(url);
                    if (!isValid) {
                      return <span className="text-gray-400">NA</span>;
                    }
                    if (url.includes("leetcode.com")) {
                      return (
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center"
                          title="View on LeetCode"
                        >
                          <Image
                            src="/leetcode.svg"
                            alt="LeetCode"
                            className="w-7 h-7"
                            width={24}
                            height={24}
                          />
                        </a>
                      );
                    }
                    return (
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        <button className="px-3 py-1 rounded bg-blue-100 text-blue-700 hover:bg-blue-200 text-xs font-semibold">
                          Visit
                        </button>
                      </a>
                    );
                  })()}
                </td>
                <td className="py-3 px-2">
                  {problem.status === "Solved" ? (
                    <span className="inline-block px-2 py-1 rounded bg-green-100 text-green-700 text-xs font-semibold">
                      Solved
                    </span>
                  ) : (
                    <span className="inline-block px-2 py-1 rounded bg-gray-100 text-gray-700 text-xs font-semibold">
                      Unsolved
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
