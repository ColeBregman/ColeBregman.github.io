import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Contact } from './components/sections/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-6xl mx-auto md:pr-32">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      
      <footer className="border-t border-gray-200 py-12 px-6 md:pr-32">
        <div className="max-w-6xl mx-auto text-center text-gray-600">
          <p>© 2024 John Doe. All rights reserved.</p>
          <p className="mt-2">Built with React and Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}