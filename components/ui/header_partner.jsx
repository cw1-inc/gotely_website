import Link from 'next/link'
import React from 'react'




export default function HeaderPartner() {


    return (
        <header className={`w-full px-1 md:px-16 z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg`} style={{ zIndex: 9999 }}>

            <div className=" mx-auto ">
                <div className="flex items-center justify-between h-16 md:h-20">

                    <div className="flex items-center">

                        {/* Site branding */}
                        <Link href="/" className=" flex items-start">
                            <svg width="40" height="40" viewBox="0 0 12200 12200" version="1.1" style={{ fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2 }}>
                                <g transform="matrix(4.16667,0,0,4.16667,0,0)">
                                    <g transform="matrix(1.84249,0,0,1.84249,-1233.19,-635.285)">
                                        <path d="M1230.23,1350.46L1463.89,1485.36L1763.52,1312.37L1763.52,1253.65L1463.89,1426.65L1331.93,1350.46L1895.48,1025.09L1895.48,1388.56L1463.89,1637.74L1032.29,1388.56L1032.29,1312.37L1829.5,852.099L1895.48,890.191L1895.48,966.378L1230.23,1350.46Z" style={{ fill: "url(#_Linear1)" }} />
                                    </g>
                                    <g transform="matrix(1.84249,0,0,1.84249,-1233.19,-635.285)">
                                        <path d="M1164.25,966.378L1164.25,1025.09L1646.69,746.555L1778.65,822.74L1032.29,1253.65L1032.29,890.191L1463.89,641.009L1595.85,717.196L1164.25,966.378Z" style={{ fill: "url(#_Linear2)" }} />
                                    </g>
                                </g>
                                <defs>
                                    <linearGradient id="_Linear1" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1750.61,-1082.26,1082.26,1750.61,840.808,1630.12)"><stop offset="0" style={{ stopColor: "black", stopOpacity: 1 }} /><stop offset="1" style={{ stopColor: "rgb(79,133,127)", stopOpacity: 1 }} /></linearGradient>
                                    <linearGradient id="_Linear2" x1="0" y1="0" x2="1" y2="0" gradientUnits="userSpaceOnUse" gradientTransform="matrix(1750.61,-1082.26,1082.26,1750.61,691.553,1388.69)"><stop offset="0" style={{ stopColor: "black", stopOpacity: 1 }} /><stop offset="1" style={{ stopColor: "rgb(0,25,54)", stopOpacity: 1 }} /></linearGradient>
                                </defs>
                            </svg>
                            <svg width="120" height="40" viewBox="0 0 300 100" version="1.1" style={{
                                fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2,
                            }}>
                                <g fill={"black"} transform="matrix(1,0,0,1,20.0316,-1.12926)">
                                    < text x="11.941px" y="68.911px" style={{ fontFamily: "'AvenirNext-Bold', 'Avenir Next', sans-serif", fontWeight: 700, fontSize: "68.921px" }}>G<tspan x="67.009px 112.635px 140.341px 183.486px 206.092px " y="68.911px 68.911px 68.911px 68.911px 68.911px">otely</tspan></text>
                                </g>
                            </svg >
                        </Link>
                        <span className="mx-1">|</span>
                        <span className="mx-1 text-sm font-extralight">Powered by CW1</span>
                     

                    </div>

                    {/* Desktop navigation */}
                    <nav className="hidden md:flex md:grow">
                        {/* Desktop sign in links */}
                        <ul className="flex grow justify-end flex-wrap items-center">
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

                    <div className="relative pe-4 pointer md:hidden">
                        <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.75 0.5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M0.75 5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                            <path d="M0.75 9.5H17.25" stroke="#242424" strokeMiterlimit="10" strokeLinecap="round" />
                        </svg>
                     

                    </div>

                    {/* <MobileMenu /> */}

                </div>
            </div>
        </header>
    )
}