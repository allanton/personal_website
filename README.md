format this as below pls:


Let's create a README.md file in the root directory to document the project:

```markdown
# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## Project Structure

```
├── frontend/           # Frontend application
│   ├── src/
│   │   ├── components/ # Reusable React components
│   │   ├── pages/     # Next.js pages
│   │   ├── styles/    # Global styles
│   │   └── utils/     # Utility functions
│   ├── public/        # Static assets
│   └── ...
└── README.md
```

## Features

- 🌓 Dark/Light theme support
- 📱 Responsive design
- 🎨 Modern UI with Tailwind CSS
- 🔍 SEO friendly
- 📝 Easy to customize and extend
- 🚀 Fast performance with Next.js

## Getting Started

1. Clone the repository
```bash
git clone <repository-url>
```

2. Install dependencies
```bash
cd frontend
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Update `frontend/src/components/layout/Navbar.tsx` to change navigation items
- Modify theme colors in `frontend/tailwind.config.ts`
- Add new pages in `frontend/src/pages/`
- Customize components in `frontend/src/components/`

## Tech Stack

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React](https://reactjs.org/)

## License

MIT
```


