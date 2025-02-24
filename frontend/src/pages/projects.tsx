import React from 'react';
import Navbar from '@/components/Navbar';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project. What it does, what technologies you used, and what you learned.',
    tags: ['React', 'TypeScript', 'Tailwind'],
    link: 'https://github.com/yourusername/project1'
  },
  {
    title: 'Project 2',
    description: 'Description of your second project. Highlight the key features and your role in development.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    link: 'https://github.com/yourusername/project2'
  },
  // Add more projects as needed
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-600 dark:text-primary-400 hover:underline"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 