import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import annotationPlugin from 'chartjs-plugin-annotation';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement, annotationPlugin);

export interface Problem {
  status: string;
  dateSolved?: string; // ISO string
  difficulty?: 'Easy' | 'Medium' | 'Hard';
}

function groupByDay(problems: Problem[]) {
  const daily: Record<string, number> = {};
  problems.forEach((p) => {
    if (p.status === 'Solved' && p.dateSolved) {
      const day = p.dateSolved.slice(0, 10); // YYYY-MM-DD
      daily[day] = (daily[day] || 0) + 1;
    }
  });
  return daily;
}

function groupByWeek(problems: Problem[]) {
  const weekly: Record<string, number> = {};
  problems.forEach((p) => {
    if (p.status === 'Solved' && p.dateSolved) {
      const date = new Date(p.dateSolved);
      // ISO week calculation (weeks start on Monday)
      // Copy date so don't modify original
      const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
      // Set to nearest Thursday: current date + 4 - current day number (Monday=1, Sunday=7)
      const dayNum = d.getUTCDay() === 0 ? 7 : d.getUTCDay();
      d.setUTCDate(d.getUTCDate() + 4 - dayNum);
      // Get first day of year
      const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
      // Calculate ISO week number
      const week = Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
      const year = d.getUTCFullYear();
      const key = `${year}-W${week}`;
      weekly[key] = (weekly[key] || 0) + 1;
    }
  });
  return weekly;
}

function getLongestStreak(data: number[]): number {
  let maxStreak = 0;
  let currentStreak = 0;
  for (let i = 0; i < data.length; i++) {
    if (data[i] > 0) {
      currentStreak++;
      if (currentStreak > maxStreak) maxStreak = currentStreak;
    } else {
      currentStreak = 0;
    }
  }
  return maxStreak;
}

function populationStdDev(data: number[]): number {
  if (data.length === 0) return 0;
  const mean = data.reduce((a, b) => a + b, 0) / data.length;
  const variance = data.reduce((sum, x) => sum + Math.pow(x - mean, 2), 0) / data.length;
  return Math.sqrt(variance);
}

export default function StatsCharts({ problems }: { problems: Problem[] }) {
  const daily = groupByDay(problems);
  const weekly = groupByWeek(problems);

  // --- Fill missing days ---
  let dailyLabels: string[] = [];
  let dailyData: number[] = [];
  if (Object.keys(daily).length > 0) {
    const firstDay = Object.keys(daily).sort()[0];
    const today = new Date();
    const endDay = today.toISOString().slice(0, 10);
    const d = new Date(firstDay);
    const days: string[] = [];
    while (d.toISOString().slice(0, 10) <= endDay) {
      days.push(d.toISOString().slice(0, 10));
      d.setDate(d.getDate() + 1);
    }
    dailyLabels = days;
    dailyData = days.map(day => daily[day] || 0);
  }

  // --- Fill missing weeks ---
  let weeklyLabels: string[] = [];
  let weeklyData: number[] = [];
  if (Object.keys(weekly).length > 0) {
    const firstKey = Object.keys(weekly).sort()[0];
    const [firstYear, firstW] = firstKey.split('-W');
    const firstWeek = parseInt(firstW, 10);
    const firstYearNum = parseInt(firstYear, 10);
    const today = new Date();
    const currYear = today.getFullYear();
    // Get current week number
    const oneJan = new Date(currYear, 0, 1);
    const numberOfDays = Math.floor((today.getTime() - oneJan.getTime()) / 86400000);
    const currWeek = Math.ceil((numberOfDays + oneJan.getDay() + 1) / 7);
    // Build week keys
    let y = firstYearNum, w = firstWeek;
    const weeks: string[] = [];
    while (y < currYear || (y === currYear && w <= currWeek)) {
      weeks.push(`${y}-W${w}`);
      w++;
      // Handle week rollover
      if (w > 53) { y++; w = 1; }
    }
    weeklyLabels = weeks;
    weeklyData = weeks.map(week => weekly[week] || 0);
    console.log(weeklyLabels, weeklyData);
  }

  // Count solved problems by difficulty
  const solvedEasy = problems.filter(p => p.status === 'Solved' && p.difficulty === 'Easy').length;
  const solvedMedium = problems.filter(p => p.status === 'Solved' && p.difficulty === 'Medium').length;
  const solvedHard = problems.filter(p => p.status === 'Solved' && p.difficulty === 'Hard').length;

  return (
    <>
              {/* Enhanced Daily Stats Summary */}
              <div className="mb-6">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {/* Target Achieved */}
            <div className="flex flex-col items-center bg-white/80 border border-green-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">🎯</span>
              <span className="text-xl font-bold text-green-700">{dailyData.filter(x => x >= 8).length}</span>
              <span className="text-xs text-green-800 font-medium mt-1">Target Achieved</span>
            </div>
            {/* Target Missed */}
            <div className="flex flex-col items-center bg-white/80 border border-red-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">❗</span>
              <span className="text-xl font-bold text-red-700">{dailyData.filter(x => x > 0 && x < 8).length}</span>
              <span className="text-xs text-red-800 font-medium mt-1">Target Missed</span>
            </div>
            {/* Average/Day */}
            <div className="flex flex-col items-center bg-white/80 border border-blue-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">📊</span>
              <span className="text-xl font-bold text-blue-700">{dailyData.length ? (dailyData.reduce((a, b) => a + b, 0) / dailyData.length).toFixed(2) : 0}</span>
              <span className="text-xs text-blue-800 font-medium mt-1">Avg/Day</span>
            </div>
            {/* Streak */}
            <div className="flex flex-col items-center bg-white/80 border border-yellow-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">🔥</span>
              <span className="text-xl font-bold text-yellow-700">{getLongestStreak(dailyData)}</span>
              <span className="text-xs text-yellow-800 font-medium mt-1">Longest Streak</span>
            </div>
            {/* Consistency (Std Dev) */}
            <div className="flex flex-col items-center bg-white/80 border border-purple-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">📈</span>
              <span className="text-xl font-bold text-purple-700">{dailyData.length ? populationStdDev(dailyData).toFixed(2) : 0}</span>
              <span className="text-xs text-purple-800 font-medium mt-1">Consistency</span>
            </div>
            {/* Easy */}
            <div className="flex flex-col items-center bg-white/80 border border-gray-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">🟢</span>
              <span className="text-xl font-bold text-gray-700">{solvedEasy} / {problems.filter(p => p.difficulty === 'Easy').length}</span>
              <span className="text-xs text-gray-700 font-medium mt-1">Easy</span>
            </div>
            {/* Medium */}
            <div className="flex flex-col items-center bg-white/80 border border-orange-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">🟠</span>
              <span className="text-xl font-bold text-orange-700">{solvedMedium} / {problems.filter(p => p.difficulty === 'Medium').length}</span>
              <span className="text-xs text-orange-700 font-medium mt-1">Medium</span>
            </div>
            {/* Hard */}
            <div className="flex flex-col items-center bg-white/80 border border-red-200 rounded-xl shadow-sm p-4 transition-transform hover:-translate-y-1 hover:shadow-lg">
              <span className="text-3xl mb-1">🔴</span>
              <span className="text-xl font-bold text-red-700">{solvedHard} / {problems.filter(p => p.difficulty === 'Hard').length}</span>
              <span className="text-xs text-red-700 font-medium mt-1">Hard</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-8 my-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Daily Solved Problems</h2>
        <Line
          height={240}
          data={{
            labels: dailyLabels,
            datasets: [{
              label: 'Problems Solved',
              data: dailyData,
              fill: false,
              borderColor: '#3b82f6',
              backgroundColor: '#60a5fa',
              tension: 0.3,
            }],
          }}
          options={{
            responsive: true,
            plugins: {
              legend: { display: false },
              title: { display: false },
              annotation: {
                annotations: {
                  targetLine: {
                    type: 'line',
                    yMin: 8,
                    yMax: 8,
                    borderColor: '#f59e42',
                    borderWidth: 2,
                    borderDash: [6, 6],
                    label: {
                      display: true,
                      content: 'Target (8)',
                      position: 'end',
                      color: '#f59e42',
                      font: { weight: 'bold' },
                    },
                  },
                },
              },
            },
            scales: {
              y: {
                beginAtZero: true,
                suggestedMax: Math.max(8, ...dailyData) + 2,
              },
            },
          }}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Week-on-Week Solved Problems</h2>
        <Bar
          height={260}
          data={{
            labels: weeklyLabels,
            datasets: [{
              label: 'Problems Solved',
              data: weeklyData,
              backgroundColor: '#34d399',
            }],
          }}
          options={{
            responsive: true,
            plugins: { legend: { display: false }, title: { display: false } },
          }}
        />
      </div>
    </div>
    </>
    
  );
}
