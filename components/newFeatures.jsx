const transferFeatures = [
    {
      id: 1,
      name: 'Product Validation',
      description:
        'Validating your idea or product, either you are a startup or is always difficult. With our AI model based in 2TBs of business related data, we are able to identify how feasible that idea is, and which businesses you should look at to get inspiration.',
    
    },
    {
      id: 2,
      name: 'Investor Connection',
      description:
        'Most startups do not get investment for one single reason. We help you preparing to show the materials to investors, while as well advising you which investors are more suitable for your project.',
    
    },
    {
      id: 3,
      name: 'Scaling Difficulties',
      description:
        'By following our strategic framework, our AI and experts will advise you on a regular basis of what you should focus and which aspects of the business come next. Sometimes you need to spend more time in RnD other than Sales, and that is something we can advise you on.',
    
    },
  ]
  const communicationFeatures = [
    {
      id: 1,
      name: '+40% rate of investment garantee',
      description:
        'We have a better success ratio compared to similar platforms and ventures.',
    
    },
    {
      id: 2,
      name: 'Better matching',
      description:
        'We know investors types and finding the right match is one of the hardest challenges. We help you with that.',
    
    },
  ]
  
  export default function NewFeatures() {
    return (
      <div className="overflow-hidden bg-gray-50 py-16 lg:py-24">
        <div className="relative mx-auto max-w-xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <svg
            className="absolute left-full hidden -translate-x-1/2 -translate-y-1/4 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)" />
          </svg>
  
          <div className="relative">
            <h2 className="text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              A faster way to succeed
            </h2>
            <p className="mx-auto mt-4 max-w-3xl text-center text-xl text-gray-500">
             We used to work for big-4 and we were feeling discussed by refusing to deal with bootstraped startups.So we created Gotely to guide, teach and monitor you until you achieve an IPO.
            </p>
          </div>
  
          <div className="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:items-center lg:gap-8">
            <div className="relative">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Faster validation, scaling, capital rasing.</h3>
              <p className="mt-3 text-lg text-gray-500">
               We identified three major problems.
              </p>
  
              <dl className="mt-10 space-y-10">
                {transferFeatures.map((item) => (
                  <div key={item.id} className="relative">
                    <dt>
                      <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                        {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                      </div>
                      <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
  
            <div className="relative -mx-4 mt-10 lg:mt-0 divide-y p-9 drop-shadow-lg faded" aria-hidden="true">
             <div className="bg-white p-5  ">
                <span className="font-light text-zinc-600 text-xs">Step 1</span>
                <h6 className="font-bold text-zinc-800 text-lg">Validate product</h6>
                <p className="font-light text-zinc-800 text-sm mb-4">Consider the following aspects when formulating your business...</p>
                <span className="px-5 py-2 text-white bg-zinc-900 mt-4 cursor-pointer rounded-lg hover:bg-zinc-800 ">Mark as complete</span>
             </div>
             <div className="bg-white p-5">
                <span className="font-light text-zinc-600 text-xs">Step 2</span>
                <h6 className="font-bold text-zinc-800 text-lg">Focus Groups</h6>
                <p className="font-light text-zinc-800 text-sm mb-4">Prepare the questions based on the assumptions you have about... </p>
                <span className="px-5 py-2 text-white bg-zinc-900 mt-4 cursor-pointer rounded-lg hover:bg-zinc-800 ">Mark as complete</span>
             </div>
             <div className="bg-white p-5">
                <span className="font-light text-zinc-600 text-xs">Step 3</span>
                <h6 className="font-bold text-zinc-800 text-lg">Scenario Planning</h6>
                <p className="font-light text-zinc-800 text-sm mb-4">How many people opposed? how many sales expected in the first month? ...</p>
                <span className="px-5 py-2 text-white bg-zinc-900 mt-4 cursor-pointer rounded-lg hover:bg-zinc-800 ">Mark as complete</span>
             </div>
             <div className="bg-white p-5">
                <span className="font-light text-zinc-600 text-xs">Step 4</span>
                <h6 className="font-bold text-zinc-800 text-lg">Go-To-Market</h6>
                <p className="font-light text-zinc-800 text-sm mb-4">How will you launch? When will you launch? Where will you launch? </p>
                <span className="px-5 py-2 text-white bg-zinc-900 mt-4 cursor-pointer rounded-lg hover:bg-zinc-800 ">Mark as complete</span>
             </div>
            </div>
          </div>
  
          <svg
            className="absolute right-full hidden translate-x-1/2 translate-y-12 transform lg:block"
            width={404}
            height={784}
            fill="none"
            viewBox="0 0 404 784"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                x={0}
                y={0}
                width={20}
                height={20}
                patternUnits="userSpaceOnUse"
              >
                <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width={404} height={784} fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)" />
          </svg>
  
          <div className="relative mt-12 sm:mt-16 lg:mt-24">
            <div className="lg:grid lg:grid-flow-row-dense lg:grid-cols-1 lg:items-center lg:gap-8">
              <div className="lg:col-start-2">
                <h3 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">Connect with the right investors</h3>
                <p className="mt-3 text-lg text-gray-500">
                We work with VCs and manage portfolios towards different investor types. We help you preparing the pitch deck and financials to present to investors, and contact some of the investors on your behalf.
                </p>
  
                <dl className="mt-10 space-y-10">
                  {communicationFeatures.map((item) => (
                    <div key={item.id} className="relative">
                      <dt>
                        <div className="absolute flex h-12 w-12 items-center justify-center rounded-md bg-black text-white">
                          {/* <item.icon className="h-6 w-6" aria-hidden="true" /> */}
                        </div>
                        <p className="ml-16 text-lg font-medium leading-6 text-gray-900">{item.name}</p>
                      </dt>
                      <dd className="mt-2 ml-16 text-base text-gray-500">{item.description}</dd>
                    </div>
                  ))}
                </dl>
              </div>
  
           
            </div>
          </div>
        </div>
      </div>
    )
  }