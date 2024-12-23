import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectImage {
  url: string;
  caption: string;
}

interface ProjectImagesProps {
  images: ProjectImage[];
}

export function ProjectImages({ images }: ProjectImagesProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -400 : 400;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="relative mt-16 mb-24">
      <h3 className="text-2xl font-bold mb-8">Project Gallery</h3>
      
      <div className="relative group">
        <button 
          onClick={() => scroll('left')}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={() => scroll('right')}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        >
          {images.map((image, index) => (
            <figure key={index} className="min-w-[600px] snap-start">
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-[400px] object-cover"
              />
              <figcaption className="mt-3 text-sm text-gray-600">
                {image.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}