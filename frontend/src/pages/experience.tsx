import React from 'react';
import { motion } from 'framer-motion';
import Timeline from '@/components/Timeline';

// CV data organized for the timeline
const timelineItems = [
  // Work Experience
  {
    id: 'turing',
    category: 'work',
    title: 'Research Data Scientist',
    organization: 'The Alan Turing Institute',
    location: 'London, UK',
    startDate: 'Jan 2024',
    endDate: 'Present',
    description: [
      'Engaged with senior government stakeholders to identify productivity bottlenecks and potential AI solutions; based on their feedback, rapidly prototyped generative AI tools that automated routine tasks while adhering to regulatory standards and policy guidelines.',
      'Utilized Google Cloud, Azure to deploy generative models, emphasizing resource orchestration and integration with existing systems.',
      'Iteratively built chat-based interfaces for analyzing public consultations, evolving from gradio and flask prototypes to a production-ready dashboard built with Next.js and Tailwind; integrated advanced API features such as function calling, structured responses, prompt caching, batch processing, and output validation with Pydantic; on track to achieve over a 100-fold increase in productivity and 6-figure cost savings.',
      'Developed and evaluated novel survey analytics methods, combining LLMs and clustering analysis; co-authored research papers submitted to leading academic journals.',
      'Fine-tuned LLMs using LoRA, QLoRA and knowledge distillation; reduced costs while maintaining quality across target use cases.',
      "Collaborated on high-impact research projects studying AI adoption among UK medical professionals and analyzing generative AI's influence on children's development with LEGO Group.",
      "Designed and deployed multiple iterations of public surveys using Qualtrics and Prolific, enhancing data collection quality and participant engagement; engineered synthetic data generation pipeline to create 'pre-labelled' synthetic copy of the survey responses."
    ],
    technologies: ['Python', 'PyTorch', 'Flask', 'Gradio', 'Next.js', 'Tailwind', 'Google Cloud', 'Azure', 'LLMs', 'Qualtrics', 'Prolific']
  },
  {
    id: 'sigtech',
    category: 'work',
    title: 'Systematic Strategies Intern',
    organization: 'SigTech',
    location: 'London, UK',
    startDate: 'Jan 2023',
    endDate: 'Jun 2023',
    description: [
      "Optimized implementation of trading strategies within SigTech's API codebase, including mean reversion, momentum, pairs trading, and calendar spreads; implemented unit tests and data validation frameworks to ensure the robustness and reliability of the platform.",
      'Prototyped a modular ML model evaluation framework with automated hyperparameter tuning and cross-validation, allowing clients to rapidly iterate and validate predictive models across different market regimes.',
      'Designed and built a hands-on SigTech API course, leveraging Docker, SQL, and Apache Airflow to demonstrate real-time strategy back-testing and deployment for equities, commodities, and FX.'
    ],
    technologies: ['Python', 'Docker', 'SQL', 'Apache Airflow', 'Machine Learning', 'API Development', 'Unit Testing']
  },
  {
    id: 'turintech',
    category: 'work',
    title: 'Data Science Intern',
    organization: 'TurinTech AI',
    location: 'London, UK',
    startDate: 'Apr 2022',
    endDate: 'Sep 2022',
    description: [
      "Developed a causality-based semi-supervised feature selection algorithm for the firm's flagship AutoML platform, utilizing advanced ML models via statsmodels, scikit-learn, XGBoost and PyTorch.",
      "Executed thorough controlled-environment A/B testing to compare the developed algorithm's performance to the options currently available on the platform; the former has been shown to outperform available techniques in terms of the final predictions' accuracy across numerous machine learning methods by an average of 11%.",
      "Authored technical reports and whitepapers detailing the algorithm's methodology and performance metrics."
    ],
    technologies: ['Python', 'statsmodels', 'scikit-learn', 'XGBoost', 'PyTorch', 'AutoML', 'A/B Testing', 'Feature Selection']
  },
  {
    id: 'mckinsey',
    category: 'work',
    title: 'Business Analyst Intern',
    organization: 'McKinsey & Company',
    location: 'London, UK',
    startDate: 'Jul 2020',
    endDate: 'Oct 2020',
    description: [
      'Core team member on brokerage app strategy project; managed end-to-end interview workstream spanning 20+ user interviews to identify key behavior patterns and friction points; supported development of market segmentation strategy through qualitative research and conjoint analysis, identifying 4 key user personas and their distinct feature preferences.',
      'Contributed to GTM roadmap prioritizing high-value segments, including channel strategy and targeted value props for each persona.',
      'Designed tiered pricing model aligned to segment willingness-to-pay, projecting 25% revenue growth in first year.'
    ],
    technologies: ['Market Research', 'User Interviews', 'Conjoint Analysis', 'Market Segmentation', 'Pricing Strategy']
  },
  
  // Education
  {
    id: 'imperial',
    category: 'education',
    title: 'MSc in Financial Technology (Distinction)',
    organization: 'Imperial College London',
    location: 'London, UK',
    startDate: 'Sep 2022',
    endDate: 'Sep 2023',
    description: [
      'Applied Project: "Leveraging Multi-LLM Architecture for Financial News Classification and Algorithmic Trading Optimization"'
    ],
    technologies: ['Financial Technology', 'Algorithmic Trading', 'LLMs', 'Financial News Analysis']
  },
  {
    id: 'ucl',
    category: 'education',
    title: 'MSc in Business Data Analytics (Distinction)',
    organization: 'University College London',
    location: 'London, UK',
    startDate: 'Sep 2021',
    endDate: 'Sep 2022',
    description: [
      'Thesis: "Suggesting a Novel Causality-Based Feature Selection Technique for Multivariate Time-Series Data"'
    ],
    technologies: ['Business Analytics', 'Data Science', 'Feature Selection', 'Time Series Analysis', 'Causality']
  },
  {
    id: 'kings',
    category: 'education',
    title: 'BSc in Economics & Econometrics (First-Class Honours)',
    organization: 'King\'s College London',
    location: 'London, UK',
    startDate: 'Sep 2018',
    endDate: 'Jun 2021',
    description: [
      'Thesis: "National Macroeconomic Impulse Responses to Oil Price Shocks: A Study Employing Inventories-Refined SVAR Model"',
      'Awards: KCL Case Competition Winner (2021); KCLSU Gold Crown'
    ],
    technologies: ['Economics', 'Econometrics', 'SVAR Models', 'Macroeconomics', 'Oil Price Analysis']
  },
  
  // Volunteering
  {
    id: 'rds',
    category: 'volunteer',
    title: 'Co-Founder/Volunteer',
    organization: 'Russian Democratic Society',
    location: 'London, UK',
    startDate: 'May 2022',
    endDate: 'Sep 2024',
    description: [
      "Co-founded and led London-based non-profit fostering dialogue on Russia's democratic development.",
      'Orchestrated large-scale public engagement initiatives including a 1000+ person rally that received international media coverage (NYT, Guardian, Observer front page); built coalition of 20+ diaspora organizations reaching diverse communities across UK and Europe.',
      'Managed £30,000+ humanitarian aid initiative delivering supplies to frontline Ukrainian cities; developed partnerships and coordinated complex logistics under active conflict conditions.'
    ],
    technologies: ['Non-profit Management', 'Public Engagement', 'Coalition Building', 'Humanitarian Aid', 'Project Management']
  }
];

export default function Experience() {
  const skillsVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { ease: "easeOut", duration: 0.2 } }
  };

  const skillCategories = [
    {
      title: "Technical",
      items: ['Python (PyTorch, Flask, Gradio, sklearn, etc.)', 'SQL', 'R', 'C++', 'MATLAB'],
      color: "from-primary-light-50 to-transparent dark:from-primary-dark-900/10 dark:to-transparent"
    },
    {
      title: "Languages",
      items: ['English: Fluent Proficiency', 'Russian: Native Proficiency', 'Hindi: Elementary Proficiency'],
      color: "from-emerald-50 to-transparent dark:from-emerald-900/10 dark:to-transparent"
    },
    {
      title: "Interests",
      items: ['Artificial Intelligence', 'AI Safety & Alignment', 'Information Warfare', 'Guitar', 'Taekwondo', 'History of Modern Russia'],
      color: "from-purple-50 to-transparent dark:from-purple-900/10 dark:to-transparent"
    }
  ];

  return (
    <main className="container mx-auto px-4 pt-28 pb-16">
      <div className="max-w-4xl mx-auto">
        <motion.h1 
          className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          Experience
        </motion.h1>
        
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          My professional journey spans research, finance, data science, and community leadership. 
          Click on each item to learn more, or use the filters to focus on specific aspects of my experience.
        </motion.p>
        
        <Timeline items={timelineItems} />
        
        <motion.div 
          className="mt-20" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <motion.h2 
            className="text-2xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            Skills & Interests
          </motion.h2>
          
          <motion.div 
            className="space-y-10"
            variants={skillsVariants}
            initial="hidden"
            animate="show"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div 
                key={categoryIndex} 
                className="relative"
                variants={skillItemVariants}
              >
                <div className={`absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b ${category.color}`}></div>
                
                <h3 className="text-lg font-medium text-gray-800 dark:text-gray-200 mb-4 ml-1">
                  {category.title}
                </h3>
                
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 bg-paper-50/80 dark:bg-gray-800/50 rounded-lg text-sm text-gray-700 dark:text-gray-300 border border-paper-200/80 dark:border-gray-700/50 backdrop-blur-sm"
                      whileHover={{ y: -2, x: 0, transition: { duration: 0.15 } }}
                      whileTap={{ scale: 0.98, transition: { duration: 0.1 } }}
                      variants={skillItemVariants}
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
} 