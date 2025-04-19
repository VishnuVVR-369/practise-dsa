import { Accordion } from "@/components/ui/accordion";
import type { SubGroup, Problem } from "@/app/consts";
import SubgroupAccordion from "./SubgroupAccordion";

interface SubgroupGroup {
  id: string;
  title: string;
  description: string;
  subgroups: SubGroup[];
}

interface ProblemsAccordionProps {
  selectedTopic: string;
  subgroups: SubgroupGroup[];
  problems: Problem[];
  onStatusChange?: (id: string, newStatus: string) => void;
}

export default function ProblemsAccordion({
  selectedTopic,
  subgroups,
  problems,
  onStatusChange,
}: ProblemsAccordionProps & {
  onStatusChange?: (id: string, newStatus: string) => void;
}) {
  const mainGroup = subgroups.find((group) => group.title === selectedTopic);
  if (!mainGroup || !mainGroup.subgroups)
    return <div className="text-gray-400 italic">No subgroups found.</div>;
  return (
    <Accordion type="multiple" className="mt-4">
      {mainGroup.subgroups.map((sg: SubGroup) => (
        <SubgroupAccordion
          key={sg.id}
          subgroup={sg}
          problems={problems}
          onStatusChange={onStatusChange}
        />
      ))}
    </Accordion>
  );
}
