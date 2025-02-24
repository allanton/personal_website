import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BriefcaseIcon, AcademicCapIcon, HeartIcon } from '@heroicons/react/24/outline';

interface TimelineItem {
  id: string;
  category: 'work' | 'education' | 'volunteer';
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  technologies?: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [filter, setFilter] = useState<'all' | 'work' | 'education' | 'volunteer'>('all');
  const [hoveredButton, setHoveredButton] = useState<string | null>(null);
  
  const filteredItems = filter === 'all' 
    ? items 
    : items.filter(item => item.category === filter);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };
  
  const itemVariant = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } }
  };

  const getCategoryIcon = (category: string) => {
    switch(category) {
      case 'work':
        return <BriefcaseIcon className="h-5 w-5" />;
      case 'education':
        return <AcademicCapIcon className="h-5 w-5" />;
      case 'volunteer':
        return <HeartIcon className="h-5 w-5" />;
      default:
        return <BriefcaseIcon className="h-5 w-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch(category) {
      case 'work':
        return 'bg-primary-light-50/80 dark:bg-primary-dark-900/20 text-primary-light-600 dark:text-primary-dark-400 border-primary-light-200 dark:border-primary-dark-800/50';
      case 'education':
        return 'bg-emerald-50/80 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800/50';
      case 'volunteer':
        return 'bg-purple-50/80 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 border-purple-200 dark:border-purple-800/50';
      default:
        return 'bg-primary-light-50/80 dark:bg-primary-dark-900/20 text-primary-light-600 dark:text-primary-dark-400 border-primary-light-200 dark:border-primary-dark-800/50';
    }
  };

  const getFilterButtonColor = (buttonFilter: string) => {
    const isActive = filter === buttonFilter;
    const isHovered = hoveredButton === buttonFilter;
    
    switch(buttonFilter) {
      case 'all':
        return isActive
          ? 'bg-gray-800 text-white dark:bg-white dark:text-gray-900 shadow-md ring-0'
          : isHovered 
            ? 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 ring-1 ring-gray-200 dark:ring-gray-600' 
            : 'bg-transparent text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700';
      case 'work':
        return isActive
          ? 'bg-primary-light-500 text-white dark:bg-primary-dark-400 dark:text-gray-900 shadow-md ring-0'
          : isHovered 
            ? 'bg-primary-light-50 dark:bg-primary-dark-900/30 text-primary-light-600 dark:text-primary-dark-300 ring-1 ring-primary-light-200 dark:ring-primary-dark-700/50' 
            : 'bg-transparent text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700';
      case 'education':
        return isActive
          ? 'bg-emerald-500 text-white dark:bg-emerald-400 dark:text-gray-900 shadow-md ring-0'
          : isHovered 
            ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-300 ring-1 ring-emerald-200 dark:ring-emerald-700/50' 
            : 'bg-transparent text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700';
      case 'volunteer':
        return isActive
          ? 'bg-purple-500 text-white dark:bg-purple-400 dark:text-gray-900 shadow-md ring-0'
          : isHovered 
            ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 ring-1 ring-purple-200 dark:ring-purple-700/50' 
            : 'bg-transparent text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700';
      default:
        return 'bg-transparent text-gray-600 dark:text-gray-300 ring-1 ring-gray-200 dark:ring-gray-700';
    }
  };

  const handleItemClick = (id: string) => {
    setActiveItem(activeItem === id ? null : id);
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-2 mb-10">
        {['all', 'work', 'education', 'volunteer'].map((buttonFilter) => (
          <motion.button
            key={buttonFilter}
            whileHover={{ scale: 1.03, y: -1 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setFilter(buttonFilter as any)}
            onMouseEnter={() => setHoveredButton(buttonFilter)}
            onMouseLeave={() => setHoveredButton(null)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${getFilterButtonColor(buttonFilter)}`}
          >
            {buttonFilter === 'all' ? 'All' : 
             buttonFilter === 'work' ? 'Work' : 
             buttonFilter === 'education' ? 'Education' : 'Volunteering'}
          </motion.button>
        ))}
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative pl-8 before:absolute before:content-[''] before:left-[7px] before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-transparent before:via-paper-300 dark:before:via-gray-700 before:to-transparent"
      >
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.id}
            variants={itemVariant}
            className={`relative mb-12 last:mb-0`}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
          >
            <motion.div
              className={`absolute -left-[29px] p-1.5 rounded-full border ${getCategoryColor(item.category)}`}
              initial={{ scale: 0.8 }}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {getCategoryIcon(item.category)}
            </motion.div>
            
            <motion.div 
              className={`
                cursor-pointer rounded-xl border border-transparent transition-all duration-200
                ${activeItem === item.id 
                  ? 'bg-paper-50/80 dark:bg-gray-800/80 shadow-sm border-paper-200 dark:border-gray-700 backdrop-blur-sm' 
                  : 'hover:bg-paper-50/50 dark:hover:bg-gray-800/30 hover:border-paper-200/70 dark:hover:border-gray-700/50'
                }
              `}
              onClick={() => handleItemClick(item.id)}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <div className="p-5">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1">
                  <div className="flex items-center mb-1 sm:mb-0">
                    <span className={`w-2 h-2 rounded-full mr-2 ${
                      item.category === 'work' 
                        ? 'bg-primary-light-500 dark:bg-primary-dark-400' 
                        : item.category === 'education'
                        ? 'bg-emerald-500 dark:bg-emerald-400'
                        : 'bg-purple-500 dark:bg-purple-400'
                    }`}></span>
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap mt-1 sm:mt-0 flex items-center">
                    <span className="inline-block w-3 h-px bg-gray-300 dark:bg-gray-600 mr-2"></span>
                    {item.startDate} – {item.endDate}
                  </span>
                </div>
                
                <div className="mb-2 ml-4">
                  <span className="text-base font-medium text-gray-800 dark:text-gray-200">
                    {item.organization}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2 text-sm">
                    {item.location}
                  </span>
                </div>
                
                <AnimatePresence>
                  {activeItem === item.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden ml-4"
                    >
                      <ul className="list-none space-y-2 my-3 text-gray-600 dark:text-gray-300 text-sm">
                        {item.description.map((desc, i) => (
                          <li key={i} className="pl-4 border-l-2 border-paper-200 dark:border-gray-700">
                            {desc}
                          </li>
                        ))}
                      </ul>
                      
                      {item.technologies && (
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {item.technologies.map((tech, i) => (
                            <motion.span 
                              key={i}
                              className="px-2 py-0.5 bg-paper-100/70 dark:bg-gray-700/70 rounded-full text-xs text-gray-600 dark:text-gray-300 border border-paper-200/80 dark:border-gray-600/80"
                              whileHover={{ y: -1, x: 0 }}
                              transition={{ duration: 0.15 }}
                            >
                              {tech}
                            </motion.span>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <motion.div 
                  className="mt-2 text-sm font-medium flex items-center ml-4 text-gray-500 dark:text-gray-400 hover:text-primary-light-500 dark:hover:text-primary-dark-400 transition-colors"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="mr-1">{activeItem === item.id ? 'Show less' : 'Show details'}</span>
                  <svg className={`w-3 h-3 transition-transform duration-300 ${activeItem === item.id ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 