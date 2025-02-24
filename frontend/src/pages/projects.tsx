import React from 'react';
import { motion } from 'framer-motion';

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
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.25 } }
  };
  
  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Projects
        </motion.h1>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-paper-100 dark:bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              variants={item}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.15 } 
              }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {project.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag, tagIndex) => (
                  <motion.span
                    key={tagIndex}
                    className="px-2 py-1 bg-primary-light-100 dark:bg-primary-dark-900/40 text-primary-light-700 dark:text-primary-dark-300 rounded text-sm"
                    whileHover={{ scale: 1.05, transition: { duration: 0.1 } }}
                    whileTap={{ scale: 0.95, transition: { duration: 0.05 } }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
              <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light-600 dark:text-primary-dark-400 hover:underline inline-flex items-center"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                View Project →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 