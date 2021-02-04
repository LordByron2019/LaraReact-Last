import React, {useState} from 'react'
import Layout from '../Layouts/App'
import {Inertia} from '@inertiajs/inertia'
import {InertiaLink} from "@inertiajs/inertia-react"
import LoadingButton from "../../Shared/LoadingButton";


export default function Welcome({ contact, previous_url, update_url }) {
    const [sending, setSending] = useState(false)

    function getSex(sex){

        if (sex == "homme"){
            return "femme"
        }
        else{
            return "homme"
        }
    }

    const [values, setValues] = useState({
        name: contact.name || '',
        sex: contact.sex || '',
        city: contact.city || '',
        country: contact.country || '',
        indicatif: contact.indicatif || '',
        phone_number: contact.phone_number || '',
    })

    function handleChange(e) {
        const key = e.target.name
        const value =e.target.value
        setValues(values =>({
            ...values,
            [key]: value
        }))
    }


    function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        Inertia.put(update_url, values).then(() => {
            setSending(false)
        })
    }

    return (
        <Layout title="Contact">
            <h1 className="my-5 p-5 text-green-500 text-center text-2xl">Toutes les informations concernant l'utilisateur : {contact.name}</h1>

            <div className="h-full w-full flex justify-center my-5">
                <div className="w-full inline-block">
                    <form onSubmit={handleSubmit} className="w-full inline-block flex justify-center my-5">
                        <div className="w-2/3 grid grid-cols-2 gap-4">
                            <div className="flex justify-between items-center">
                                <label htmlFor="name" className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">Name:</label>
                                <input onChange={handleChange} type="text" value={values.name} className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500" name="name" id="name" />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="sex"  className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">Sex:</label>
                                <select onChange={handleChange} name="sex" id="sex" className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500">
                                    <option value={values.sex}>{values.sex}</option>
                                    <option value={getSex(values.sex)}>{getSex(values.sex)}</option>
                                </select>
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="city" className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">City:</label>
                                <input onChange={handleChange} type="text" value={values.city} className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500" name="city" id="city" />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="country" className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">Country:</label>
                                <input onChange={handleChange} type="text" value={values.country} className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500" name="country" id="country" />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="indicatif"  className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">Indicatif:</label>
                                <input onChange={handleChange} type="text" value={values.indicatif} className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500" name="indicatif" id="indicatif" />
                            </div>
                            <div className="flex justify-between items-center">
                                <label htmlFor="phone_number"  className="mx-1 w-1/3 text-xl font-bold uppercase text-green-500">Number:</label>
                                <input onChange={handleChange} type="text" value={values.phone_number} className="w-full bg-transparent border-2 rounded border-green-500 text-white focus:outline-none focus:ring-green-400 focus:border-green-500 hover:bg-gray-500 active:bg-gray-500" name="phone_number" id="phone_number" />
                            </div>
                            <div className="col-span-2 mt-5">
                                <InertiaLink href={previous_url} className="float-right mx-3 border-2 py-2 rounded-xl px-5 border-red-500 bg-red-500 text-white uppercase font-bold hover:bg-red-700 focus:bg-red-700" >Retour</InertiaLink>
                                {/*<button type="submit" className="float-right mx-3 border-2 py-2 rounded-xl px-5 border-blue-500 bg-blue-500 text-white uppercase font-bold hover:bg-blue-700 focus:bg-blue-700" >Enregistrer</button>*/}
                                <LoadingButton
                                    loading={sending}
                                    type="submit"
                                    className="float-right mx-3 border-2 py-2 rounded-xl px-5 border-blue-500 bg-blue-500 text-white uppercase font-bold hover:bg-blue-700 focus:bg-blue-700"
                                >
                                    Update Contact
                                </LoadingButton>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

        </Layout>
    )
}
