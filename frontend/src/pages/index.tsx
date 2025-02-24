import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } }
  };
  
  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.div className="space-y-6" variants={container}>
            <motion.h1 
              className="text-4xl font-bold text-gray-900 dark:text-white"
              variants={item}
            >
              Hi, I'm Your Name
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-300"
              variants={item}
            >
              Welcome to my personal website. I'm a [Your Role] passionate about [Your Interests].
              This is where I share my work, thoughts, and experiences.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              variants={item}
            >
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
              >
                <FaGithub className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
              >
                <FaLinkedin className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, transition: { duration: 0.15 } }}
                whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400"
              >
                <FaTwitter className="h-6 w-6" />
              </motion.a>
            </motion.div>
          </motion.div>
          <motion.div 
            className="relative h-64 w-64 mx-auto rounded-full overflow-hidden bg-paper-100 dark:bg-gray-800"
            variants={item}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            {/* Replace with your image */}
            <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-gray-500">
              Add your photo here
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 