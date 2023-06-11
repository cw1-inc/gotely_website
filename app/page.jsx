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




      <section className="w-full flex flex-col md:flex-row gap-4 py-4 md:py-8 px-3 md:px-9">
        <div className="w-full md:w-1/4 p-4 my-auto">
          <h2 className="font-medium text-lg">Follow Gotely for real business insights </h2>
          <div className="flex w-full pt-4">
            <a href="https://www.linkedin.com/company/gotely/" target='_blank' rel="noreferrer">
              <svg className="mx-2 cursor-pointer" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8205 0.5H2.29437C1.33672 0.5 0.5 1.18906 0.5 2.13547V19.7005C0.5 20.652 1.33672 21.5 2.29437 21.5H19.8153C20.7781 21.5 21.5 20.6464 21.5 19.7005V2.13547C21.5056 1.18906 20.7781 0.5 19.8205 0.5ZM7.00953 18.0045H4.00109V8.65063H7.00953V18.0045ZM5.60938 7.22844H5.58781C4.625 7.22844 4.00156 6.51172 4.00156 5.61453C4.00156 4.70094 4.64141 4.00109 5.62578 4.00109C6.61016 4.00109 7.2125 4.69578 7.23406 5.61453C7.23359 6.51172 6.61016 7.22844 5.60938 7.22844ZM18.0045 18.0045H14.9961V12.89C14.9961 11.6647 14.5583 10.8275 13.4698 10.8275C12.6383 10.8275 12.1461 11.39 11.9272 11.938C11.8452 12.1348 11.8231 12.403 11.8231 12.6767V18.0045H8.81469V8.65063H11.8231V9.95234C12.2609 9.32891 12.9448 8.43172 14.5363 8.43172C16.5111 8.43172 18.005 9.73344 18.005 12.5398L18.0045 18.0045Z" fill="#242424" />
              </svg>
            </a>
            <a href="https://twitter.com/gotely_com" target='_blank' rel="noreferrer">
              <svg className="mx-2" width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M23.25 2.1327C22.406 2.49943 21.513 2.74103 20.5992 2.84989C21.5595 2.28756 22.2817 1.39421 22.6303 0.337386C21.7224 0.868288 20.7307 1.24079 19.6978 1.43895C19.2629 0.983103 18.7397 0.620466 18.1603 0.373079C17.5808 0.125692 16.9571 -0.00127863 16.327 -0.000114132C13.7761 -0.000114132 11.7117 2.03426 11.7117 4.54207C11.7099 4.8909 11.7499 5.23869 11.8308 5.57801C10.0016 5.49226 8.2104 5.02563 6.57187 4.20797C4.93333 3.39032 3.48351 2.23965 2.31516 0.829573C1.90527 1.52057 1.6885 2.30897 1.6875 3.11239C1.6875 4.68739 2.50922 6.07957 3.75 6.8952C3.01487 6.87775 2.29481 6.68318 1.65094 6.32801V6.38426C1.65094 8.58739 3.24469 10.4202 5.35406 10.8374C4.9574 10.9431 4.54864 10.9967 4.13812 10.9968C3.84683 10.9973 3.5562 10.969 3.27047 10.9124C3.85687 12.7171 5.56359 14.0296 7.58531 14.0671C5.94252 15.3331 3.9256 16.0174 1.85156 16.0124C1.48341 16.0118 1.11561 15.9899 0.75 15.9468C2.85993 17.2941 5.31255 18.0067 7.81594 17.9999C16.3172 17.9999 20.9616 11.0764 20.9616 5.07176C20.9616 4.87489 20.9564 4.67801 20.947 4.48582C21.8485 3.8446 22.6283 3.04775 23.25 2.1327Z" fill="#242424" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@gotely_cw1" target='_blank' rel="noreferrer">
              <svg className="mx-2" width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3214 5.56219C17.1695 5.4837 17.0217 5.39765 16.8784 5.30438C16.4618 5.02896 16.0799 4.70445 15.7408 4.33781C14.8923 3.36703 14.5754 2.38219 14.4587 1.69266H14.4634C14.3659 1.12031 14.4062 0.75 14.4123 0.75H10.5479V15.6928C10.5479 15.8934 10.5479 16.0917 10.5395 16.2877C10.5395 16.312 10.5372 16.3345 10.5358 16.3608C10.5358 16.3716 10.5358 16.3828 10.5334 16.3941C10.5334 16.3969 10.5334 16.3997 10.5334 16.4025C10.4927 16.9386 10.3208 17.4566 10.0329 17.9107C9.74505 18.3648 9.34998 18.7413 8.88247 19.0069C8.39523 19.2841 7.84414 19.4295 7.28357 19.4288C5.4831 19.4288 4.02388 17.9606 4.02388 16.1475C4.02388 14.3344 5.4831 12.8663 7.28357 12.8663C7.62439 12.8659 7.96311 12.9196 8.28716 13.0252L8.29185 9.09047C7.30811 8.9634 6.30872 9.04158 5.35671 9.32008C4.4047 9.59858 3.52074 10.0714 2.7606 10.7086C2.09454 11.2873 1.53457 11.9778 1.10591 12.7491C0.942787 13.0303 0.327318 14.1605 0.252787 15.9947C0.205912 17.0358 0.518568 18.1144 0.66763 18.5602V18.5695C0.76138 18.832 1.12466 19.7278 1.71669 20.483C2.19409 21.0887 2.75811 21.6208 3.3906 22.0622V22.0528L3.39997 22.0622C5.27076 23.3334 7.34497 23.25 7.34497 23.25C7.70404 23.2355 8.90685 23.25 10.2728 22.6027C11.7878 21.885 12.6503 20.8158 12.6503 20.8158C13.2013 20.1769 13.6394 19.4488 13.9459 18.6628C14.2956 17.7436 14.4123 16.6411 14.4123 16.2005V8.27297C14.4592 8.30109 15.0836 8.71406 15.0836 8.71406C15.0836 8.71406 15.9831 9.29063 17.3865 9.66609C18.3934 9.93328 19.75 9.98953 19.75 9.98953V6.15328C19.2747 6.20484 18.3095 6.05484 17.3214 5.56219Z" fill="#242424" />
              </svg>
            </a>


          </div>
        </div>
        <div className="w-full md:w-1/4 p-4">
          <img className="rounded-2xl" src="https://i.ibb.co/bFVzzVX/Gotely6.png" alt="people following gotely" style={{ height: 300, objectFit: "cover" }} />
        </div>
        <div className="w-full md:w-1/4 p-4">
          <img className="rounded-2xl" src="https://i.ibb.co/DV606LV/IMG-7662.jpg" alt="people following gotely" style={{ height: 300, width: "100%", objectFit: "cover" }} />
        </div>
        <div className="w-full md:w-1/4 p-4 md:my-auto">
          <h2 className="font-medium text-lg pb-4">Discover Pedro and Mia, the co-founders of Gotely and CW1</h2>
          <a href="https://blog.gotely.com/blog/hear-more-about-pedro-and-mia-founders-of-cw1-and-gotely" className="bg-zinc-700 rounded-lg cursor-pointer px-5 py-3 hover:bg-zinc-800 text-white">Read more here</a>
        </div>
      </section>
      <hr />

     <Footer />
    </main>
  )
}
