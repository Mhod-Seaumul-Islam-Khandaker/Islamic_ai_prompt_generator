// components/TopNav.tsx
'use client';
import { useState } from 'react';

interface TopNavProps {
  options: string[];
  selectedValue?: string;
}

export default function TopNav({ options, selectedValue }: TopNavProps) {
  const [selected, setSelected] = useState(selectedValue || options[0]);

  const handleClick = (opt: string) => {
    setSelected(opt);
  };

  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-center space-x-6 md:space-x-12">
        {options.map((opt) => (
          <span
            key={opt}
            onClick={() => handleClick(opt)}
            className={`font-medium cursor-pointer transition px-3 py-1 rounded-lg border-2 ${
              selected === opt
                ? 'text-white bg-blue-600 border-blue-500'
                : 'text-gray-300 hover:text-blue-400 hover:bg-gray-800 border-transparent'
            }`}
          >
            {opt}
          </span>
        ))}
      </div>
    </header>
  );
}
