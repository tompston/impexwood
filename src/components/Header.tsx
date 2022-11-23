// import React from 'react'
import { ContainerLayout } from './Layout'
import ThemeSwitcher from './ThemeSwitcher'

// theme switcher
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function Header() {


    return (
        <ContainerLayout>
            <header className='py-5'>
                <div className='grid grid-cols-[1fr_auto]'>
                    <div>Impexwood</div>
                    <ThemeSwitcher />
                </div>
            </header>
        </ContainerLayout>
    )
}
