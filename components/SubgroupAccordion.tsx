import { AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import type { SubGroup, Problem } from "@/app/consts";
import ProblemRow from "./ProblemRow";

interface SubgroupAccordionProps {
  subgroup: SubGroup;
  problems: Problem[];
}

export default function SubgroupAccordion({ subgroup, problems }: SubgroupAccordionProps) {
  return (
    <AccordionItem key={subgroup.id} value={subgroup.id} className="border rounded mb-2">
      <AccordionTrigger className="text-base font-semibold bg-gray-50 px-2 rounded">
        {subgroup.title}
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
              {subgroup.problems.map((pid: string) => {
                const p = problems.find((pr: Problem) => String(pr.id) === pid);
                if (!p) return null;
                return <ProblemRow key={p.id} problem={p} />;
              })}
            </tbody>
          </table>
        </div>
      </AccordionContent>
    </AccordionItem>
  );
}
