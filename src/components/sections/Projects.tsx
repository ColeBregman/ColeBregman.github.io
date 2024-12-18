import React from 'react';
import { ProjectCard } from '../ProjectCard';
import { SmallProject } from '../SmallProject';
import { projects } from '../../types/project';

const smallProjects = [
  {
    title: 'Task Management CLI',
    description: 'Command-line tool for managing tasks and projects',
    link: 'https://github.com/example/task-cli',
    technologies: ['Node.js', 'Commander.js', 'SQLite']
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather monitoring dashboard',
    link: 'https://github.com/example/weather-dash',
    technologies: ['React', 'D3.js', 'OpenWeather API']
  },
  {
    title: 'PDF Parser',
    description: 'Extract and analyze text from PDF documents',
    link: 'https://github.com/example/pdf-parser',
    technologies: ['Python', 'PyPDF2', 'NLTK']
  }
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-24 px-6 md:pr-32">
      <div className="w-full">
        <h2 className="text-3xl font-bold mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-8">Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {smallProjects.map((project, index) => (
              <SmallProject key={index} {...project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}