// components/Sidebar.tsx
'use client';
import { useState } from 'react';

interface SidebarProps {
  categories: string[];
  selectedValue?: string;
}

export default function Sidebar({ categories, selectedValue }: SidebarProps) {
  const [selected, setSelected] = useState(selectedValue || categories[0]);

  const handleClick = (cat: string) => {
    setSelected(cat);
  };

  return (
    <aside className="md:w-72 lg:w-80 flex-shrink-0">
      <div className="bg-gray-800/40 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
        <div className="px-4 py-3 bg-gray-800/60 border-b border-gray-700">
          <h2 className="font-semibold text-sm uppercase tracking-wider text-gray-300 flex items-center gap-2">
            <span className="w-1.5 h-5 bg-blue-500 rounded-full"></span>
            Categories
          </h2>
        </div>
        <nav className="py-2">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              onClick={() => handleClick(cat)}
              className={`px-4 py-2.5 transition cursor-pointer border-l-4 font-medium ${
                selected === cat
                  ? 'text-white bg-gray-700/90 border-l-blue-500'
                  : 'text-gray-300 hover:bg-gray-700/70 hover:text-white border-l-transparent hover:border-l-blue-500'
              }`}
            >
              {cat}
            </div>
          ))}
        </nav>
      </div>
    </aside>
  );
}