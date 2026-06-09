// app/page.tsx
export default function HomePage() {
  // 1. ALL CONTENT DATA (Edit only these arrays/objects)

  const navOptions = ["Option 1", "Option 2", "Option 3"];

  const categories = ["Category 1", "Category 2", "Category 3", "Category 4", "Category 5"];

  const pageHeader = {
    title: "AI Template Hub",
    description: "Choose a template based on your needs",
  };

  // Template cards – each card now has:
  // - id, title, description, variant (as before)
  // - imageUrl: the thumbnail image (will be cropped to fixed size)
  // - url: where the user goes when clicking the card
  const templates = [
    {
      id: 1,
      title: "Template 1",
      description: "Clean & professional",
      variant: "Classic",
      imageUrl: "https://picsum.photos/id/1/400/300",   // random placeholder image
      url: "https://example.com/template1",
    },
    {
      id: 2,
      title: "Template 1",
      description: "Modern & bold",
      variant: "Modern",
      imageUrl: "https://picsum.photos/id/20/400/300",
      url: "https://example.com/template1-modern",
    },
    {
      id: 3,
      title: "Template 2",
      description: "Minimalist",
      variant: "Light",
      imageUrl: "https://picsum.photos/id/30/400/300",
      url: "https://example.com/template2",
    },
    {
      id: 4,
      title: "Template 2",
      description: "Corporate",
      variant: "Dark",
      imageUrl: "https://picsum.photos/id/40/400/300",
      url: "https://example.com/template2-corporate",
    },
    {
      id: 5,
      title: "Template 3",
      description: "Creative",
      variant: "Artistic",
      imageUrl: "https://picsum.photos/id/50/400/300",
      url: "https://example.com/template3",
    },
    {
      id: 6,
      title: "Template 3",
      description: "Technical",
      variant: "Precise",
      imageUrl: "https://picsum.photos/id/60/400/300",
      url: "https://example.com/template3-technical",
    },
  ];

  const footer = {
    copyright: "© 2024 Template Hub",
    links: ["Privacy", "Terms", "Contact"],
  };

  const hintText = "Click any template to preview (opens in new tab)";

  // ============================================================
  // 2. COMPONENT RENDER (No need to edit below)
  // ============================================================

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Top Navigation Bar */}
      <header className="border-b border-gray-800 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 flex justify-center space-x-6 md:space-x-12">
          {navOptions.map((opt) => (
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
          {/* LEFT SIDEBAR */}
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
                    className="px-4 py-2.5 text-gray-300 hover:bg-gray-700/70 hover:text-white transition cursor-pointer border-l-3 border-l-transparent hover:border-l-blue-500 font-medium"
                  >
                    {cat}
                  </div>
                ))}
              </nav>
            </div>
          </aside>

          {/* RIGHT MAIN AREA (Template Cards Grid) */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white">{pageHeader.title}</h1>
              <p className="text-gray-400 text-sm">{pageHeader.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {templates.map((template) => (
                <a
                  key={template.id}
                  href={template.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-gray-800/40 rounded-xl border border-gray-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:border-gray-600 hover:scale-[1.02] cursor-pointer block no-underline"
                >
                  {/* Image – fixed size, cropped to fit */}
                  <div className="relative h-40 w-full overflow-hidden bg-gray-800">
                    <img
                      src={template.imageUrl}
                      alt={`${template.title} thumbnail`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Variant badge */}
                    <span className="absolute bottom-2 right-2 text-xs text-gray-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">
                      {template.variant}
                    </span>
                  </div>
                  {/* Text below image */}
                  <div className="p-4 border-t border-gray-700/50">
                    <h3 className="font-bold text-lg text-gray-100">{template.title}</h3>
                    <p className="text-gray-400 text-sm mt-1">{template.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
              {hintText}
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <footer className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3">
            <p className="text-gray-500 text-sm">{footer.copyright}</p>
            <div className="flex gap-5">
              {footer.links.map((link) => (
                <span
                  key={link}
                  className="text-gray-600 text-xs hover:text-gray-400 cursor-pointer"
                >
                  {link}
                </span>
              ))}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}