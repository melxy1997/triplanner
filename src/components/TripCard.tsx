'use client';

import React from 'react';

export interface TripCardProps {
  imageUrl: string;
  title: string;
  description: string;
  rating: number;
}

const TripCard: React.FC<TripCardProps> = ({ imageUrl, title, description, rating }) => {
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData('text/plain', JSON.stringify({ imageUrl, title, description }));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className="group flex flex-col gap-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-background-light dark:bg-gray-800/50 hover:shadow-md transition-shadow cursor-grab"
    >
      <div className="flex items-start gap-4">
        <img className="w-20 h-20 rounded-lg object-cover" src={imageUrl} alt={title} />
        <div className="flex-1">
          <h4 className="font-bold text-sm text-trip-black dark:text-white">{title}</h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">{description}</p>
          <div className="flex items-center gap-1 text-sm text-yellow-500 mt-2">
            <span className="material-symbols-outlined !text-base">star</span>
            <span>{rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripCard;
