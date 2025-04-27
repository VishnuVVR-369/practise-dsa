import {
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import type { SubGroup, Problem } from "@/app/consts";
import ProblemRow from "./ProblemRow";

interface SubgroupAccordionProps {
  subgroup: SubGroup;
  problems: Problem[];
  onStatusChange?: (id: string, newStatus: string) => void;
}

export default function SubgroupAccordion({
  subgroup,
  problems,
  onStatusChange,
}: SubgroupAccordionProps) {
  // Calculate solved and total for this subgroup
  const subgroupProblems = subgroup.problems.map((pid: string) => problems.find((pr: Problem) => String(pr.id) === pid)).filter(Boolean);
  const totalCount = subgroupProblems.length;
  const solvedCount = subgroupProblems.filter((p) => p && p.status === "Solved").length;

  return (
    <AccordionItem
      key={subgroup.id}
      value={subgroup.id}
      className="border rounded mb-2"
    >
      <AccordionTrigger className="text-base font-semibold bg-gray-50 px-2 rounded flex items-center justify-between">
        <span>{subgroup.title}</span>
        <span className="ml-2 text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded">
          {solvedCount} / {totalCount} Solved
        </span>
      </AccordionTrigger>
      <AccordionContent className="bg-white">
        <div className="w-full overflow-x-auto rounded shadow mt-2">
          <table className="min-w-full divide-y divide-gray-200 bg-white rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap"></th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Title
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Difficulty
                </th>
                <th className="px-4 py-3 text-left text-xs font-bold text-gray-700 uppercase tracking-wider whitespace-nowrap">
                  Link
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {subgroup.problems.map((pid: string) => {
                const p = problems.find((pr: Problem) => String(pr.id) === pid);
                if (!p) return null;
                return (
                  <ProblemRow
                    key={p.id}
                    problem={p}
                    onStatusChange={onStatusChange}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
