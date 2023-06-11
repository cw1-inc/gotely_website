import React from 'react'




export default function HeroPartner() {


    return (
        <section className="relative w-full md:h-[75vh] h-[80vh] flex items-center justify-center h-full flex-col">
            <h1 className="text-center text-2xl md:text-5xl font-medium pb-4">Let's Work Together To Do <br />Amazing Things!</h1>
            <p className="font-light pb-4">Be a part of the change in the world.</p>
            <nav className="">
                {/* Desktop sign in links */}
                <ul className="flex grow justify-end flex-wrap items-center pb-4">
                    <li>
                        <a href="https://www.gotely.com/partner#form" className="flex items-center md:px-8 px-3 md:py-3 py-1 text-zinc-800 hover:bg-slate-300 border border-zinc-800 ml-3 cursor-pointer rounded-md ">
                            <span>Become a partner </span>
                            <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                            </svg>
                        </a>
                    </li>

                </ul>

            </nav>

            <iframe width="560" height="315" src="https://www.youtube.com/embed/MeVFVquJWu8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
    )
}