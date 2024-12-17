import React from 'react';
import { ArrowDown } from 'lucide-react';

export function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center px-6">
      <div className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Engineering solutions<br />
          with elegance and precision
        </h1>
        <p className="mt-8 text-xl text-gray-600 max-w-2xl">
          Hi, I'm John Doe. I craft digital experiences that combine technical excellence 
          with beautiful design. Currently building the future at TechCorp.
        </p>
        <div className="mt-12 animate-bounce">
          <ArrowDown size={24} />
        </div>
      </div>
    </section>
  );
}