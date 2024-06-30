import { useEffect, useState } from 'react'

function useDark() {
  const value = localStorage.getItem('endless-color-scheme') || 'false'

  const [theme, setTheme] = useState(value === 'true')

  useEffect(() => {
    document.documentElement.className = theme ? 'dark' : 'light'
    document.documentElement.setAttribute('data-prefers-color-scheme', theme ? 'dark' : 'light')
    localStorage.setItem('endless-color-scheme', theme ? 'true' : 'false')
  }, [theme])
  return {
    theme,
    setTheme
  }
}

export default useDark
