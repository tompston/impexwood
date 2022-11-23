import React from 'react'

// theme switcher
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ThemeSwitcher() {
    // get the theme hook value on mount
    // reference -> https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const SHARED_THEME_SWITCHER_CLASSES = "px-2.5 border-rad-4"

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }

    return (
        <div className='flex gap-3 fs-9'>
            <button onClick={() => setTheme('light')}
                className={`${SHARED_THEME_SWITCHER_CLASSES} ${theme == 'light' ? 'bg-amber-100 text-black' : ''}`}>Light</button>
            <div>/</div>
            <button onClick={() => setTheme('dark')}
                className={`${SHARED_THEME_SWITCHER_CLASSES} ${theme == 'dark' ? 'bg-amber-200 text-black' : ''}`}>Dark</button>
        </div>
    )
}
