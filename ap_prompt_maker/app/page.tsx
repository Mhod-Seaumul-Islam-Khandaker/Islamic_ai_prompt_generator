'use client';

import { useState } from "react";
import TopNav from "@/components/topnav";
import Sidebar from "@/components/sidebar";
import TemplateCard from "@/components/templatecard";

export default function HomePage() {
  // ========== ALL CONTENT DATA ==========
  const navOptions = ["English", "Bangla", "Arabic"];

  const categories = ["Arabic", "Quran", "Tafsir", "Hadith", "Fiqh", "Islamic History"];

  const pageHeader = {
    title: "AI Template Hub",
    description: "Choose a template based on your needs",
  };

  const templates = [
    {
      id: 1,
      title: "Template 1",
      description: "Clean & professional",
      variant: "Classic",
      category: "Arabic",
      imageUrl: "https://picsum.photos/id/1/400/300",
      url: "https://example.com/template1",
    },
    {
      id: 2,
      title: "Template 1",
      description: "Modern & bold",
      variant: "Modern",
      category: "Arabic",
      imageUrl: "https://picsum.photos/id/20/400/300",
      url: "https://example.com/template1-modern",
    },
    {
      id: 3,
      title: "Template 2",
      description: "Minimalist",
      variant: "Light",
      category: "Quran",
      imageUrl: "https://picsum.photos/id/30/400/300",
      url: "https://example.com/template2",
    },
    {
      id: 4,
      title: "Template 2",
      description: "Corporate",
      variant: "Dark",
      category: "Tafsir",
      imageUrl: "https://picsum.photos/id/40/400/300",
      url: "https://example.com/template2-corporate",
    },
    {
      id: 5,
      title: "Template 3",
      description: "Creative",
      variant: "Artistic",
      category: "Hadith",
      imageUrl: "https://picsum.photos/id/50/400/300",
      url: "https://example.com/template3",
    },
    {
      id: 6,
      title: "Template 3",
      description: "Technical",
      variant: "Precise",
      category: "Fiqh",
      imageUrl: "https://picsum.photos/id/60/400/300",
      url: "https://example.com/template3-technical",
    },
  ];

  const footer = {
    copyright: "© 2024 Template Hub",
    links: ["Privacy", "Terms", "Contact"],
  };

  const hintText = "Click any template to preview (opens in new tab)";

  // ========== STATE & HANDLERS ==========
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredTemplates = templates.filter(
    (template) => template.category === selectedCategory
  );

  // ========== RENDER ==========
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      <TopNav options={navOptions} />

      <div className="container mx-auto px-4 py-6 md:px-6">
        <div className="flex flex-col md:flex-row gap-6">
          <Sidebar 
            categories={categories} 
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategoryChange}
          />

          {/* Right Main Area */}
          <div className="flex-1">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white">{pageHeader.title}</h1>
              <p className="text-gray-400 text-sm">{pageHeader.description}</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTemplates.map((template) => (
                <TemplateCard key={template.id} {...template} />
              ))}
            </div>

            <div className="mt-8 text-center text-gray-500 text-xs border-t border-gray-800 pt-4">
              {hintText}
            </div>
          </div>
        </div>

        {/* Footer */}
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