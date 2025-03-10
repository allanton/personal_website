import React from 'react';
import { motion } from 'framer-motion';

const papers = [
  {
    title: 'Paper Title 1',
    authors: 'Your Name, Co-author 1, Co-author 2',
    journal: 'Journal Name or Conference',
    year: '2024',
    abstract: 'Brief abstract of the paper goes here. This should be a concise summary of the research and findings.',
    link: 'https://doi.org/...'
  },
  {
    title: 'Paper Title 2',
    authors: 'Your Name, Co-author 3',
    journal: 'Another Journal or Conference',
    year: '2023',
    abstract: 'Abstract of the second paper. Highlight the key contributions and results.',
    link: 'https://doi.org/...'
  },
  // Add more papers as needed
];

export default function Papers() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08
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
          Publications
        </motion.h1>
        <motion.div 
          className="space-y-6"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {papers.map((paper, index) => (
            <motion.div
              key={index}
              className="bg-paper-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
              variants={item}
              whileHover={{ 
                scale: 1.01, 
                transition: { duration: 0.15 } 
              }}
            >
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {paper.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-2 italic">
                {paper.authors}
              </p>
              <p className="text-primary-light-600 dark:text-primary-dark-400 mb-4">
                {paper.journal} • {paper.year}
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {paper.abstract}
              </p>
              <motion.a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-light-600 dark:text-primary-dark-400 hover:underline inline-flex items-center"
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 500, damping: 15 }}
              >
                Read Paper →
              </motion.a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </main>
  );
} 