import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from 'recharts';
import { useMemo } from 'react';
import { groupProblemsByDate } from '@/lib/utils';
import { Problem } from '@/lib/types';

interface DailyProgressChartProps {
  data: Problem[];
}

function NoDataChart() {
  return (
    <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
      <h3 className="text-xl font-bold text-white mb-4 text-center">📊 Daily Progress</h3>
      <p className="text-slate-400 text-sm text-center mb-6">Your consistency is your superpower!</p>
      <div className="h-80 flex items-center justify-center text-slate-400">Start solving problems to see your progress!</div>
    </div>
  );
}

const DailyProgressChart = ({ data }: DailyProgressChartProps) => {
  const { chartData, hasSolvedProblems } = useMemo(() => {
    if (!data || data.length === 0) {
      return { chartData: [], hasSolvedProblems: false };
    }
    const problemsByDate = groupProblemsByDate(data);
    const solved = Object.values(problemsByDate).flat();
    if (solved.length === 0) {
      return { chartData: [], hasSolvedProblems: false };
    }
    const chartData = Object.entries(problemsByDate).map(([date, problems]) => ({
      date,
      count: problems.length,
    }));
    chartData.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
    return { chartData, hasSolvedProblems: true };
  }, [data]);

  if (!hasSolvedProblems) return <NoDataChart />;

  return (
    <div className="bg-slate-800/50 rounded-xl shadow-xl p-6 mb-6 border border-slate-700 motivational-glow">
      <h3 className="text-xl font-bold text-white mb-4 text-center">📈 Daily Progress</h3>
      <p className="text-slate-400 text-sm text-center mb-6">Your consistency is your superpower!</p>
      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
            <XAxis
              dataKey="date"
              stroke="#9CA3AF"
              fontSize={12}
              tickFormatter={(value) => value.slice(5)}
              minTickGap={10}
            />
            <YAxis stroke="#9CA3AF" fontSize={12} allowDecimals={false} />
            <Tooltip
              labelFormatter={(value) => {
                const d = new Date(value);
                return d.toLocaleDateString();
              }}
              formatter={(value) => [value, 'Problems Solved']}
              contentStyle={{
                backgroundColor: '#1F2937',
                border: '1px solid #374151',
                borderRadius: '8px',
                color: '#F9FAFB'
              }}
            />
            <ReferenceLine 
              y={8} 
              stroke="#EF4444" 
              strokeDasharray="5 5" 
              label={{ value: "Daily Target", position: "insideTopRight", fill: "#EF4444" }}
            />
            <Line 
              type="monotone" 
              dataKey="count" 
              stroke="#10B981" 
              strokeWidth={3}
              dot={{ fill: '#10B981', strokeWidth: 1, r: 3 }}
              activeDot={{ r: 8, stroke: '#10B981', strokeWidth: 2, fill: '#10B981' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DailyProgressChart;