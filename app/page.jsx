import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Grizzly from '@/components/gridFeature'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Header from '@/components/ui/header'
import Image from 'next/image'
import FeaturesBg from '@/public/zzz.png'




export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Grizzly />

      <Features />
      <FeaturesBlocks />


      <section className="px-3 md:px-9 flex flex-wrap">

        <div className="w-full md:block relative md:w-1/2 py-8">
          <Image className="  hidden md:block z-40 right-0 top-28" src={FeaturesBg} alt="gotely" width={700} height={400} />
        </div>
        <div className="w-full md:w-1/2 my-auto py-32 md:py-auto">
          <h2>CUTTING-EDGE PLATFORM</h2>
          <h3 className="text-5xl pb-3">Your own strategy <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> advisor.</span></h3>
          {/* <p>Our AI model has been trained with data of 40 different market branches, 200 different companies and the hability of "thinking out of the box".</p> */}
        </div>

      </section>

      <Testimonials />

      <Newsletter />

      <hr />
      <div className="flex justify-between items-center px-3 md:px-9">
        <div className="flex justify-between relative items-center">

          <svg width="80" height="40" viewBox="0 0 300 100" version="1.1" style={{
            fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2,
          }}>
            <g fill={"black"} transform="matrix(1,0,0,1,20.0316,-1.12926)">
              < text x="11.941px" y="68.911px" style={{ fontFamily: "'AvenirNext-Bold', 'Avenir Next', sans-serif", fontWeight: 700, fontSize: "68.921px" }}>G<tspan x="67.009px 112.635px 140.341px 183.486px 206.092px " y="68.911px 68.911px 68.911px 68.911px 68.911px">otely</tspan></text>
            </g>
          </svg >
          <span>|</span>
          <p className="py-4 text-xs font-light ps-3">CW1, Inc 2023 © All rights reserved</p>
        </div>
        <a className="text-xs font-light" href="https://www.cw1.com/legal/data-privacy">Privacy policy</a>
      </div>

    </main>
  )
}
