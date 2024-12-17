import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { projects } from '../types/project';
import { Breadcrumb } from '../components/Breadcrumb';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <Breadcrumb
          items={[
            { label: 'Projects', href: '/#projects' },
            { label: project.title }
          ]}
        />

        <Link
          to="/#projects"
          className="inline-flex items-center text-gray-600 hover:text-black mt-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to projects
        </Link>

        <div className="mt-8">
          <div className="rounded-2xl overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          <h1 className="text-4xl font-bold mt-8">{project.title}</h1>
          
          {project.stats && (
            <div className="grid grid-cols-3 gap-8 mt-8">
              {project.stats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xl font-semibold mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          <div className="mt-8 prose prose-lg">
            <p>{project.fullDescription}</p>
          </div>

          {project.technologies && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            View Live Project
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}