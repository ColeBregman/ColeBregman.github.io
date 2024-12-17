import React from 'react';
import { Project } from '../Project';

export function Projects() {
  return (
    <section id="projects" className="min-h-screen flex items-center px-6">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Project 
            title="AI-Powered Analytics Platform"
            description="Revolutionizing data analysis with machine learning"
            image="https://images.unsplash.com/photo-1518932945647-7a1c969f8be2?auto=format&fit=crop&w=1200&q=80"
            link="#"
          />
          <Project 
            title="Smart City Infrastructure"
            description="Building the foundation for tomorrow's cities"
            image="https://images.unsplash.com/photo-1493946740644-2d8a1f1a6aff?auto=format&fit=crop&w=1200&q=80"
            link="#"
          />
          <Project 
            title="Quantum Computing Interface"
            description="Making quantum computing accessible"
            image="https://images.unsplash.com/photo-1510906594845-bc082582c8cc?auto=format&fit=crop&w=1200&q=80"
            link="#"
          />
          <Project 
            title="Sustainable Energy Solutions"
            description="Powering the future with clean technology"
            image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
            link="#"
          />
        </div>
      </div>
    </section>
  );
}