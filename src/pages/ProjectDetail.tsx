import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Lightbulb, Wrench, Cog } from 'lucide-react';
import { projects } from '../types/project';
import { Breadcrumb } from '../components/Breadcrumb';
import { ProjectSection } from '../components/project/ProjectSection';
import { ProjectStory } from '../components/project/ProjectStory';
import { ProjectImages } from '../components/project/ProjectImages';

export function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="min-h-screen py-24 px-6">
      <div className="max-w-5xl mx-auto">
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
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-[400px] object-cover"
          />

          <h1 className="text-4xl font-bold mt-8">{project.title}</h1>
          <p className="text-xl text-gray-600 mt-4">{project.description}</p>
          
          {project.stats && (
            <div className="grid grid-cols-3 gap-8 mt-8">
              {project.stats.map((stat, index) => (
                <div key={index} className="p-4 bg-gray-50">
                  <div className="text-sm text-gray-600">{stat.label}</div>
                  <div className="text-xl font-semibold mt-1">{stat.value}</div>
                </div>
              ))}
            </div>
          )}

          

          <div className="border-t border-gray-200">
            <ProjectSection
              icon={Lightbulb}
              title="The Why"
              content={project.why}
              iconColor="text-yellow-500"
            />
            <ProjectSection
              icon={Wrench}
              title="The What"
              content={project.what}
              iconColor="text-blue-500"
            />
            <ProjectSection
              icon={Cog}
              title="The How"
              content={project.how}
              iconColor="text-purple-500"
            />
          </div>

          <ProjectImages images={project.images} />

          <ProjectStory story={project.story} />

          {project.technologies && (
            <div className="mt-12">
              <h2 className="text-xl font-semibold mb-4">Technologies Used</h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800"
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
            className="inline-flex items-center gap-2 mt-12 px-6 py-3 bg-black text-white hover:bg-gray-800 transition-colors"
          >
            View Live Project
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}