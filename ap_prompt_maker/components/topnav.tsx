// components/TopNav.tsx
interface TopNavProps {
  options: string[];
}

export default function TopNav({ options }: TopNavProps) {
  return (
    <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
      <div className="container mx-auto px-4 py-3 flex justify-center space-x-6 md:space-x-12">
        {options.map((opt) => (
          <span
            key={opt}
            className="text-gray-300 font-medium cursor-pointer hover:text-blue-400 transition px-3 py-1 rounded-lg hover:bg-gray-800"
          >
            {opt}
          </span>
        ))}
      </div>
    </header>
  );
}
