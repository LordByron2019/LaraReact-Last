import React from 'react'
import Layout from './Layouts/App'

export default function Welcome({ user }) {
    return (
        <Layout title="Welcome">
            <div className="h-full flex justify-center items-center">
                <div className="">
                    <h1 className="text-white text-center text-6xl my-5">HI..!</h1>
                    <p className="text-white text-2xl uppercase">Salut, bienvenue sur mon site test de React et Inertia Js</p>
                </div>
            </div>
        </Layout>
    )
}
