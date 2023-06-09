import React from 'react'

import FeaturesBg from '@/public/images/pc1.png'
import Image from 'next/image'


export default function Hero() {


    return (
        <section>
            <section className="relative w-full md:h-[75vh] h-[80vh]">


                {/* <div class="trapezoid absolute hidden md:block  z-40" style={{ bottom: 0 }}></div> */}


                <div className=" w-full" style={{ right: 0 }}>

                    <Image className="absolute  hidden md:block z-40 right-0 top-28" src={FeaturesBg} alt="gotely" width={600} height={400} style={{ maxWidth: 600 }} />

                </div>

                <div className=" absolute w-full my-auto mx-auto px-4  z-50   px-3 md:px-9">


                    <div className="pt-20 pb-12 md:pt-40 md:pb-20 ">


                        <div className="text-start my-auto">
                            <h1 className="text-sm md:text-lg">AI powered Business Development Platform </h1>
                            <h2 className="text-5xl md:hidden md:text-8xl py-3 md:py-5 font-light leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The Fastest way  to analyse  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">ideas.</span></h2>
                            <h2 className="hidden md:block text-4xl md:text-7xl py-3 md:py-5 font-light leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The Fastest way <br /> to analyse  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">ideas.</span></h2>

                            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">CW1 introduces <b>Gotely</b> <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> For almost free.</span></p>
                            <div className="flex items-center" data-aos="zoom-y-out" data-aos-delay="300">

                                <a href="https://app.gotely.com">
                                    <div className="text-white bg-slate-900 hover:bg-gray-800 px-6 py-2 rounded-md flex justify-between items-center w-36">
                                        <span>Join</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M8.5625 1.25L15.3125 8L8.5625 14.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                            <path d="M14.375 8H0.6875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </a>
                                <a href="https://outlook.office365.com/owa/calendar/CW11@nortb.com/bookings/s/6jgIL5PSM0yONHlJChN-kQ2" className="ms-3 cursor-pointer hover:underline"> Or book a demo</a>
                            </div>
                            <div className="pt-3">
                                <a href="https://www.producthunt.com/posts/gotely?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gotely" target="_blank" >
                                    <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=398139&theme=neutral" alt="Gotely - Powered&#0032;by&#0032;CW1 | Product Hunt" style={{ width: "165px", height: "36px" }} width="250" height="54" />
                                </a>
                            </div>

                        </div>




                    </div>

                </div>







            </section>
        </section>
    )
}