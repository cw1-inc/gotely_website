'use client'

import { useState, useEffect } from 'react'

import Link from 'next/link'
import Logo from './logo'
// import MobileMenu from './mobile-menu'

export default function Header() {

    const [top, setTop] = useState(true)
    const [isActive, setIsActive] = useState(false)


    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }

    useEffect(() => {
        scrollHandler()
        window.addEventListener('scroll', scrollHandler)
        return () => window.removeEventListener('scroll', scrollHandler)
    }, [top])



    return (
        <header className={`fixed w-full px-1 md:px-16 z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${!top ? 'bg-white backdrop-blur-sm shadow-lg' : ''}`} style={{ zIndex: 9999 }}>

        
                <div className="flex flex-row items-center justify-between h-16 md:h-20">

                    <div className="flex flex-col items-start " style={{flex: 1}}>

                        {/* Site branding */}
                        <Link href="/" className=" flex items-start">

                            <svg width="120" height="40" className="-mx-3" viewBox="0 0 300 100" version="1.1" style={{
                                fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2,
                            }}>
                                <g fill={"black"} transform="matrix(1,0,0,1,20.0316,-1.12926)">
                                    < text x="11.941px" y="68.911px" style={{ fontFamily: "'AvenirNext-Bold', 'Avenir Next', sans-serif", fontWeight: 700, fontSize: "68.921px" }}>G<tspan x="67.009px 112.635px 140.341px 183.486px 206.092px " y="68.911px 68.911px 68.911px 68.911px 68.911px">otely</tspan></text>
                                </g>
                            </svg >
                        </Link>

                        <span className=" text-sm font-extralight">| Powered by CW1</span>
                        {/* <span className="mx-4 hidden md:flex"></span>
                        
                        <span className="mx-1 hidden md:flex text-sm font-medium cursor-pointer hover:underline">Pricing</span> */}


                    </div>
                    {/* <div className="flex flex-1 justify-center" style={{flex: 1}}>
                        <a href="https://blog.gotely.com" className="hidden md:flex mx-4 text-sm font-medium cursor-pointer hover:underline">Knowlege Base</a>
                        <Link href="/pricing" className="hidden md:flex mx-4 text-sm font-medium cursor-pointer hover:underline">Pricing</Link>
                        <a href="https://outlook.office365.com/owa/calendar/CW11@nortb.com/bookings/s/6jgIL5PSM0yONHlJChN-kQ2" className="hidden md:flex mx-4 text-sm font-medium cursor-pointer hover:underline">Contact us</a>
                    </div> */}

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex" style={{flex: 1}}>
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
                            <li>
                                <a href="https://app.gotely.com" className="flex items-center md:px-4 px-3 md:py-1 py-1 text-white bg-zinc-700 hover:bg-zinc-900 border border-zinc-800 ml-3 cursor-pointer rounded-full ">
                                    <span className="text-sm">Try Gotely for Free </span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </a>
                            </li>
                           
                        </ul>

                    </nav>

                    <div className="relative pe-4 pointer md:hidden">
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => setIsActive(true)}>
                            <path d="M0.75 0.5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M0.75 5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M0.75 9.5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                        {isActive &&
                            <div className="bg-white absolute top-4 p-4 rounded-lg shadow-lg right-0 w-72 border divide-y">
                                <a href="https://app.gotely.com" className="flex  items-center justify-end hover:underline mb-2 ">
                                    <span>Sign in </span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </a>
                                <a href="https://outlook.office365.com/owa/calendar/CW11@nortb.com/bookings/s/6jgIL5PSM0yONHlJChN-kQ2" className="flex items-center justify-end pt-2">
                                    <span>Book Demo </span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </a>
                                <Link href="https://outlook.office365.com/owa/calendar/CW11@nortb.com/bookings/s/6jgIL5PSM0yONHlJChN-kQ2" className="flex items-center justify-end pt-2">
                                    <span>Knowlege base </span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </Link>
                                <span onClick={() => setIsActive(false)} className="flex items-center justify-end pt-2">
                                    <span>close </span>
                                    <svg className="w-3 h-3 fill-current text-gray-400 shrink-0 ml-2 -mr-1" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z" fillRule="nonzero" />
                                    </svg>
                                </span>
                            </div>
                        }

                    </div>

        

                </div>
            
        </header>
    )
}
