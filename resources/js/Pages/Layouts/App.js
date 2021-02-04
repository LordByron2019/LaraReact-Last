import React, { useEffect } from 'react'
import { InertiaLink } from '@inertiajs/inertia-react'


export default function Layout({ title, children }) {
    useEffect(() => {
        document.title = title;
    }, [title])

    return (
        <main className='h-full'>
            <header className="w-full text-center font-bold text-2xl text-white bg-gray-800 py-3">
                <InertiaLink href="/" className="mx-5">Home</InertiaLink>
                <InertiaLink href="/about" className="mx-5">About</InertiaLink>
                <InertiaLink href="/contact" className="mx-5">Contact</InertiaLink>
            </header>

            <article className='h-full'>{children}</article>
        </main>
    )
}
