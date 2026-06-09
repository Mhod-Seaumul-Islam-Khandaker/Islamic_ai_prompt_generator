// components/TemplateCard.tsx
interface TemplateCardProps {
  id: number;
  title: string;
  description: string;
  variant: string;
  imageUrl: string;
  url: string;
}

export default function TemplateCard({ id, title, description, variant, imageUrl, url }: TemplateCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-gray-800/40 rounded-xl border border-gray-700 overflow-hidden shadow-md hover:shadow-xl transition-all duration-200 hover:border-gray-600 hover:scale-[1.02] cursor-pointer block no-underline"
    >
      {/* Image – fixed size, cropped to fit */}
      <div className="relative h-40 w-full overflow-hidden bg-gray-800">
        <img
          src={imageUrl}
          alt={`${title} thumbnail`}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        <span className="absolute bottom-2 right-2 text-xs text-gray-200 bg-black/60 px-2 py-0.5 rounded backdrop-blur-sm z-10">
          {variant}
        </span>
      </div>
      {/* Text below image */}
      <div className="p-4 border-t border-gray-700/50">
        <h3 className="font-bold text-lg text-gray-100">{title}</h3>
        <p className="text-gray-400 text-sm mt-1">{description}</p>
      </div>
    </a>
  );
}
