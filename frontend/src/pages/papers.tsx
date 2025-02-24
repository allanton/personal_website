import React from 'react';
import Navbar from '@/components/Navbar';

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
  return (
    <div className="min-h-screen bg-paper-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Publications
          </h1>
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <div
                key={index}
                className="bg-paper-100 dark:bg-gray-800 rounded-lg shadow-md p-6"
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
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-light-600 dark:text-primary-dark-400 hover:underline"
                >
                  Read Paper →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
} 