import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

const sections: Section[] = [
  { id: 'hero', label: '01 Introduction' },
  { id: 'about', label: '02 About' },
  { id: 'projects', label: '03 Projects' },
  { id: 'contact', label: '04 Contact' },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const SocialLinks = () => (
    <div className="flex md:flex-col items-center md:items-end gap-4">
      <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
         className="text-gray-400 hover:text-black transition-colors">
        <Github size={20} />
      </a>
      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
         className="text-gray-400 hover:text-black transition-colors">
        <Linkedin size={20} />
      </a>
      <a href="mailto:hello@example.com"
         className="text-gray-400 hover:text-black transition-colors">
        <Mail size={20} />
      </a>
    </div>
  );

  return (
    <>
      {/* Mobile Navigation */}
      <nav className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm">
        <div className="flex items-center justify-between p-4">
          <span className="text-xl font-semibold">JD</span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-gray-600 hover:text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 shadow-lg">
            <div className="space-y-4">
              {sections.map(({ id, label }) => (
                <a
                  key={id}
                  onClick={() => handleNavClick(id)}
                  className={`block py-2 ${
                    activeSection === id 
                      ? 'text-black font-semibold' 
                      : 'text-gray-400'
                  } transition-colors hover:text-black`}
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-gray-100">
              <SocialLinks />
            </div>
          </div>
        )}
      </nav>

      {/* Desktop Side Navigation */}
      <nav className="hidden md:block fixed right-8 top-1/2 -translate-y-1/2 z-50">
        <div className="flex flex-col items-end gap-6">
          <div className="space-y-4">
            {sections.map(({ id, label }) => (
              <a
                key={id}
                onClick={() => handleNavClick(id)}
                className="group flex items-center justify-end cursor-pointer"
              >
                <span className={`text-sm font-medium tracking-wider ${
                  activeSection === id 
                    ? 'text-black font-semibold' 
                    : 'text-gray-400'
                } transition-colors hover:text-black`}>
                  {label}
                </span>
              </a>
            ))}
          </div>
          
          <div className="mt-6 pt-6 border-t border-gray-100">
            <SocialLinks />
          </div>
        </div>
      </nav>
    </>
  );
}