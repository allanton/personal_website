import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

const navigation = [
  { name: 'About', href: '/' },
  { name: 'Projects', href: '/projects' },
  { name: 'Papers', href: '/papers' },
];

export default function Navbar() {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <>
      <nav className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <div className="relative">
          <div className="flex items-center backdrop-blur-md bg-white/60 dark:bg-gray-800/60 rounded-full px-4 py-1.5 shadow-sm">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative px-3 py-1 text-sm transition-colors ${
                  router.pathname === item.href
                    ? 'text-gray-900 dark:text-white'
                    : 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {router.pathname === item.href && (
                  <span className="absolute inset-0 rounded-full bg-primary-100 dark:bg-primary-900/40 -z-10" />
                )}
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="fixed top-6 right-6 p-2 rounded-full backdrop-blur-md bg-white/60 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white focus:outline-none shadow-sm"
      >
        {theme === 'dark' ? (
          <SunIcon className="h-4 w-4" />
        ) : (
          <MoonIcon className="h-4 w-4" />
        )}
      </button>
    </>
  );
} 