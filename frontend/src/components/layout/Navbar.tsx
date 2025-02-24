import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Papers', href: '/papers' },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-light-primary dark:bg-dark-primary shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link href="/" className="text-xl font-bold text-light-text dark:text-dark-text">
            Your Name
          </Link>
          
          <div className="flex items-center space-x-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-light-text dark:text-dark-text hover:opacity-80"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
} 