import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Grizzly from '@/components/gridFeature'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Header from '@/components/ui/header'
import Image from 'next/image'
import FeaturesBg from '@/public/zzz.png'
import Footer from '@/components/ui/footer'
import ChatBot from '@/components/chatbot'
import NewFeatures from '@/components/newFeatures'
import NewFeatures2 from '@/components/newFeatures2'
import Features2 from '@/components/features2'





export default function Home() {
  return (
    <main className="bg-white">



      <Header />
      <Hero />
      <div className="px-3 md:px-40 flex justify-center">
        <img src="/images/aaaa.png" alt="cw1 gotely strategic tools and insights" className="rounded-md md:rounded-2xl md:w-full w-full " />
      </div>
      {/* <Grizzly /> */}
      <NewFeatures2 />
      {/* <NewFeatures /> */}

      <Features2 />
      {/* <FeaturesBlocks /> */}

      <div className="w-full flex-col items-center flex">
        <h2 className="text-center text-3xl md:text-5xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Don&apos;t be unprepared when looking for investors.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center md:text-lg text-md text-gray-500 font-light">
          We have access and represent multiple investors, but they want to see things properly and feel their money is secure. We help you preparing PnLs, forecasts, idea feasibiltiy and market penetration studies so that you have a bigger chance of being funded.
        </p>
      </div>

      <div className="px-3 md:px-40 flex justify-center py-12">
        <img src="/images/f5.png" alt="cw1 gotely strategic tools and insights" className="rounded-md md:rounded-3xl md:w-3/4 w-full " />
      </div>



      <div className="w-full flex-col items-center flex py-20">
        <h2 className="text-center text-3xl md:text-5xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
          Meet the project team.
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center md:text-lg text-md text-gray-500 font-light">
          We have been working for many people, but we want now as well the opportunity of growing our own consulting company. Since we have tech on our skillset, we decided to combine finance, strategy and tech.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-5 max-w-3xl gap-4 py-8">
          <div>
            <h6 className="font-semibold ">Pedro</h6>
            <span>Strategy Senior Partner</span>
          </div>
          <div>
            <h6 className="font-semibold ">Mia</h6>
            <span>Tech Senior Partner</span>
          </div>
          <div>
            <h6 className="font-semibold ">Meredith</h6>
            <span>Customer Development specialist</span>
          </div>
          <div>
            <h6 className="font-semibold ">Antony</h6>
            <span>Developer</span>
          </div>
          <div>
            <h6 className="font-semibold ">Erik</h6>
            <span>Developer</span>
          </div>

        </div>
      </div>




      <Testimonials />

      <Newsletter />





      <hr />

      <Footer />
    </main>
  )
}
