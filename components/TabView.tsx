import React, { useState, ReactNode } from "react";

interface Tab {
  label: string;
  content: ReactNode;
}

interface TabViewProps {
  tabs: Tab[];
  className?: string;
}

export default function TabView({ tabs, className }: TabViewProps) {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={className}>
      <div className="flex border-b mb-4">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-4 py-2 -mb-px border-b-2 font-medium focus:outline-none transition-colors duration-200 ${
              idx === activeTab
                ? "border-blue-600 text-blue-600"
                : "border-transparent text-gray-600 hover:text-blue-600"
            }`}
            onClick={() => setActiveTab(idx)}
            type="button"
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div>{tabs[activeTab].content}</div>
    </div>
  );
}
