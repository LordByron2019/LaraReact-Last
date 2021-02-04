import React from 'react'
import Layout from './Layouts/App'
import {InertiaLink, usePage} from "@inertiajs/inertia-react"
import Pagination from "../Shared/Pagination"

export default function Welcome({ contacts }) {
    return (
        <Layout title="Contact">
            <h1 className="my-5 p-5 text-white text-4xl">Tous les contacts</h1>

            <div className="my-5 p-5 block justify-center items-center">
                <table className="table w-full table-auto border-2 border-blue-50">
                    <thead className="table-row-group table-header-group bg-gray-800 text-white text-2xl uppercase  border-2 border-blue-50 p-2 text-left">
                        <th className="table-cell border-l-2 border-blue-50">
                            nom
                        </th>
                        <th className="table-cell border-l-2 border-blue-50">
                            indicatif
                        </th>
                        <th className="table-cell border-l-2 border-blue-50">
                            numero
                        </th>
                        <th className="table-cell border-l-2 border-blue-50">
                            Pays
                        </th>
                        <th className="table-cell border-l-2 border-blue-50">
                            Ville
                        </th>
                        <th className="table-cell border-l-2 border-blue-50">
                            sexe
                        </th>
                        <th className="table-cell border-l-2 border-blue-50 text-center">
                            Actions
                        </th>
                    </thead>
                    {contacts.data.map(contact =>
                    <tbody className="table-row-group bg-blue-100 border-2 border-blue-50">
                        <tr key={contact.id}>
                            <td className="border-l-2 border-blue-50">
                                {contact.name}
                            </td>
                            <td className="border-l-2 border-blue-50">
                                +{contact.indicatif}
                            </td>
                            <td className="border-l-2 border-blue-50">
                                {contact.phone_number}
                            </td>
                            <td className="border-l-2 border-blue-50">
                                {contact.country}
                            </td>
                            <td className="border-l-2 border-blue-50">
                                {contact.city}
                            </td>
                            <td className="border-l-2 border-blue-50">
                                {contact.sex}
                            </td>
                            <td className="border-l-2 border-blue-50 text-center my-2 py-2 text-white text-xl">
                                <InertiaLink href={contact.edit_url} className="my-2 py-2 px-4 bg-blue-500 border rounded border-black hover:bg-gray-400">Edit</InertiaLink>
                            </td>
                        </tr>
                    </tbody>
                    )}
                    </table>
                <Pagination links={contacts.links} />
            </div>
        </Layout>
    )
}
