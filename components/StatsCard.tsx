import { Card, CardHeader, CardDescription, CardTitle } from "@/components/ui/card";
import { ReactNode } from "react";

interface StatsCardProps {
  icon: ReactNode;
  value: ReactNode;
  title: string;
  subtitle: string;
}

export default function StatsCard({ icon, value, title, subtitle }: StatsCardProps) {
  return (
    <div className="max-w-3xs max-h-3xs hover:scale-105 transition-all duration-300 cursor-pointer">
      <Card style={{ backgroundColor: "var(--background-secondary)" }}>
        <CardHeader className="flex items-center justify-center">
          {icon}
        </CardHeader>
        <CardTitle className="text-3xl flex items-center justify-center">{value}</CardTitle>
        <CardDescription className="text-xl flex items-center justify-center">{title}</CardDescription>
        {subtitle && (
          <div className="text-base flex items-center justify-center text-gray-400 mt-1">{subtitle}</div>
        )}
      </Card>
    </div>
  );
}
