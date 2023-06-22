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





export default function Home() {
  return (
    <main className="bg-white">
      
      
      
      <Header />
      <Hero />
      <Grizzly />
      <NewFeatures />

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

      <Footer />
    </main>
  )
}
