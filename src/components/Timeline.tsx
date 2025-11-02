'use client';

import React from 'react';

const Timeline: React.FC = () => {
  return (
    <aside className="absolute top-4 right-4 bottom-4 z-20 w-96 flex flex-col bg-white/80 dark:bg-background-dark/80 backdrop-blur-sm rounded-xl border border-gray-200 dark:border-gray-800 shadow-2xl">
      <div className="flex items-center justify-between p-3 border-b border-gray-200 dark:border-gray-800">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-gray-600 dark:text-gray-300">calendar_month</span>
          <h3 className="font-bold text-trip-black dark:text-white">Trip Timeline</h3>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined !text-xl">chevron_left</span>
          </button>
          <span className="font-semibold text-sm whitespace-nowrap">Oct 24 - 30</span>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined !text-xl">chevron_right</span>
          </button>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-300">
            <span className="material-symbols-outlined !text-xl">unfold_less</span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-2 space-y-4">
        <div>
          <h4 className="font-semibold px-2 py-1">Day 1: Mon, Oct 24</h4>
          <div className="mt-1 p-2 space-y-2 rounded-lg">
            <div className="flex items-start gap-2 bg-white dark:bg-gray-800 rounded-lg p-2 shadow-sm border border-gray-200 dark:border-gray-700">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 pt-0.5">3 PM</span>
              <div className="flex-1">
                <p className="text-sm font-semibold">Eiffel Tower Visit</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Booked</p>
              </div>
              <button className="p-1 -mr-1 -mt-1 rounded hover:bg-gray-100 dark:hover:bg-gray-700">
                <span className="material-symbols-outlined !text-base text-gray-500 dark:text-gray-400">more_vert</span>
              </button>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-semibold px-2 py-1">Day 2: Tue, Oct 25</h4>
          <div className="mt-1 p-2">
            <div className="flex items-center justify-center h-20 text-sm text-gray-400 dark:text-gray-500 border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg">
              Drag items here
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Timeline;
