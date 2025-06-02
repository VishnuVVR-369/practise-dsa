import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import type { Problem } from "@/lib/types";
import { useMemo } from "react";
import { groupProblemsByDate } from "@/lib/utils";

interface WeeklyProgressChartProps {
  data: Problem[];
}

function NoDataChart() {
  return (
    <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        📊 Weekly Growth
      </h3>
      <p className="text-slate-400 text-sm text-center mb-6">
        Every week, you&apos;re getting stronger!
      </p>
      <div className="h-80 flex items-center justify-center text-slate-400">
        Start solving problems to see your progress!
      </div>
    </div>
  );
}

const WeeklyProgressChart = ({ data }: WeeklyProgressChartProps) => {
  const { chartData, hasSolvedProblems } = useMemo(() => {
    if (!data || data.length === 0) {
      return { chartData: [], hasSolvedProblems: false };
    }
    const problemsByDate = groupProblemsByDate(data);
    const solved = Object.values(problemsByDate).flat();
    if (solved.length === 0) {
      return { chartData: [], hasSolvedProblems: false };
    }
    function getISOWeekAndYear(date: Date): { week: number; year: number } {
      const temp = new Date(date.getTime());
      temp.setHours(0, 0, 0, 0);
      temp.setDate(temp.getDate() + 3 - ((temp.getDay() + 6) % 7));
      const week1 = new Date(temp.getFullYear(), 0, 4);
      const weekNumber =
        1 +
        Math.round(
          ((temp.getTime() - week1.getTime()) / 86400000 -
            3 +
            ((week1.getDay() + 6) % 7)) /
            7
        );
      return { week: weekNumber, year: temp.getFullYear() };
    }
    function getStartAndEndOfISOWeek(
      week: number,
      year: number
    ): { start: Date; end: Date } {
      const simple = new Date(year, 0, 1 + (week - 1) * 7);
      const dow = simple.getDay();
      const ISOweekStart = new Date(simple);
      if (dow <= 4)
        ISOweekStart.setDate(simple.getDate() - simple.getDay() + 1);
      else ISOweekStart.setDate(simple.getDate() + 8 - simple.getDay());
      const ISOweekEnd = new Date(ISOweekStart);
      ISOweekEnd.setDate(ISOweekStart.getDate() + 6);
      return { start: ISOweekStart, end: ISOweekEnd };
    }

    const countsByWeek: Record<
      string,
      { count: number; week: number; year: number }
    > = {};
    solved.forEach((problem) => {
      const date = new Date(problem.solvedAt!);
      const { week, year } = getISOWeekAndYear(date);
      const key = `${year}-W${week}`;
      if (!countsByWeek[key]) countsByWeek[key] = { count: 0, week, year };
      countsByWeek[key].count += 1;
    });
    const weekKeys = Object.keys(countsByWeek).sort();
    const chartData = weekKeys.map((key) => {
      const { week, year, count } = countsByWeek[key];
      const { start, end } = getStartAndEndOfISOWeek(week, year);
      const label = `${start.toISOString().slice(0, 10)} ~ ${end
        .toISOString()
        .slice(0, 10)}`;
      return {
        week: label,
        solved: count,
      };
    });
    return { chartData, hasSolvedProblems: true };
  }, [data]);

  if (!hasSolvedProblems) return <NoDataChart />;

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
      <h3 className="text-xl font-bold text-white mb-4 text-center">
        📊 Weekly Growth
      </h3>
      <p className="text-slate-400 text-sm text-center mb-6">
        Every week, you&apos;re getting stronger!
      </p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="week"
              stroke="#9CA3AF"
              fontSize={12}
              interval={0}
              tick={{ fontSize: 12 }}
              angle={-15}
              textAnchor="end"
            />
            <YAxis stroke="#9CA3AF" fontSize={12} />
            <Tooltip
              formatter={(value) => [value, "Problems Solved"]}
              labelStyle={{ color: "#F9FAFB" }}
              contentStyle={{
                backgroundColor: "#1F2937",
                border: "1px solid #374151",
                borderRadius: "8px",
                color: "#F9FAFB",
              }}
            />
            <Bar
              dataKey="solved"
              fill="url(#colorGradient)"
              radius={[6, 6, 0, 0]}
            />
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.8} />
              </linearGradient>
            </defs>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WeeklyProgressChart;
