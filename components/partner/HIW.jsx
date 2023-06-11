import React from 'react'




export default function HowItWorks() {


    return (
        <section className="relative w-full flex items-center justify-start py-4 md:py-12 px-1 md:px-16 h-full flex-col">
            <h2 className="text-center text-2xl md:text-5xl font-medium text-slate-800 pb-4">Become a Partner</h2>
           <div className="w-full grid grid-cols-2 gap-16">
            <div className="md:p-4">
                <p className="font-light text-md pb-12">Becoming a partner with CW1 and Gawtely signifies joining forces with a leading innovator in the SaaS landscape. As a partner, you will be a part of an exciting venture that supports businesses and entrepreneurs to better understand their market position, find potential gaps, and make data-driven decisions.</p>
                <h3 className="text-slate-700 font-medium text-xl pb-4">See Immediate Benefits</h3>
                <ul>
                    <li className="ps-3 pb-3"> {">"}Get 30% on Premium Sign-ups.</li>
                    <li className="ps-3 pb-3"> {">"}Get 10% on paid analysis.</li>
                    <li className="ps-3 pb-3"> {">"}Get 10% Discount on our Premium Plan.</li>
                    <li className="ps-3 pb-3"> {">"}Get 10% Discount on our Premium Analysis.</li>
                    <li className="ps-3 pb-3"> {">"}Request payment back at any time.</li>
                </ul>
            </div>
            <div className="md-p-4 flex items-center justify-center ">
                <img src="https://i.ibb.co/4786FTM/Gotely17.png" alt="become a partner to cw1" className="rounded-full w-96 h-96"  />
            </div>
           </div>
        </section>
    )
}