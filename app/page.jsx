import Features from '@/components/features'
import FeaturesBlocks from '@/components/features-blocks'
import Grizzly from '@/components/gridFeature'
import Hero from '@/components/hero'
import Newsletter from '@/components/newsletter'
import Testimonials from '@/components/testimonials'
import Header from '@/components/ui/header'
import Image from 'next/image'



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
          <video alt="gotely" controls width="90%" type='video/mp4' ><source src={"/images/gotely.mp4"} /></video>
        </div>
        <div className="w-full md:w-1/2 my-auto">
          <h2>CUTTING-EDGE PLATFORM</h2>
          <h3 className="text-5xl pb-3">Your own strategy <br /> <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400"> advisor.</span></h3>
          <p>Merging AI-enhanced evaluation criteria with top strategy & finance expertise, ensuring exceptional, on-brand deliveries.</p>
        </div>

      </section>

      <Testimonials />

      <Newsletter />

    </main>
  )
}
