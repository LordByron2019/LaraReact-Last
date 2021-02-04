import React from 'react'
import Layout from './Layouts/App'


export default function Welcome({about}) {
    return (
        <Layout title="About">
            <div className="mx-5 p-1 text-white">
                <h2 className="font-weight-bold text-3xl my-5 text-white">{about.name}</h2>
                <p>{about.text}</p>
            </div>
        </Layout>
    )
}

