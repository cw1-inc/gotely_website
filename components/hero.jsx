import React from 'react'

import Image from 'next/image'


export default function Hero() {


    return (
        <section>
            <section className="relative w-full h-[90vh]">


                {/* <div class="trapezoid absolute hidden md:block  z-40" style={{ bottom: 0 }}></div> */}


                <div className=" w-full" style={{ right: 0 }}>

                    <Image className="absolute  hidden md:block z-40 right-0 top-28" src="/images/pc1.png" alt="gotely" width={700} height={400} />

                </div>

                <div className=" absolute w-full my-auto mx-auto px-4  z-50   px-3 md:px-9">


                    <div className="pt-32 pb-12 md:pt-40 md:pb-20 ">


                        <div className="text-start pb-12 md:pb-16 ">
                            <h1 className="text-sm md:text-md">AI powered Business Development Platform </h1>
                            <h2 className="text-3xl md:text-6xl py-5 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Business Development <br /> just became  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">faster</span></h2>

                            <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">CW1 introduces the <b>Gotely</b> <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> For almost free.</span></p>
                            <div className="" data-aos="zoom-y-out" data-aos-delay="300">

                                <a href="https://app.gotely.com">
                                    <span className="btn text-white bg-slate-900 hover:bg-gray-800 w-full px-6 py-2 rounded-md">Join Beta</span>
                                </a>
                            </div>

                        </div>




                    </div>

                </div>

                {/* Illustration behind hero content */}
                <div className="relative w-full h-full gotely" aria-hidden="true">
                    <div className="background ">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>






            </section>
        </section>
    )
}