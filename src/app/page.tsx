'use client';

import Canvas from '@/components/Canvas'
import Timeline from '@/components/Timeline'
import Toolbar from '@/components/Toolbar'
import TripCard from '@/components/TripCard'
import { attractions } from '@/lib/mock-data';
import { Inter } from 'next/font/google'
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export type Tool = 'pan' | 'draw' | 'text' | 'upload' | 'polyline';

export default function Home() {
  const [activeTool, setActiveTool] = useState<Tool>('pan');

  return (
    <div className="flex h-screen w-full flex-col font-display text-trip-black dark:text-white bg-background-light dark:bg-background-dark">
      <header className="flex h-16 shrink-0 items-center justify-between border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-6 z-30">
        <div className="flex items-center gap-4 text-trip-black dark:text-white">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-lg font-bold tracking-tight">Paris Adventure Plan</h2>
          <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
            <span className="material-symbols-outlined text-xl text-gray-500 dark:text-gray-400">edit</span>
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            <div className="overflow-visible w-7">
              <div className="bg-center bg-no-repeat aspect-square bg-cover border-white dark:border-background-dark bg-[#f0f2f4] text-[#617289] rounded-full flex items-center justify-center size-9 border-[3px]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuB0dk1tndRf_gSMF8_T5bDUyiorhpwzHW9uItDxD7Is_QrSh0LZ4LBMOWsEiY48j6noClNKdC6zX3vilN-IKixWsSLRz4djOWdQj7xTt-Ow1lv4v0Nt-CDNEyrHQN7p1Cyzs9VYAKOWKdywvsxvq37SR0gz1Cm4gC89OUE6JY3-DZs_5QRIPks-Uw7zGlunY2ENwxVQXSGeCtBFki5I9DBDpFra8yOjzVwR-As8mCoiy8TJ3QSGMMqPeF16rAYEWQlJAM9KnoNJMqEL")'}}></div>
            </div>
            <div className="overflow-visible w-7 -ml-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover border-white dark:border-background-dark bg-[#f0f2f4] text-[#617289] rounded-full flex items-center justify-center size-9 border-[3px]" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD1lxrY0MWK1MwcreoEZkKaT9nEXCy8ln2VHEqUhFF5GjEYqG7vyBGXJ48ebPnaGt4JLX1VlE0motQ4xFbqmsqhaEKbwEGRyBz5ezvmSgaWHXr6yQLxUtvcvwbbxc4v7sGSZiyRc7n4jk0P_7t_9jyFwpUPgria_ZNJy54TvJ3kZfkkKecWp5qdKFbhzY7bOkn401ZLN1rZIjRrpZlHaUlXr1eRIcllh_6_HKcfnDO-fLBGjYUA8mY9qS0F-CHqV9YzS84VjwoU63x8")'}}></div>
            </div>
            <div className="overflow-visible w-9 -ml-2">
              <div className="bg-center bg-no-repeat aspect-square bg-cover border-white dark:border-background-dark bg-primary/20 text-primary rounded-full flex items-center justify-center size-9 border-[3px] font-bold text-sm">
                +2
              </div>
            </div>
          </div>
          <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal gap-2">
            <span className="material-symbols-outlined text-xl">share</span>
            <span className="truncate">Share</span>
          </button>
          <div className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-10" style={{backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCrfJRu0UNgyoESaHkvT-87y6LXnvIK1mjlhXkAH7e0ymvymedeyEI9EfkP7fT8AMq-mOlG9WTfP97yBg8YxBLerCYyroMB9qvcMeKNPtJYBrUfLMpywPVi-HaDvwIn4JqtgSzz4vb396YrZL-681lgK98LPORk5zL6wu0oaM7W0pDDkSZG8MnJk-dQImbhd7DD9emej9CeYiWuVSfy_z-eTNMFcy465cNuStJTtrrJsFByq13tCPr_9CerMz4SsJ3vE3jirLgF2En1")'}}></div>
        </div>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-96 flex-shrink-0 bg-white dark:bg-background-dark border-r border-gray-200 dark:border-gray-800 flex flex-col z-10">
          <div className="flex border-b border-gray-200 dark:border-gray-800">
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium border-b-2 border-primary text-primary">
              <span className="material-symbols-outlined !text-xl">flight</span>
              <span>Flights</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined !text-xl">hotel</span>
              <span>Hotels</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 px-3 py-3 text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <span className="material-symbols-outlined !text-xl" style={{fontVariationSettings: "'FILL' 1"}}>pin_drop</span>
              <span>Attractions</span>
            </button>
          </div>
          <div className="p-4 border-b border-gray-200 dark:border-gray-800">
            <div className="relative">
              <div className="text-gray-500 dark:text-gray-400 absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <span className="material-symbols-outlined !text-2xl">search</span>
              </div>
              <input className="form-input w-full rounded-lg text-trip-black dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border-none bg-gray-100 dark:bg-gray-800 h-11 placeholder:text-gray-500 dark:placeholder:text-gray-400 pl-11 text-sm font-normal" placeholder="Search Flights, Hotels, Attractions..." />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {attractions.map((attraction, index) => (
              <TripCard key={index} {...attraction} />
            ))}
          </div>
          <div className="p-4 border-t border-gray-200 dark:border-gray-800">
            <div className="aspect-[4/3] bg-gray-200 dark:bg-gray-800 rounded-lg flex items-center justify-center text-gray-500 dark:text-gray-400">
              <span className="material-symbols-outlined">map</span>
              <span className="ml-2 text-sm">Map Preview</span>
            </div>
          </div>
        </aside>
        <main className="flex-1 relative overflow-hidden bg-background-light dark:bg-gray-900/50">
          <div className="absolute inset-0 bg-[radial-gradient(#d1d5db_1px,transparent_1px)] dark:bg-[radial-gradient(#4b5563_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <Toolbar activeTool={activeTool} setActiveTool={setActiveTool} />
          <Canvas activeTool={activeTool} />
          <Timeline />
        </main>
      </div>
    </div>
  )
}
