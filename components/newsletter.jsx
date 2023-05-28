import Image from "next/image";
import Link from "next/link";

export default function Newsletter() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-12">
        <div className="pb-12 md:pb-20">

          {/* CTA box */}
          <div className="relative bg-zinc-800 rounded py-10 px-8 md:py-16 md:px-12 shadow-2xl overflow-hidden" data-aos="zoom-y-out">

            {/* Background illustration */}
            {/* <div className="absolute right-0 bottom-0 pointer-events-none hidden lg:block" aria-hidden="true">
              <svg width="428" height="328" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <radialGradient cx="35.542%" cy="34.553%" fx="35.542%" fy="34.553%" r="96.031%" id="ni-a">
                    <stop stopColor="#DFDFDF" offset="0%" />
                    <stop stopColor="#4C4C4C" offset="44.317%" />
                    <stop stopColor="#333" offset="100%" />
                  </radialGradient>
                </defs>
                <g fill="none" fillRule="evenodd">
                  <g fill="#FFF">
                    <ellipse fillOpacity=".04" cx="185" cy="15.576" rx="16" ry="15.576" />
                    <ellipse fillOpacity=".24" cx="100" cy="68.402" rx="24" ry="23.364" />
                    <ellipse fillOpacity=".12" cx="29" cy="251.231" rx="29" ry="28.231" />
                    <ellipse fillOpacity=".64" cx="29" cy="251.231" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".12" cx="342" cy="31.303" rx="8" ry="7.788" />
                    <ellipse fillOpacity=".48" cx="62" cy="126.811" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".12" cx="78" cy="7.072" rx="2" ry="1.947" />
                    <ellipse fillOpacity=".64" cx="185" cy="15.576" rx="6" ry="5.841" />
                  </g>
                  <circle fill="url(#ni-a)" cx="276" cy="237" r="200" />
                </g>
              </svg>
            </div> */}

            <div className="relative " style={{ width: "100%", display: "flex", justifyContent: "center" }}>

              {/* CTA content */}
              <div className="text-center  lg:max-w-xl">
                <h3 className="h3 text-white mb-2">Join the beta.</h3>
                <p className="text-gray-300 text-lg mb-6">Join the beta testing of the platfom.</p>

                {/* CTA form */}
                <form className="w-full ">
                  <a href="https://app.gotely.com" className="flex flex-col sm:flex-row justify-center ">
                    {/* <input type="email" className="form-input w-full appearance-none bg-gray-800 border border-gray-700 focus:border-gray-600 rounded-sm px-4 py-3 mb-2 sm:mb-0 sm:mr-2 text-white placeholder-gray-500" placeholder="Your email…" aria-label="Your email…" /> */}
                    <span className="md:px-6 px-3 py-2 rounded-lg cursor-pointer text-dark bg-neutral-50 hover:bg-neutral-300 shadow" >Enroll</span>
                  </a>
                  {/* Success message */}
                  {/* <p className="text-sm text-gray-400 mt-3">Thanks for subscribing!</p> */}
                  <p className="text-sm text-gray-400 mt-3">No spam. You can delete your account at any time.</p>
                </form>
              </div>

            </div>

          </div>

        </div>
        <hr />
        <div className="flex justify-between items-center">
          <div className="flex justify-between relative items-center">
            
            <svg width="80" height="40" viewBox="0 0 300 100" version="1.1" style={{
              fillRule: "evenodd", clipRule: "evenodd", strokeLinejoin: "round", strokeMiterlimit: 2,
            }}>
              <g fill={"black"} transform="matrix(1,0,0,1,20.0316,-1.12926)">
                < text x="11.941px" y="68.911px" style={{ fontFamily: "'AvenirNext-Bold', 'Avenir Next', sans-serif", fontWeight: 700, fontSize: "68.921px" }}>G<tspan x="67.009px 112.635px 140.341px 183.486px 206.092px " y="68.911px 68.911px 68.911px 68.911px 68.911px">otely</tspan></text>
              </g>
            </svg >
            <span>|</span>
            <p className="py-4 text-xs font-light">CW1, Inc 2023 © All rights reserved</p>
          </div>
          <a className="text-xs font-light" href="https://www.cw1.com/legal/data-privacy">Privacy policy</a>
        </div>
      </div>
    </section>
  )
}