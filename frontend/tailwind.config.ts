import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable dark mode with class strategy
  theme: {
    extend: {
      colors: {
        // Light theme colors
        'light-primary': '#ffffff',
        'light-secondary': '#f3f4f6',
        'light-text': '#1f2937',
        
        // Dark theme colors
        'dark-primary': '#1f2937',
        'dark-secondary': '#111827',
        'dark-text': '#f3f4f6',
      },
    },
  },
  plugins: [],
}

export default config 