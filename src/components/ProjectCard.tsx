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
      <div className="grid md:grid-cols-2 gap-8">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        
        <div className="flex flex-col justify-center">
          <h3 className="text-2xl font-semibold flex items-center gap-2 mb-4">
            {project.title}
            <ArrowUpRight size={20} className="inline-block opacity-0 group-hover:opacity-100 transition-opacity" />
          </h3>
          
          <p className="text-gray-600 mb-6">{project.description}</p>
          
          {project.stats && (
            <div className="grid grid-cols-2 gap-4">
              {project.stats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-lg font-semibold mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}