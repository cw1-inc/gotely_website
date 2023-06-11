"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'




export default function FormPartnerSign() {

    const [data, setData] = useState({
        email: "",
        refi: ""
    })
    const [error, setError] = useState(null)
    const [completed, setCompleted] = useState(0)
    const router = useRouter()

    function handleChange(e) {
        e.preventDefault()
        setData((ps) => ({ ...ps, [e.target.name]: e.target.value }))
    }


    async function handleSubmit() {
        if (data.refi.trim() === "" || data.email.trim() === "") return setError("Please fill both inputs")
        let req = await fetch(`https://lead-gen.azurewebsites.net/gotely/partners/register?email=${data.email}&refi=${data.refi}`, {
            method: "POST",
            headers: {
                "ID": "JXStncq0",
                "Content-Type": "application/json"
            }
        })
        let res = await req.json()
        if (res.code === 1) {
            setCompleted(1)
        }
        setCompleted(1)
    }

    if (completed === 1) return (<div className="flex items-center w-full flex-col justify-center">
        <svg width="60" height="60" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 10C19 5.03125 14.9688 1 10 1C5.03125 1 1 5.03125 1 10C1 14.9688 5.03125 19 10 19C14.9688 19 19 14.9688 19 10Z" stroke="#50C878" strokeMiterlimit="10" />
            <path d="M15.25 7L10.0061 13L7.75848 10.75" stroke="#50C878" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6.99766 13L4.75 10.75" stroke="#50C878" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12.3301 7L9.91373 9.76562" stroke="#50C878" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <h3 className="text-slate-700 py-4">You will receive an email from us with the steps in how to proceed.</h3>
        <span onClick={() => router.push("/")} className="bg-zinc-700 hover:bg-zinc-800 cursor-pointer text-white py-2 px-8 rounded-lg">Home</span>

    </div>)

    return (
        <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" name="email" value={data.email} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <label htmlFor="refi">The referral code you wish to use:</label>
            <input type="text" id="refi" name="refi" value={data.refi} onChange={handleChange} className="border rounded-lg p-2 mb-4" />
            <span onClick={handleSubmit} className="bg-zinc-700 hover:bg-zinc-800 cursor-pointer text-white py-2 px-8 rounded-lg">Enroll</span>
            {error && <span className="text-red-500">{error}</span>}
            <div className="text-xs mt-4">By signing up, you acknowledge <br /> and agree to our <a className="font-bold" href="https://www.cw1.com/legal/data-privacy">Privacy Policy and Terms of Service </a>  <br /> and consent to the collection, storage, and use of your  <br />information as described therein.</div>

        </form>
    )
}