import { useState, useEffect } from 'react'
import { toggleTheme } from '@/utils/theme'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'))
  }, [])

  const handleToggle = () => {
    toggleTheme()
    setIsDark(!isDark)
  }

  return (
    <button
      onClick={handleToggle}
      className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  )
} 