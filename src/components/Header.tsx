// import React from 'react'
import { ContainerLayout } from './Layout'

export default function Header() {
    return (
        <ContainerLayout>
            <header className='py-5'>
                <div className='grid grid-cols-[1fr_auto]'>
                    <div>Impexwood</div>
                    <div className='flex gap-4'>
                        <div>qwe</div>
                        <div>qwe</div>
                        <div>qwe</div>
                    </div>
                </div>
            </header>
        </ContainerLayout>
    )
}
