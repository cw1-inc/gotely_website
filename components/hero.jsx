import React from 'react'

import FeaturesBg from '@/public/images/pc1.png'
import Image from 'next/image'


export default function Hero() {


    return (
        <section>
            <div className="pt-20 pb-4 md:pt-28  flex flex-col items-center">


                <div className="text-center my-auto">
                    <h1 className="text-xs md:text-sm">Online Business Strategy Acceleration Platform </h1>

                    <h2 className=" text-4xl md:text-7xl py-3 md:py-5 font-light leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">The fastest way <br /> to accelerate  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">ideas.</span></h2>


                    <div className="flex flex-col items-center">
                        <a href="https://app.gotely.com">
                            <div className="text-white bg-zinc-900 hover:bg-zinc-800 px-6 py-2 rounded-full flex justify-center items-center w-36">
                                <span>Join</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" className="ms-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M8.5625 1.25L15.3125 8L8.5625 14.75" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M14.375 8H0.6875" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                        </a>
                    </div>
                    <div className="flex w-full justify-center text-center" data-aos="zoom-y-out" data-aos-delay="300">
                        <a href="https://outlook.office365.com/owa/calendar/CW11@nortb.com/bookings/s/6jgIL5PSM0yONHlJChN-kQ2" className="mt-3 text-center cursor-pointer hover:underline"> Or book a demo</a>
                    </div>


                </div>




            </div>
            <section className="grid grid-cols-1 md:grid-cols-3 w-full px-3 md:px-16 border-t-[0.5pt] py-4 ">
                <div className="order-2 md:order-1">
                    <p className="text-xl md:text-3xl text-gray-600 mb-4" data-aos="zoom-y-out" data-aos-delay="150">
                        CW1 introduces <b>Gotely</b> <br />
                        <span className="bg-clip-text  text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> for accelerating growth.</span></p>
                    <a href="https://www.producthunt.com/posts/gotely?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-gotely" target="_blank" >
                        <img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=398139&theme=neutral" alt="Gotely - Powered&#0032;by&#0032;CW1 | Product Hunt" style={{ width: "205px", height: "50px" }} width="400" height="54" />
                    </a>
                </div>
                <div className="rounded-lg order-1 md:order-2">
                    <iframe width="100%" height="315" src="https://www.youtube.com/embed/b7zLxS-dnBU?modestbranding=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" className="rounded-xl" allowfullscreen></iframe>
                    {/* <img src="https://i.ibb.co/hZ1PFRm/Screenshot-2023-06-17-at-15-36-10.png" alt="Gotely by cw1" with="100%" className="rounded-lg" /> */}
                </div>
                <div className="pt-3 order-3 md:px-12 px-4 divide-y hidden md:block">
                    <div className="py-4">
                        <h3 className="text-2xl text-zinc-800 font-bold">+300 members </h3>
                        <p className="text-slate-600">During beta phase</p>
                    </div>
                    <div className="py-4">
                        <h3 className="text-2xl text-zinc-800 font-bold">+25 enterprise members </h3>
                        <p className="text-slate-600">During beta phase</p>
                    </div>
                </div>

            </section>
        </section>
    )
}