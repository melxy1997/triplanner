'use client';

import React from 'react';
import { Tool } from '@/app/page';

interface ToolbarProps {
  activeTool: Tool;
  setActiveTool: (tool: Tool) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({ activeTool, setActiveTool }) => {
  const tools: { name: Tool; icon: string }[] = [
    { name: 'pan', icon: 'pan_tool' },
    { name: 'draw', icon: 'draw' },
    { name: 'text', icon: 'title' },
    { name: 'upload', icon: 'upload_file' },
    { name: 'polyline', icon: 'polyline' },
  ];

  return (
    <aside className="absolute top-1/2 left-4 -translate-y-1/2 z-20">
      <div className="flex flex-col gap-1 p-1.5 bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-800 shadow-lg">
        {tools.map(({ name, icon }) => (
          <button
            key={name}
            onClick={() => setActiveTool(name)}
            className={`p-3 rounded-lg ${
              activeTool === name
                ? 'text-white bg-primary'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
            }`}
          >
            <span className="material-symbols-outlined">{icon}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};

export default Toolbar;
