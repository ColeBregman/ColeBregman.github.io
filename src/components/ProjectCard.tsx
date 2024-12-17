import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../types/project';
import { Link } from 'react-router-dom';

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link 
      to={project.link}
      className="group block relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="text-xl font-semibold flex items-center gap-2">
            {project.title}
            <ArrowUpRight size={20} className="inline-block" />
          </h3>
          <p className="mt-2 text-sm text-gray-200">{project.description}</p>
          {project.stats && (
            <div className="mt-4 grid grid-cols-3 gap-4">
              {project.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-xs text-gray-300">{stat.label}</div>
                  <div className="text-sm font-semibold">{stat.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}