// theme switcher
import { useEffect, useState } from 'react'
import { IS_BROWSER } from 'src/assets/ts'

export default function ThemeSwitcher() {
    const SHARED_THEME_SWITCHER_CLASSES = "px-2.5 border-rad-4"
    const [currentTheme, setCurrentTheme] = useState<string>('')

    function LocalStorageTheme() {
        if (IS_BROWSER()) {
            return localStorage.getItem("theme")
        }
    }

    /** Set / Change all of the needed values */
    function setTheme(newTheme: string) {
        if (IS_BROWSER()) {
            console.log(newTheme)                    // log the new theme
            localStorage.setItem("theme", newTheme); // set localstorage value
            document.body.dataset.theme = newTheme;  // set body value
            setCurrentTheme(newTheme)                // set hook value
        }
    }

    useEffect(() => {
        // get the saved theme if exists, else set to light
        const savedTheme = LocalStorageTheme() || "light"
        if (LocalStorageTheme()) {
            setTheme(savedTheme)
        } else {
            setTheme('light')
        }
    }, [])

    return (
        <div className='flex gap-3 fs-9'>
            <button onClick={() => setTheme('light')}
                className={`${SHARED_THEME_SWITCHER_CLASSES} ${currentTheme == 'light' ? 'bg-amber-100 text-black' : ''}`}>Light</button>
            <div>/</div>
            <button onClick={() => setTheme('dark')}
                className={`${SHARED_THEME_SWITCHER_CLASSES} ${currentTheme == 'dark' ? 'bg-amber-200 text-black' : ''}`}>Dark</button>
        </div>
    )
}
