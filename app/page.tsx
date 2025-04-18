"use client"

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { topics, problems, subgroups } from "@/app/consts";
import type { Problem, SubGroup } from "@/app/consts";


export default function Home() {
  const [selectedTopic, setSelectedTopic] = useState<string | null>(null);

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-2">Learn DSA the right way</h1>
      <p className="text-lg text-muted-foreground mb-4">
        Your Gateway to learn DSA 🔥
      </p>
      <p className="mb-6">Start Solving</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {topics.map((topic) => (
          <Card key={topic} className="bg-blue-100">
            <CardHeader className="flex justify-between items-center">
              <CardTitle>{topic}</CardTitle>
              <Button size="sm" onClick={() => setSelectedTopic(topic)}>
                Start Now
              </Button>
            </CardHeader>
            <CardDescription className="pl-6">
              Total Questions {problems.filter((p) => p.tags[0] === topic).length}
            </CardDescription>
            <CardDescription className="pl-6 italic">
              Not yet started
            </CardDescription>
          </Card>
        ))}
      </div>

      {selectedTopic && (
        <div className="mt-12">
          <Accordion type="single">
            <AccordionItem value={selectedTopic}>
              <AccordionTrigger className="text-xl font-semibold">
                {selectedTopic}
              </AccordionTrigger>
              <AccordionContent>
                {(() => {
                  const mainGroup = subgroups.find(group => group.title === selectedTopic);
                  if (!mainGroup || !mainGroup.subgroups) return <div className="text-gray-400 italic">No subgroups found.</div>;
                  return (
                    <Accordion type="multiple" className="mt-4">
                      {mainGroup.subgroups.map((sg: SubGroup) => (
                        <AccordionItem key={sg.id} value={sg.id} className="border rounded mb-2">
                          <AccordionTrigger className="text-base font-semibold bg-gray-50 px-2 rounded">
                            {sg.title}
                          </AccordionTrigger>
                          <AccordionContent className="bg-white">
                            <div className="w-full overflow-x-auto rounded shadow mt-2">
                              <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
                                <thead className="bg-gray-100">
                                  <tr>
                                    <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Title</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Difficulty</th>
                                    <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">Link</th>
                                  </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                  {sg.problems.map((pid: string) => {
                                    const p = problems.find((pr: Problem) => String(pr.id) === pid);
                                    if (!p) return null;
                                    return (
                                      <tr key={p.id} className="hover:bg-blue-50 transition-colors">
                                        <td className="py-3 px-2 text-center">
                                          <input
                                            type="checkbox"
                                            onClick={() => console.log(p.id)}
                                            className="form-checkbox h-4 w-4 text-blue-600 cursor-pointer"
                                          />
                                        </td>
                                        <td className="py-3 px-4 text-sm font-medium max-w-xs break-words">{p.title}</td>
                                        <td className={`py-3 px-4 text-sm font-semibold whitespace-nowrap ${p.difficulty === "Easy"
                                          ? "text-green-600"
                                          : p.difficulty === "Medium"
                                            ? "text-orange-500"
                                            : "text-red-500"
                                          }`}>
                                          {p.difficulty}
                                        </td>
                                        <td className="py-3 px-4 text-sm whitespace-nowrap">
                                          {p.problemLink && p.problemLink !== "NA" ? (
                                            p.problemLink.includes("leetcode.com") ? (
                                              <Link
                                                href={p.problemLink}
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
                                                href={p.problemLink}
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
                                  })}
                                </tbody>
                              </table>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  );
                })()}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      )}
    </main>
  );
}
