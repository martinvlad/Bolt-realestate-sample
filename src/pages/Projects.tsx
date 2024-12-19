import React from 'react';
import { useLocation } from 'wouter';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';

export function Projects() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        onClick={() => setLocation('/')}
        className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8"
      >
        <ArrowLeft size={20} />
        Back to Desktop
      </button>
      
      <h1 className="text-4xl font-bold mb-6">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          {
            title: '3D Desktop',
            description: 'Interactive 3D desktop environment built with React Three Fiber',
            tech: ['React', 'Three.js', 'TypeScript']
          },
          {
            title: 'Portfolio Website',
            description: 'Personal portfolio showcasing projects and skills',
            tech: ['Next.js', 'Tailwind CSS', 'Framer Motion']
          }
        ].map((project) => (
          <div
            key={project.title}
            className="p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-400 mb-4">{project.description}</p>
            <div className="flex gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-gray-700 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="#" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                <Github size={16} />
                Code
              </a>
              <a href="#" className="flex items-center gap-1 text-blue-400 hover:text-blue-300">
                <ExternalLink size={16} />
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}