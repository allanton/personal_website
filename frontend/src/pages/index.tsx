import React from 'react';
import Navbar from '@/components/Navbar';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-paper-50 dark:bg-gray-900">
      <Navbar />
      <main className="container mx-auto px-4 pt-28 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
                Hi, I'm Your Name
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Welcome to my personal website. I'm a [Your Role] passionate about [Your Interests].
                This is where I share my work, thoughts, and experiences.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
                >
                  <FaGithub className="h-6 w-6" />
                </a>
                <a
                  href="https://linkedin.com/in/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
                >
                  <FaLinkedin className="h-6 w-6" />
                </a>
                <a
                  href="https://twitter.com/yourusername"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
                >
                  <FaTwitter className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="relative h-64 w-64 mx-auto rounded-full overflow-hidden bg-paper-100 dark:bg-gray-800">
              {/* Replace with your image */}
              <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
                Add your photo here
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 