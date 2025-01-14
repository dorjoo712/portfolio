'use client'

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div 
      className="text-slate-700 transition-colors hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-50 hover:cursor-pointer" 
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      style={{ colorScheme: theme }}
    >
      {theme === 'light' ? (
        <Moon className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      ) : (
        <Sun className="h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}
      <span className="sr-only">Toggle theme</span>
    </div>
  )
}