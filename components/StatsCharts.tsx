import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import React from 'react';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, PointElement, LineElement);

export interface Problem {
  status: string;
  dateSolved?: string; // ISO string
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
      const year = date.getFullYear();
      const week = Math.ceil((((date.getTime() - new Date(year,0,1).getTime()) / 86400000) + new Date(year,0,1).getDay()+1) / 7);
      const key = `${year}-W${week}`;
      weekly[key] = (weekly[key] || 0) + 1;
    }
  });
  return weekly;
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
  }

  return (
    <div className="w-full flex flex-col md:flex-row gap-8 my-8">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Daily Solved Problems</h2>
        <Line
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
            plugins: { legend: { display: false }, title: { display: false } },
          }}
        />
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl font-semibold mb-2">Week-on-Week Solved Problems</h2>
        <Bar
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
  );
}
