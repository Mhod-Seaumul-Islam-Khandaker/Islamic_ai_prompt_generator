// app/page.tsx
export default function HomePage() {
  // Template data: each card has a title and a description
  // Showing two of each template as per "Template 1 Template 1, Template 2 Template 2, Template 3 Template 3"
  const templates = [
    { id: 1, title: "Template 1", description: "Clean & professional", variant: "Classic" },
    { id: 2, title: "Template 1", description: "Modern & bold", variant: "Modern" },
    { id: 3, title: "Template 2", description: "Minimalist", variant: "Light" },
    { id: 4, title: "Template 2", description: "Corporate", variant: "Dark" },
    { id: 5, title: "Template 3", description: "Creative", variant: "Artistic" },
    { id: 6, title: "Template 3", description: "Technical", variant: "Precise" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Navigation Bar - Options */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-center space-x-6 md:space-x-12">
          {["Option 1", "Option 2", "Option 3"].map((opt) => (
            <span
              key={opt}
              className="text-gray-300 font-medium cursor-pointer hover:text-blue-400 transition px-3 py-1 rounded-lg hover:bg-gray-800"
            >
              {opt}
            </span>
          ))}
        </div>
      </header>

      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          {/* ========== LEFT SIDEBAR (Categories / Options) ========== */}
          <aside className="md:w-72 lg:w-80 flex-shrink-0">
            <div className="bg-gray-800/40 rounded-xl border border-gray-700 overflow-hidden shadow-lg">
              <div className="px-4 py-3 bg-gray-800/60 border-b border-gray-700">
                <h2 className="font-semibold text-sm uppercase tracking-wider text-gray-300 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-blue-500 rounded-full"></span>
                  Categories
                </h2>
              </div>
              <nav className="py-2">
                {["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"].map(
                  (cat, idx) => (
                    <div
                      key={idx}
                      className="px-4 py-2.5 text-gray-300 hover:bg-gray-700/70 hover:text-white transition cursor-pointer border-l-3 border-l-transparent hover:border-l-blue-500 font-medium"
                    >
                      {cat}
                    </div>
                  )
                )}
              </nav>
            </div>
          </aside>

          {/* ========== RIGHT MAIN AREA (Template Cards Grid) ========== */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white">Templates</h1>
              <p className="text-gray-400 text-sm">Choose a template to get started</p>
            </div>

            {/* Grid of boxed cards - mimicking Word layout */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className="group bg-gray-800/40 rounded-xl border border-gray-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:border-gray-600 hover:scale-[1.02] cursor-pointer"
                >
                  {/* Image placeholder (box with icon) */}
                  <div className="relative h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                    <svg
                      className="w-12 h-12 text-gray-500 group-hover:text-gray-400 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="absolute bottom-2 right-2 text-xs text-gray-500 bg-black/50 px-2 py-0.5 rounded">
                      {template.variant}
                    </span>
                  </div>
                  {/* Text below image */}
                  <div className="p-4 border-t border-gray-700/50">
                    <h3 className="font-bold text-lg text-gray-100">{template.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Optional hint */}
            <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
              Click any template to preview
            </div>
          </div>
        </div>

        {/* ========== FOOTER ========== */}
        <footer className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-sm">© 2024 Template Hub</p>
            <div className="flex gap-5">
              <span className="text-gray-600 text-xs hover:text-gray-400 cursor-pointer">Privacy</span>
              <span className="text-gray-600 text-xs hover:text-gray-400 cursor-pointer">Terms</span>
              <span className="text-gray-600 text-xs hover:text-gray-400 cursor-pointer">Contact</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}